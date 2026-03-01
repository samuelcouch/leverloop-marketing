import type { FeatureDetail } from '../../data/features';
import { FeatureRow } from '../ui/FeatureRow';
import { Section } from '../ui/Section';

function Panel({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-5">
      <div className="bg-background-elevated rounded-xl border border-border-neutral shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border-neutral text-xs font-semibold text-content-primary">
          {title}
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

function LeadMock() {
  return (
    <Panel title="Lead Response Engine">
      <div className="space-y-2.5">
        {[
          ['New lead received', '00:00'],
          ['First text sent', '00:34'],
          ['Lead marked Contacted', '00:35'],
        ].map(([event, time]) => (
          <div key={event} className="flex items-center gap-2 rounded-lg bg-background-neutral border border-border-neutral px-3 py-2">
            <span className="w-2 h-2 rounded-full bg-content-link" />
            <p className="text-[11px] text-content-primary">{event}</p>
            <p className="text-[10px] text-content-tertiary ml-auto">{time}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function PipelineMock() {
  return (
    <Panel title="Pipeline Snapshot">
      <div className="grid grid-cols-3 gap-2">
        {[
          ['New', '12'],
          ['Estimate Sent', '8'],
          ['Won', '5'],
        ].map(([stage, count]) => (
          <div key={stage} className="rounded-lg bg-background-neutral border border-border-neutral p-2.5 text-center">
            <p className="text-[10px] text-content-tertiary">{stage}</p>
            <p className="text-sm font-semibold text-content-primary mt-0.5">{count}</p>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-content-secondary mt-3">Aging indicator: 4 leads have been idle for 7+ days.</p>
    </Panel>
  );
}

function CustomerMock() {
  return (
    <Panel title="Customer Timeline">
      <div className="space-y-2.5">
        {[
          'Job completed · Furnace tune-up',
          'Invoice paid · #4028',
          'Photo uploaded · Before coil',
        ].map((line) => (
          <p key={line} className="text-[11px] text-content-primary px-3 py-2 rounded-lg bg-background-neutral border border-border-neutral">
            {line}
          </p>
        ))}
      </div>
    </Panel>
  );
}

function EquipmentMock() {
  return (
    <Panel title="Equipment Insights">
      <div className="space-y-2.5">
        {[
          ['Carrier 58PHA', 'Installed 2013 · 4 calls this year'],
          ['Navien NPE-240A', 'Warranty expires in 62 days'],
        ].map(([name, meta]) => (
          <div key={name} className="rounded-lg border border-border-neutral p-2.5">
            <p className="text-[11px] font-semibold text-content-primary">{name}</p>
            <p className="text-[10px] text-content-secondary mt-0.5">{meta}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function EstimateMock() {
  return (
    <Panel title="Option Builder">
      <div className="space-y-2">
        {[
          ['Good', '$289', 'Capacitor replacement'],
          ['Better', '$449', 'Capacitor + contactor'],
          ['Best', '$699', 'Hard-start + tune-up'],
        ].map(([tier, price, label]) => (
          <div key={tier} className="rounded-lg bg-background-neutral border border-border-neutral px-3 py-2.5">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-semibold text-content-primary">{tier}</p>
              <p className="text-[11px] font-semibold text-content-primary">{price}</p>
            </div>
            <p className="text-[10px] text-content-secondary mt-0.5">{label}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function PaymentsMock() {
  return (
    <Panel title="Invoice + Payment Status">
      <div className="space-y-2.5">
        <div className="rounded-lg border border-border-neutral p-2.5">
          <p className="text-[10px] text-content-tertiary">Invoice #4028</p>
          <p className="text-[11px] text-content-primary mt-0.5">Payment link sent via SMS</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            ['Checkout', 'Opened'],
            ['Settlement', 'Pending'],
          ].map(([key, value]) => (
            <div key={key} className="rounded-lg bg-background-neutral border border-border-neutral p-2">
              <p className="text-[10px] text-content-tertiary">{key}</p>
              <p className="text-[11px] font-semibold text-content-primary mt-0.5">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

function DispatchMock() {
  return (
    <Panel title="Dispatch Status">
      <div className="space-y-2">
        {[
          ['Mike R.', 'On job'],
          ['Jen P.', 'On my way'],
          ['Chris T.', 'Available soon'],
        ].map(([name, status]) => (
          <div key={name} className="flex items-center rounded-lg border border-border-neutral px-3 py-2.5">
            <p className="text-[11px] font-semibold text-content-primary">{name}</p>
            <p className="text-[10px] text-content-secondary ml-auto">{status}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function MobileMock() {
  return (
    <Panel title="Field Mobile Workflow">
      <div className="space-y-2.5">
        {[
          'Open assigned job',
          'Review customer + equipment history',
          'Send estimate and capture signature',
          'Collect payment and close job',
        ].map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full pair-bg-bright-blue text-[10px] font-semibold inline-flex items-center justify-center">
              {index + 1}
            </span>
            <p className="text-[11px] text-content-primary">{step}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function MembershipsMock() {
  return (
    <Panel title="Recurring Revenue Metrics">
      <div className="grid grid-cols-3 gap-2">
        {[
          ['Members', '428'],
          ['MRR', '$57.3K'],
          ['Churn', '2.1%'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg bg-background-neutral border border-border-neutral p-2 text-center">
            <p className="text-[10px] text-content-tertiary">{label}</p>
            <p className="text-[11px] font-semibold text-content-primary mt-0.5">{value}</p>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-content-secondary mt-3">12 members flagged for payment update follow-up.</p>
    </Panel>
  );
}

function RecoveryMock() {
  return (
    <Panel title="Revenue Recovery Queue">
      <div className="space-y-2.5">
        {[
          ['Stale estimates', '$9,200'],
          ['Declined repairs', '$11,450'],
          ['Aging equipment', '$14,210'],
        ].map(([type, value]) => (
          <div key={type} className="flex items-center rounded-lg border border-border-neutral px-3 py-2.5">
            <p className="text-[11px] text-content-primary">{type}</p>
            <p className="text-[11px] font-semibold text-content-primary ml-auto">{value}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function InboxMock() {
  return (
    <Panel title="Unified Inbox Thread">
      <div className="space-y-2">
        {[
          ['Automation', 'Thanks for reaching out. What time works best?'],
          ['Customer', 'Can we do tomorrow at 2?'],
          ['Dispatcher', 'Booked for 2:00 PM. See you then.'],
        ].map(([author, text]) => (
          <div key={`${author}-${text}`} className="rounded-lg bg-background-neutral border border-border-neutral p-2.5">
            <p className="text-[10px] uppercase tracking-wide text-content-tertiary">{author}</p>
            <p className="text-[11px] text-content-primary mt-1">{text}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function TeamMock() {
  return (
    <Panel title="Team and Roles">
      <div className="space-y-2">
        {[
          ['Owner', '2 users'],
          ['Admin', '1 user'],
          ['Dispatcher', '3 users'],
          ['Tech', '6 users'],
        ].map(([role, count]) => (
          <div key={role} className="flex items-center rounded-lg border border-border-neutral px-3 py-2.5">
            <p className="text-[11px] font-semibold text-content-primary">{role}</p>
            <p className="text-[10px] text-content-tertiary ml-auto">{count}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function ReliabilityMock() {
  return (
    <Panel title="Reliability + Compliance">
      <div className="grid grid-cols-2 gap-2">
        {[
          ['Failover', 'Ready'],
          ['Opt-in', 'Verified'],
          ['Quiet Hours', 'Applied'],
          ['Audit Log', 'Complete'],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-background-neutral border border-border-neutral p-2.5">
            <p className="text-[10px] text-content-tertiary">{k}</p>
            <p className="text-[11px] font-semibold text-content-primary mt-0.5">{v}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

const mockMap: Record<FeatureDetail['mock'], React.FC> = {
  lead: LeadMock,
  pipeline: PipelineMock,
  customer: CustomerMock,
  equipment: EquipmentMock,
  estimate: EstimateMock,
  payments: PaymentsMock,
  dispatch: DispatchMock,
  mobile: MobileMock,
  memberships: MembershipsMock,
  recovery: RecoveryMock,
  inbox: InboxMock,
  team: TeamMock,
  reliability: ReliabilityMock,
};

export default function FeatureDetails({ details }: { details: FeatureDetail[] }) {
  return (
    <Section className="!pb-0">
      <div className="space-y-10">
        {details.map((d, i) => {
          const MockComponent = mockMap[d.mock];
          return (
            <FeatureRow
              key={d.headline}
              label={d.label}
              headline={d.headline}
              description={d.description}
              cta={d.cta}
              reversed={i % 2 !== 0}
              mockup={<MockComponent />}
            >
              <p className="mt-4 text-sm text-content-secondary">
                <strong className="text-content-primary">Key benefit: </strong>
                {d.benefit}
              </p>
            </FeatureRow>
          );
        })}
      </div>
    </Section>
  );
}
