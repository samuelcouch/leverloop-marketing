function MockFrame({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-[440px] bg-background-elevated rounded-2xl border border-border-neutral shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-border-neutral">
        <div>
          <p className="text-sm font-semibold text-content-primary">{title}</p>
          <p className="text-[11px] text-content-tertiary mt-0.5">{subtitle}</p>
        </div>
        <span className="w-2 h-2 rounded-full bg-sentiment-positive animate-pulse" />
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
}

export function LeadEngineMockup() {
  return (
    <MockFrame title="Speed-to-Lead" subtitle="Reply sent in 34 seconds">
      <div className="rounded-xl border border-border-neutral bg-background-neutral p-3">
        <p className="text-[11px] text-content-secondary">New lead: Olivia Reed · No cooling</p>
        <p className="text-xs text-content-primary mt-2 leading-relaxed">
          Hi Olivia, thanks for reaching out. We can help today. What time works best?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        {[
          { label: 'Stage', value: 'Contacted' },
          { label: 'Follow-up', value: 'Tomorrow 8:00' },
          { label: 'Owner', value: 'Dispatch' },
        ].map((item) => (
          <div key={item.label} className="rounded-lg bg-background-neutral p-2.5 border border-border-neutral">
            <p className="text-[10px] text-content-tertiary">{item.label}</p>
            <p className="text-[11px] font-semibold text-content-primary mt-0.5">{item.value}</p>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function PipelineBoardMockup() {
  const columns = [
    {
      name: 'New',
      tone: 'pair-bg-bright-blue',
      cards: ['Olivia Reed', 'Marcus Hill'],
    },
    {
      name: 'Estimate Sent',
      tone: 'pair-bg-bright-yellow',
      cards: ['Diana Flores'],
    },
    {
      name: 'Won',
      tone: 'pair-bg-bright-green',
      cards: ['Nina Patel'],
    },
  ];

  return (
    <MockFrame title="Lead Pipeline" subtitle="8 active opportunities · $57.6K">
      <div className="flex gap-2.5">
        {columns.map((column) => (
          <div key={column.name} className="flex-1 min-w-0">
            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${column.tone}`}>
              {column.name}
            </span>
            <div className="space-y-2 mt-2">
              {column.cards.map((card) => (
                <div key={card} className="rounded-lg bg-background-neutral border border-border-neutral px-2.5 py-2">
                  <p className="text-[11px] font-medium text-content-primary truncate">{card}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function CustomerDatabaseMockup() {
  return (
    <MockFrame title="Customer Record" subtitle="Olivia Reed · 3 properties">
      <div className="rounded-xl border border-border-neutral overflow-hidden">
        <div className="px-3 py-2.5 bg-background-neutral border-b border-border-neutral">
          <p className="text-xs font-semibold text-content-primary">Timeline</p>
        </div>
        <div className="divide-y divide-border-neutral">
          {[
            'Job completed · Furnace tune-up · 2h ago',
            'Invoice paid · #4028 · Yesterday',
            'Estimate sent · Water heater replacement',
          ].map((event) => (
            <p key={event} className="px-3 py-2.5 text-[11px] text-content-secondary">
              {event}
            </p>
          ))}
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        {[
          'SMS opt-in: Active',
          'Equipment: 4 units',
          'Last service: 14 days',
        ].map((pill) => (
          <span key={pill} className="text-[10px] px-2 py-1 rounded-full bg-background-neutral text-content-secondary">
            {pill}
          </span>
        ))}
      </div>
    </MockFrame>
  );
}

export function EquipmentTrackingMockup() {
  return (
    <MockFrame title="Equipment Registry" subtitle="Warranty and age tracking">
      <div className="space-y-2.5">
        {[
          {
            name: 'Carrier 58PHA',
            meta: 'Installed 2013 · 4 service calls this year',
            alert: 'Replacement candidate',
          },
          {
            name: 'Navien NPE-240A',
            meta: 'Installed 2019 · Warranty expires in 62 days',
            alert: 'Warranty alert',
          },
          {
            name: 'Trane XR16',
            meta: 'Installed 2017 · Service interval due',
            alert: 'Maintenance due',
          },
        ].map((unit) => (
          <div key={unit.name} className="rounded-lg border border-border-neutral p-2.5">
            <p className="text-[11px] font-semibold text-content-primary">{unit.name}</p>
            <p className="text-[10px] text-content-secondary mt-0.5">{unit.meta}</p>
            <p className="text-[10px] text-content-link font-medium mt-1">{unit.alert}</p>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function EstimateBuilderMockup() {
  return (
    <MockFrame title="Good / Better / Best" subtitle="No-cool diagnosis">
      <div className="space-y-2.5">
        {[
          { tier: 'Good', service: 'Capacitor replacement', price: '$289', tone: 'pair-bg-bright-blue' },
          { tier: 'Better', service: 'Capacitor + contactor', price: '$449', tone: 'pair-bg-bright-yellow' },
          { tier: 'Best', service: 'Hard-start + tune-up', price: '$699', tone: 'pair-bg-bright-green' },
        ].map((option) => (
          <div key={option.tier} className="rounded-lg border border-border-neutral p-2.5">
            <div className="flex items-center justify-between">
              <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${option.tone}`}>
                {option.tier}
              </span>
              <span className="text-xs font-semibold text-content-primary">{option.price}</span>
            </div>
            <p className="text-[11px] text-content-secondary mt-1.5">{option.service}</p>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function PaymentsMockup() {
  return (
    <MockFrame title="Text-to-Pay" subtitle="Invoice #4028 ready">
      <div className="rounded-xl border border-border-neutral p-3">
        <p className="text-[10px] text-content-tertiary">To: Olivia Reed</p>
        <p className="text-xs text-content-primary mt-1.5 leading-relaxed">
          Hi Olivia, thanks for approving your repair. Tap this secure link to pay now.
        </p>
        <div className="mt-3 px-2.5 py-2 rounded-lg bg-background-neutral border border-border-neutral text-[11px] text-content-link font-medium">
          leverloop.pay/4028
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-3">
        {[
          ['Method', 'Card / ACH'],
          ['Status', 'Opened'],
          ['Sync', 'QuickBooks'],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg bg-background-neutral border border-border-neutral p-2">
            <p className="text-[10px] text-content-tertiary">{label}</p>
            <p className="text-[11px] font-semibold text-content-primary mt-0.5">{value}</p>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function DispatchBoardMockup() {
  return (
    <MockFrame title="Dispatch Board" subtitle="6 techs online">
      <div className="space-y-2">
        {[
          ['Mike R.', 'On job · Reed home'],
          ['Jen P.', 'On my way · Lane call'],
          ['Chris T.', 'Available in 25 min'],
          ['Nora B.', 'Estimate in progress'],
        ].map(([name, status]) => (
          <div key={name} className="flex items-center gap-2.5 rounded-lg border border-border-neutral px-3 py-2">
            <span className="w-2 h-2 rounded-full bg-sentiment-positive" />
            <p className="text-[11px] font-semibold text-content-primary">{name}</p>
            <p className="text-[11px] text-content-secondary ml-auto">{status}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg bg-background-neutral border border-border-neutral p-2.5 text-[11px] text-content-secondary">
        Live update: On My Way text sent to Olivia Reed.
      </div>
    </MockFrame>
  );
}

export function MobileTechMockup() {
  return (
    <div className="w-full max-w-[440px] flex justify-center">
      <div className="w-[240px] rounded-[26px] border border-border-neutral bg-background-elevated shadow-sm overflow-hidden">
        <div className="px-4 py-3 border-b border-border-neutral">
          <p className="text-sm font-semibold text-content-primary">Tech App</p>
          <p className="text-[10px] text-content-tertiary">Today's jobs</p>
        </div>
        <div className="p-3 space-y-2.5">
          {[
            ['2:30 PM', 'Olivia Reed · No cooling'],
            ['4:00 PM', 'Marcus Hill · Water heater'],
            ['5:30 PM', 'Diana Flores · Panel quote'],
          ].map(([time, text]) => (
            <div key={time} className="rounded-lg border border-border-neutral p-2.5">
              <p className="text-[10px] text-content-tertiary">{time}</p>
              <p className="text-[11px] font-medium text-content-primary mt-0.5">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MembershipsMockup() {
  return (
    <MockFrame title="Membership Growth" subtitle="Last 90 days">
      <div className="grid grid-cols-3 gap-2">
        {[
          ['Active', '428', '+19'],
          ['MRR', '$57.3K', '+11%'],
          ['At Risk', '12', 'Action'],
        ].map(([label, value, change]) => (
          <div key={label} className="rounded-lg bg-background-neutral border border-border-neutral p-2.5">
            <p className="text-[10px] text-content-tertiary">{label}</p>
            <p className="text-sm font-semibold text-content-primary mt-0.5">{value}</p>
            <p className="text-[10px] text-sentiment-positive mt-0.5">{change}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 h-16 rounded-lg bg-gradient-to-r from-secondary-bright-blue via-secondary-bright-pink to-core-bright-green" />
    </MockFrame>
  );
}

export function RevenueRecoveryMockup() {
  return (
    <MockFrame title="Revenue Recovery" subtitle="$34,860 recoverable this week">
      <div className="space-y-2.5">
        {[
          ['Stale Estimates', '$9,200', 'Send follow-up'],
          ['Declined Repairs', '$11,450', 'Enroll sequence'],
          ['Aging Equipment', '$14,210', 'Schedule call'],
        ].map(([type, value, action]) => (
          <div key={type} className="flex items-center rounded-lg border border-border-neutral p-2.5 gap-3">
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold text-content-primary">{type}</p>
              <p className="text-[10px] text-content-tertiary">Estimated value {value}</p>
            </div>
            <span className="text-[10px] px-2 py-1 rounded bg-background-neutral text-content-secondary">{action}</span>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function UnifiedInboxMockup() {
  return (
    <MockFrame title="Unified Inbox" subtitle="SMS + Email in one thread">
      <div className="space-y-2.5">
        {[
          ['Customer', 'Can we do tomorrow at 2?', '1m ago'],
          ['Automation', 'We can help today. What time works best?', '3h ago'],
          ['Dispatcher', "You're booked for 2:00 PM.", '3h ago'],
        ].map(([sender, body, time]) => (
          <div key={`${sender}-${time}`} className="rounded-lg border border-border-neutral px-3 py-2.5">
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold text-content-secondary uppercase tracking-wide">{sender}</p>
              <p className="text-[10px] text-content-tertiary">{time}</p>
            </div>
            <p className="text-[11px] text-content-primary mt-1">{body}</p>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function TeamManagementMockup() {
  return (
    <MockFrame title="Team Access" subtitle="12 users · 4 roles">
      <div className="space-y-2">
        {[
          ['Owner', '2 users', 'Full access'],
          ['Admin', '1 user', 'Ops + settings'],
          ['Dispatcher', '3 users', 'Board + inbox'],
          ['Tech', '6 users', 'Field workflows'],
        ].map(([role, count, scope]) => (
          <div key={role} className="flex items-center rounded-lg border border-border-neutral px-3 py-2.5">
            <p className="text-[11px] font-semibold text-content-primary">{role}</p>
            <p className="text-[10px] text-content-tertiary ml-2">{count}</p>
            <p className="text-[10px] text-content-secondary ml-auto">{scope}</p>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}

export function ReliabilityRouterMockup() {
  return (
    <MockFrame title="ENS Router" subtitle="Multi-provider reliability">
      <div className="rounded-xl border border-border-neutral p-3">
        <div className="flex items-center gap-2 text-[11px] font-medium text-content-primary">
          <span className="w-2 h-2 rounded-full bg-sentiment-positive" /> Primary provider healthy
        </div>
        <div className="flex items-center gap-2 text-[11px] font-medium text-content-primary mt-2">
          <span className="w-2 h-2 rounded-full bg-secondary-dark-gold" /> Secondary failover ready
        </div>
      </div>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          ['Opt-in Check', 'Pass'],
          ['Quiet Hours', 'Applied'],
          ['Delivery Log', 'Recorded'],
          ['STOP Handler', 'Instant'],
        ].map(([label, status]) => (
          <div key={label} className="rounded-lg bg-background-neutral border border-border-neutral p-2">
            <p className="text-[10px] text-content-tertiary">{label}</p>
            <p className="text-[11px] font-semibold text-content-primary mt-0.5">{status}</p>
          </div>
        ))}
      </div>
    </MockFrame>
  );
}
