import type { BlogArticle } from '../blog';
import { posts, authors } from '../blog';

function findPost(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}

const article: BlogArticle = {
  ...findPost('scaling-postgres-beyond-1b-rows'),
  publishedISO: '2026-02-18',
  authorDetail: authors['James Park'],
  relatedSlugs: [
    'introducing-ai-assistants',
  ],
  quickAnswer:
    'We scaled Postgres past 1.2 billion rows by range-partitioning tables by workspace_id across 40 partitions, using partial indexes to cut index size by 60%, and adding PgBouncer in transaction mode for connection pooling. This brought p99 query latency back under 10ms with zero-downtime migrations.',
  whoIsThisFor: [
    'Backend and infrastructure engineers scaling Postgres for multi-tenant SaaS',
    'Database administrators managing billion-row tables with growing latency',
    'Engineering leaders evaluating whether to stay on Postgres or migrate to a distributed database',
  ],
  keyTakeaways: [
    'We serve 1.2 billion rows across 40+ Postgres partitions with p99 query times under 10ms.',
    'Range partitioning by workspace_id gave us the best balance of query performance and operational simplicity.',
    'Partial indexes on hot columns reduced index size by 60% and improved write throughput by 35%.',
    'Connection pooling with PgBouncer in transaction mode was essential beyond 500 concurrent connections.',
    'We run zero-downtime migrations using pg_repack and careful lock management.',
    'Monitoring query plans in production (not just staging) caught three critical regressions before they hit users.',
  ],
  sections: [
    {
      id: 'the-scaling-challenge',
      heading: 'What does scaling Postgres past a billion rows look like?',
      content: `
          <p>At LeverLoop, Postgres is our primary datastore. It holds contacts, deals, emails, activity logs, and search indexes for every workspace. By late 2025, our largest tables crossed one billion rows — and query performance was starting to degrade.</p>
          <p>The symptoms were familiar: p99 latencies climbing from 8ms to 45ms, vacuum operations running for hours, and index bloat consuming 3x the space of the actual data. We needed a strategy that would buy us at least 10x headroom without a full re-architecture.</p>
        `,
    },
    {
      id: 'partitioning-strategy',
      heading: 'Why we chose range partitioning by workspace_id',
      content: `
          <p>We evaluated three partitioning strategies: hash, list, and range. Range partitioning by <code>workspace_id</code> won because nearly every query in our application is scoped to a single workspace, which means Postgres can prune partitions at plan time and only touch the relevant subset of data.</p>
          <ul>
            <li><strong>Hash partitioning</strong> distributes data evenly but doesn't help with workspace-scoped queries.</li>
            <li><strong>List partitioning</strong> gives precise control but requires manual partition management as workspaces grow.</li>
            <li><strong>Range partitioning</strong> balances even distribution with automatic pruning and simple operational management.</li>
          </ul>
          <p>After migrating our three largest tables to 40 range partitions, p99 query times dropped from 45ms back to under 10ms — even as data continued to grow.</p>
        `,
    },
    {
      id: 'indexing-and-tuning',
      heading: 'Partial indexes and connection pooling at scale',
      content: `
          <p>Partitioning solved the scan problem, but we still had index bloat and connection pressure. Two changes made the biggest impact:</p>
          <p><strong>Partial indexes</strong> on hot columns — like <code>WHERE status = 'active'</code> — reduced total index size by 60%. Since most queries filter on active records, the partial indexes serve the same queries with a fraction of the storage and maintenance cost.</p>
          <p><strong>PgBouncer in transaction mode</strong> became essential once we passed 500 concurrent connections. Without it, Postgres spent more time managing connections than executing queries. Transaction-mode pooling reduced active backend connections from 800+ to under 100, freeing resources for actual work.</p>
        `,
    },
    {
      id: 'zero-downtime-migrations',
      heading: 'How we run zero-downtime migrations on billion-row tables',
      content: `
          <p>Schema changes on large tables are where most teams hit operational pain. A naive <code>ALTER TABLE</code> can lock a billion-row table for hours. We use a combination of <code>pg_repack</code> for table rewrites and careful lock management for additive changes.</p>
          <ol>
            <li><strong>Additive changes</strong> (new columns, new indexes) use <code>CREATE INDEX CONCURRENTLY</code> and <code>ALTER TABLE ... ADD COLUMN</code> with defaults — both non-blocking in Postgres 11+.</li>
            <li><strong>Type changes and rewrites</strong> use <code>pg_repack</code>, which rebuilds the table in the background and swaps it atomically.</li>
            <li><strong>Destructive changes</strong> (dropping columns) are deferred to maintenance windows with explicit lock timeout guards.</li>
          </ol>
          <p>We haven't had a migration-related outage in 14 months using this approach.</p>
        `,
    },
    {
      id: 'monitoring-query-plans',
      heading: 'Why we monitor query plans in production, not just staging',
      content: `
          <p>Staging environments lie. They have different data distributions, different table statistics, and different connection patterns. Three of our worst performance regressions were invisible in staging but immediately apparent in production query plans.</p>
          <p>We now run <code>pg_stat_statements</code> with custom alerting on:</p>
          <ul>
            <li>Any query whose mean execution time increases by more than 2x week-over-week.</li>
            <li>Any query that triggers a sequential scan on a table with more than 1M rows.</li>
            <li>Any new query pattern (not seen in the previous 7 days) that exceeds 50ms.</li>
          </ul>
          <p>This monitoring has caught regressions from ORM-generated queries, unexpected index drops, and autovacuum configuration drift — all before users noticed.</p>
        `,
    },
  ],
  faq: [
    {
      question: 'When should you partition a Postgres table?',
      answer:
        'Consider partitioning when tables exceed 100 million rows and you have a natural partition key (like tenant or workspace ID) that aligns with your most common query patterns.',
    },
    {
      question: 'Does partitioning slow down writes?',
      answer:
        'In our experience, write performance stayed the same or improved slightly because indexes on individual partitions are smaller and faster to update than a single massive index.',
    },
    {
      question: 'Can you partition an existing table without downtime?',
      answer:
        'Yes, using tools like pg_repack to rebuild the table in the background and swap it atomically. We detail our approach in the zero-downtime migrations section above.',
    },
    {
      question: 'Is PgBouncer required for Postgres at scale?',
      answer:
        'Not strictly required, but highly recommended beyond 500 concurrent connections. Transaction-mode pooling reduced our active backends from 800+ to under 100.',
    },
    {
      question: 'How do you monitor query plan regressions in production?',
      answer:
        'We use pg_stat_statements with custom alerts for 2x latency increases, sequential scans on large tables, and any new query pattern exceeding 50ms.',
    },
  ],
};

export default article;
