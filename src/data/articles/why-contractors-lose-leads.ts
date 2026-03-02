import type { BlogArticle } from '../blog';
import { posts, authors } from '../blog';

function findPost(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}

const article: BlogArticle = {
  ...findPost('why-contractors-lose-leads'),
  publishedISO: '2026-02-28',
  authorDetail: authors['Maria Gonzalez'],
  relatedSlugs: [
    'win-more-home-service-jobs',
    'introducing-ai-assistants',
  ],
  quickAnswer:
    'Most home service contractors lose the majority of their leads because they respond too slowly. Research shows 78% of homeowners hire the first contractor who responds, yet the average contractor takes 24-48 hours to follow up. By then the homeowner has already called three competitors. The fix is an automated speed-to-lead system that responds in under 60 seconds and drip follow-up sequences that keep working leads without manual effort. LeverLoop combines instant auto-response, drip campaigns, and a full lead pipeline so nothing falls through the cracks.',
  whoIsThisFor: [
    'HVAC, plumbing, electrical, and roofing contractors who spend money on leads but close fewer than half',
    'Owners who suspect they are losing jobs because the office cannot keep up with incoming calls and form fills',
    'Office managers juggling leads across voicemail, email, web forms, and Google LSA without a unified system',
    'Contractors evaluating CRM or lead management tools and want to understand what actually moves the needle',
  ],
  keyTakeaways: [
    '78% of homeowners hire the first contractor who responds. Speed is the single biggest factor in winning jobs.',
    'The average contractor takes 24-48 hours to respond to a new lead. By then, the homeowner has contacted at least 3 other companies.',
    'Responding within 1 minute increases lead conversion by 391%. Waiting 30 minutes drops your odds by 21x.',
    'Automated drip follow-up is table stakes now. LeverLoop connects drip campaigns to your full pipeline, estimates, and revenue recovery so nothing works in isolation.',
    'Contractors who automate lead response and follow-up close 2-3x more jobs from the same lead volume.',
    'The cost of a missed lead is not just one lost job — it is the lifetime value of that customer, their referrals, and their reviews.',
  ],
  sections: [
    {
      id: 'the-60-percent-problem',
      heading: 'The 60% Problem: Where Your Leads Actually Go',
      content: `
          <p>You are paying for leads. Google Ads, LSA, Angi, Thumbtack, your website forms, the phone number on your truck. The leads are coming in. But most of them never turn into jobs.</p>
          <p>The industry data is consistent and blunt: <strong>contractors lose between 50% and 70% of the leads they generate.</strong> Not because the leads are bad. Not because homeowners are tire-kickers. Because nobody responded fast enough.</p>
          <p>Here is what happens inside a typical four-person plumbing shop on a Tuesday morning. A web form comes in at 9:14am. The office manager is on the phone with a supplier. She sees the notification at 9:45 and makes a mental note to call back. By 10:30 she has handled two scheduling changes and a callback from yesterday. She calls the lead at 11:15. No answer. She leaves a voicemail. The homeowner already booked with the company that texted them back at 9:16.</p>
          <p>This is not a people problem. It is a systems problem. And it is costing you tens of thousands of dollars a year.</p>

          <h3>The math nobody wants to do</h3>
          <p>Say you spend $3,000/month on lead generation and get 60 leads. If you are converting 25% of them, that is 15 jobs. But if 60% of those leads never got a timely response, you did not lose to a better contractor. You lost to a faster one. Or you lost to your own voicemail.</p>
          <p>At an average ticket of $1,200, those 36 unworked leads represent <strong>$43,200 in potential revenue every month</strong> walking out the door. Over a year, that is more than half a million dollars. From leads you already paid for.</p>

          <table>
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Leads/Month</th>
                <th>Close Rate</th>
                <th>Jobs Won</th>
                <th>Revenue (at $1,200 avg)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>No speed-to-lead system</td>
                <td>60</td>
                <td>25%</td>
                <td>15</td>
                <td>$18,000</td>
              </tr>
              <tr>
                <td>Sub-5-minute response</td>
                <td>60</td>
                <td>45%</td>
                <td>27</td>
                <td>$32,400</td>
              </tr>
              <tr>
                <td>Sub-1-minute auto-response + drip</td>
                <td>60</td>
                <td>55%</td>
                <td>33</td>
                <td>$39,600</td>
              </tr>
            </tbody>
          </table>
          <p>Same ad spend. Same leads. Dramatically different outcomes. The only variable is how fast and how consistently you respond.</p>
        `,
    },
    {
      id: 'speed-to-lead-data',
      heading: 'The Speed-to-Lead Data Every Contractor Should Know',
      content: `
          <p>The phrase "speed to lead" has been floating around sales circles for years, but in home services the data is especially unforgiving.</p>
          <p><strong>78% of homeowners hire the first contractor who responds to their inquiry.</strong> Not the cheapest. Not the one with the best Google reviews. The first one who actually picks up or texts back.</p>
          <p>Modernize's research found that responding within one minute increases lead conversion by <strong>391%</strong>. Wait 30 minutes and your odds of qualifying that lead drop by <strong>21x</strong>. Wait an hour and you are competing with contractors who already have an appointment booked.</p>

          <h3>What homeowners actually expect</h3>
          <p>Over 70% of homeowners expect a same-day response. More than half expect it within an hour. They are not leisurely shopping. They have a broken AC, a leaking pipe, or a breaker that keeps tripping. They want someone to acknowledge the problem and give them a next step.</p>
          <p>And here is the kicker: <strong>the average contractor takes 24 to 48 hours to respond to a new lead.</strong> Some never respond at all. Jobber's 2026 data shows that only 17% of HVAC contractors respond within an hour. That is the worst of any trade surveyed.</p>
          <p>Think about what that gap looks like from the homeowner's side. They filled out a form or called three companies. One texted back in 45 seconds. One called back in 20 minutes. The third never responded. Who do you think gets the job?</p>

          <h3>Why phone leads are gold (and why you are probably missing them)</h3>
          <p>Phone leads convert at <strong>46%</strong>, nearly six times the industry average of 7.8% across all lead types. That makes every missed call one of the most expensive mistakes in your business. A call that rolls to voicemail during business hours is not a minor inconvenience. It is a lost job.</p>
          <p>If you cannot staff the phones full-time, an answering service during business hours is worth every penny. At minimum, every missed call should trigger an <a href="/features/speed-to-lead">instant automated text</a>: "Got your message. What is going on and what is the address?" That buys you time to call back within minutes.</p>
        `,
    },
    {
      id: 'why-manual-follow-up-fails',
      heading: 'Why Manual Follow-Up Always Fails at Scale',
      content: `
          <p>Every contractor starts the same way. Leads come in. You write them on a whiteboard or put them in a spreadsheet. You tell the office to "make sure we call everyone back." It works fine when you are doing 20 jobs a month.</p>
          <p>Then you grow. You are running 40, 60, 80 leads a month. Three techs in the field. Estimates stacking up. And the follow-up system — which was always just a person trying to remember — starts breaking down.</p>

          <h3>The follow-up cliff</h3>
          <p>Here is the pattern we see over and over:</p>
          <ul>
            <li><strong>Day 0:</strong> Lead comes in. Someone responds (maybe).</li>
            <li><strong>Day 1:</strong> If the lead did not book, it sits.</li>
            <li><strong>Day 3:</strong> It is buried under newer leads.</li>
            <li><strong>Day 7:</strong> Nobody remembers it exists.</li>
          </ul>
          <p>ServiceTitan's 2025 data shows that <strong>47% of contractors doing $10M+ in revenue say following up on unsold estimates generates 11-15% of their income.</strong> For a $2M shop, that is $200,000 to $300,000 a year in recovered revenue — from quotes they already wrote. Most shops never make the second call.</p>

          <h3>The sticky note is not a system</h3>
          <p>Manual follow-up fails for three reasons:</p>
          <ol>
            <li><strong>It depends on memory.</strong> Your CSR has 30 things going on. She is not going to remember to text back the lead from Tuesday when Thursday's dispatch is falling apart.</li>
            <li><strong>It does not scale.</strong> If one person can reliably follow up on 15 open estimates, what happens when you have 40? You hire another person, or leads fall through the cracks.</li>
            <li><strong>It has no feedback loop.</strong> When nobody tracks why leads went cold, you cannot fix the pattern. Was it price? Timing? A competitor who responded faster? Without data, you are guessing.</li>
          </ol>
          <p>This is not a discipline problem. It is asking humans to do something that software does better. Consistent, timed, multi-touch follow-up across dozens of open leads simultaneously is exactly what automation was built for.</p>
        `,
    },
    {
      id: 'drip-follow-up-works',
      heading: 'Why Drip Follow-Up Is the Highest-ROI Move You Can Make',
      content: `
          <p>A homeowner who gets three quotes for a water heater replacement does not make a decision in 10 minutes. They talk to their spouse. They check their budget. They look at reviews. That decision cycle can take 3 to 14 days.</p>
          <p>The contractor who stays in front of them during that window, with a helpful text on day 2, a reminder about a rebate deadline on day 5, and a "should I close this out?" message on day 10, wins the job far more often than the one who sent the estimate and waited.</p>
          <p>The data backs this up. Studies on sales follow-up consistently show that <strong>80% of deals require five or more touches to close.</strong> Most contractors stop after one. Many stop after zero. They send the estimate and never mention it again.</p>
          <p>Tools like DripJobs proved the demand for automated follow-up in the trades. But drip messaging alone only solves one piece of the puzzle. If your drips are disconnected from your pipeline, your estimates, and your dispatch board, you are still stitching together a workflow manually.</p>

          <h3>Drip campaigns that connect to everything else</h3>
          <p>LeverLoop's <a href="/features/automatic-follow-up">drip campaign system</a> runs automated texts, emails, and follow-ups on every estimate and every completed job. But unlike standalone drip tools, LeverLoop connects those campaigns to your full <a href="/features/lead-board">lead pipeline</a>. You can see exactly where every lead sits, which ones need a human touch versus an automated nudge, and which estimates are going cold.</p>
          <p>When a drip campaign resurfaces an interested homeowner, LeverLoop moves them right back into your active pipeline. Your CSR sees the update. Your tech can get dispatched the same day. No copy-pasting between tools. No leads falling into a gap between your drip tool and your calendar.</p>

          <h3>Automation is not impersonal. Silence is.</h3>
          <p>Some contractors resist automation because they think it feels robotic. "My customers want to hear from me, not a machine." But here is the reality: your customers are not hearing from you at all. They are hearing silence. A well-written automated text that says "Hey, just checking in on that estimate. Any questions I can answer?" is infinitely more personal than no response at all.</p>
          <p>The best automated sequences sound like a real person because they are written by a real person. You write the messages once. LeverLoop sends them at the right time, every time. Your voice, your tone, on a schedule that never forgets.</p>
        `,
    },
    {
      id: 'automation-not-optional',
      heading: 'Why Automation Is No Longer Optional',
      content: `
          <p>Five years ago, a contractor could get away with a notebook and a good memory. The competition was not that organized either. Everybody was slow. Speed was a nice-to-have.</p>
          <p>That era is over. <strong>The contractors you are competing against have automated lead response, automated follow-up, automated review requests, and automated maintenance reminders.</strong> If you are still running on manual processes, you are not competing on a level field.</p>

          <h3>The compounding effect</h3>
          <p>Automation does not just help you respond faster. It compounds over time:</p>
          <ul>
            <li><strong>Speed-to-lead automation</strong> means every lead gets a response in under 60 seconds, whether it is 2pm on a Tuesday or 9pm on a Saturday. Your <a href="/features/speed-to-lead">auto-response</a> is working when your office is not.</li>
            <li><strong>Drip sequences</strong> mean every unsold estimate gets 4-6 follow-up touches over 14 days. No leads slip through. Your <a href="/features/automatic-follow-up">drip campaigns</a> run the cadence without your CSR remembering.</li>
            <li><strong>Review automation</strong> means every completed job triggers a <a href="/features/google-review-requests">Google review request</a>. After 6 months, you have 50+ fresh reviews. Your competitor who asks manually has 8.</li>
            <li><strong>Maintenance reminders</strong> mean last year's customers come back this year without a marketing dollar spent. <a href="/features/automated-maintenance-reminders">Automated reminders</a> drive repeat revenue on autopilot.</li>
          </ul>
          <p>Each of these individually is a small improvement. Together, over 12 months, they represent a fundamentally different business. More leads converted. Higher close rates. More repeat customers. Stronger reviews. Lower cost per acquisition.</p>

          <h3>The ROI is not even close</h3>
          <p>A contractor spending $3,000/month on leads who implements automated speed-to-lead and drip follow-up can realistically go from a 25% close rate to a 45% close rate. On 60 leads/month at a $1,200 average ticket, that is an additional <strong>$14,400/month in revenue</strong> — $172,800/year — from the same ad spend.</p>
          <p>The cost of the automation? A CRM subscription. LeverLoop's <a href="/features/flat-monthly-pricing">flat monthly pricing</a> means your whole team has access. No per-seat charges eating into that ROI.</p>
        `,
    },
    {
      id: 'fix-your-lead-response',
      heading: 'How to Fix Your Lead Response This Week',
      content: `
          <p>You do not need to overhaul your entire operation. Start with three changes that take less than a day to implement:</p>

          <h3>1. Turn on auto-text for every lead source</h3>
          <p>Every web form, every missed call, every LSA lead should trigger an automatic text within 60 seconds. The message does not need to be fancy: "Thanks for reaching out. What is going on and what is the best address? We will get back to you shortly." That single text puts you ahead of 80% of your competitors.</p>
          <p>LeverLoop's <a href="/features/speed-to-lead">speed-to-lead engine</a> does this automatically across all your lead sources — web forms, missed calls, Google LSA, and more. One setup, every lead covered.</p>

          <h3>2. Build a 7-day drip sequence for unsold estimates</h3>
          <p>Write four messages:</p>
          <ol>
            <li><strong>Day 0:</strong> "Your estimate is ready. Want to get on the schedule this week?"</li>
            <li><strong>Day 1:</strong> "Any questions about the options?"</li>
            <li><strong>Day 3:</strong> Call or text with one specific detail — a rebate deadline, lead time on equipment, or a scheduling window.</li>
            <li><strong>Day 7:</strong> "Should I close this out or keep a spot open for you?"</li>
          </ol>
          <p>Set these up in LeverLoop's <a href="/features/automatic-follow-up">drip campaign builder</a> once. Every estimate you send will automatically get this follow-up sequence. The <a href="/features/declined-repair-follow-up">declined repair follow-up</a> tool handles estimates that go cold and brings them back into your pipeline.</p>

          <h3>3. Consolidate your lead sources into one inbox</h3>
          <p>If your leads are scattered across voicemail, email, Google, Angi, and text messages, some will always fall through. A <a href="/features/two-way-texting">unified inbox</a> puts every conversation in one place so nothing gets missed. Your <a href="/features/lead-board">pipeline board</a> gives you a visual snapshot of where every lead sits right now.</p>
          <p>These three steps alone — instant response, automated follow-up, unified tracking — will recover more revenue than any new lead source you could add. The leads are already coming in. Stop losing them.</p>
        `,
    },
  ],
  faq: [
    {
      question: 'Why do contractors lose so many leads?',
      answer:
        'The primary reason is slow response time. The average contractor takes 24 to 48 hours to respond to a new lead, but 78% of homeowners hire the first contractor who responds. By the time most contractors call back, the homeowner has already booked with a competitor. Secondary causes include no follow-up on unsold estimates, leads scattered across multiple channels with no unified tracking, and no automated systems to ensure consistent outreach.',
    },
    {
      question: 'How fast should a contractor respond to a new lead?',
      answer:
        'Under 5 minutes is the target, and under 1 minute is ideal. Responding within one minute increases conversion by 391%. Waiting 30 minutes drops your odds of qualifying the lead by 21x. An automated text response within 60 seconds of every new lead is the simplest way to get there.',
    },
    {
      question: 'What is a drip campaign for contractors?',
      answer:
        'A drip campaign is a series of pre-written automated messages (texts and emails) that go out on a schedule after a specific trigger, like sending an estimate or completing a job. For contractors, a typical drip sequence might include 4-6 follow-up messages over 7-14 days after an estimate is sent, reminding the homeowner and making it easy to say yes. LeverLoop lets you build drip sequences that connect directly to your pipeline and estimates, so follow-ups are not just messages in a vacuum but tied to real jobs you can track and close.',
    },
    {
      question: 'How many follow-up messages should I send after an estimate?',
      answer:
        'At minimum, four messages over seven days. Research shows 80% of sales require five or more touches to close, but most contractors stop after one — or zero. A proven cadence is: Day 0 (estimate sent), Day 1 (quick check-in), Day 3 (specific detail like a rebate or scheduling window), and Day 7 (final "should I close this out?" message). This is professional, not pushy.',
    },
    {
      question: 'Is automated follow-up impersonal?',
      answer:
        'No — silence is impersonal. A well-written automated text that checks in on an estimate is far more personal than no response at all. The best automated sequences are written in your voice and tone; the system just handles the timing and consistency. Homeowners appreciate the follow-up because they are busy and often forget to respond to the first message.',
    },
    {
      question: 'What is the ROI of automating lead response for contractors?',
      answer:
        'A contractor spending $3,000/month on leads who improves their close rate from 25% to 45% through faster response and automated follow-up can generate an additional $14,400/month in revenue from the same lead volume — roughly $172,800/year. The cost is typically just a CRM subscription, making the ROI extremely high.',
    },
    {
      question: 'Do I need a separate drip tool or does my CRM handle it?',
      answer:
        'Standalone drip tools like DripJobs handle automated messaging well, but they do not connect to your pipeline, estimates, dispatch, or invoicing. That means you are still switching between tools and manually tracking which leads are active. LeverLoop includes drip campaigns as part of a full contractor operating system: speed-to-lead auto-response, a visual lead pipeline, Good/Better/Best estimates, dispatch, a mobile tech app, review automation, and revenue recovery. One system, no gaps between follow-up and the rest of your workflow.',
    },
  ],
};

export default article;
