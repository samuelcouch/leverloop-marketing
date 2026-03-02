import Button from '../ui/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import {
  heroCopy,
  type HeroPipelineColumnTone,
  type HeroUpcomingTone,
} from '../../data/landing';

const stageToneClasses: Record<HeroPipelineColumnTone, string> = {
  blue: 'bg-[#dbeafe]',
  amber: 'bg-[#fef3c7]',
  green: 'bg-[#d1fae5]',
};

const upcomingToneClasses: Record<HeroUpcomingTone, string> = {
  blue: 'bg-[#dbeafe]',
  amber: 'bg-[#fef3c7]',
};

export default function Hero() {
  return (
    <section
      id="demo"
      className="pt-36 pb-0 lg:pt-40 relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 80% 60% at 50% 0%, #f5f0e8 0%, #faf7f2 40%, #ffffff 80%)',
      }}
    >
      <div className="max-w-3xl mx-auto px-5 lg:px-8 text-center">
        <h1 className="font-display text-[3.25rem] sm:text-[4rem] lg:text-[4.75rem] font-extrabold tracking-[-0.03em] leading-[1.05] text-heading">
          {heroCopy.headline}
        </h1>

        <p className="mt-4 text-base lg:text-lg text-body max-w-2xl mx-auto leading-relaxed">
          {heroCopy.subtitle}
        </p>

        <form className="mt-6 max-w-md mx-auto text-left">
          <Input
            label={heroCopy.emailLabel}
            type="email"
            placeholder={heroCopy.emailPlaceholder}
            className="mb-4"
          />

          <Select
            label={heroCopy.teamLabel}
            placeholder={heroCopy.teamPlaceholder}
            options={heroCopy.teamOptions}
            className="mb-4"
          />

          <Button type="submit" size="lg" shape="pill" arrow>
            {heroCopy.ctaLabel}
          </Button>
        </form>
      </div>

      <div className="mt-10 max-w-6xl mx-auto px-5 lg:px-8 relative" id="features">
        <div className="relative overflow-hidden rounded-t-2xl border border-b-0 border-[#e5e7eb] bg-white shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.12)] h-[340px] sm:h-[400px] lg:h-[460px]">
          <div className="flex h-full">
            <div className="hidden sm:flex flex-col w-56 border-r border-[#f1f5f9] bg-[#fafafa] p-4 shrink-0">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 rounded bg-[#023e8a] flex items-center justify-center text-white text-[10px] font-bold">
                  L
                </div>
                <span className="text-sm font-semibold text-[#111827]">
                  {heroCopy.mock.companyName}
                </span>
              </div>
              <nav className="flex flex-col gap-0.5">
                {heroCopy.mock.sidebarItems.map((item) => (
                  <div
                    key={item.label}
                    className={`flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm ${
                      item.active
                        ? 'bg-white text-[#111827] font-medium shadow-sm border border-[#f1f5f9]'
                        : 'text-[#6b7280]'
                    }`}
                  >
                    <span className="text-xs">{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </nav>
              <div className="mt-auto pt-4 border-t border-[#f1f5f9]">
                <div className="text-xs font-medium text-[#9ca3af] uppercase tracking-wider mb-2">
                  {heroCopy.mock.groupsLabel}
                </div>
                {heroCopy.mock.groups.map((group) => (
                  <div key={group} className="text-sm text-[#6b7280] py-1.5 px-2.5">
                    {group}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col min-w-0">
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#f1f5f9]">
                <h3 className="text-sm font-semibold text-[#111827]">{heroCopy.mock.boardTitle}</h3>
                <div className="flex items-center gap-2">
                  {heroCopy.mock.controls.map((control) => (
                    <span
                      key={control}
                      className="text-xs text-[#9ca3af] bg-[#f9fafb] px-2.5 py-1 rounded-md border border-[#f1f5f9]"
                    >
                      {control}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex gap-4 p-4 overflow-hidden">
                {heroCopy.mock.columns.map((column, index) => (
                  <div
                    key={column.stage}
                    className={`flex-1 min-w-[160px] ${index === 2 ? 'hidden md:block' : ''}`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold text-[#111827] ${stageToneClasses[column.tone]} px-2.5 py-1 rounded-md`}
                      >
                        {column.stage}
                      </span>
                      <span className="text-xs text-[#9ca3af]">{column.total}</span>
                    </div>
                    <div className="space-y-2.5">
                      {column.cards.map((card) => (
                        <PipelineCard
                          key={card.email}
                          name={card.name}
                          company={card.company}
                          email={card.email}
                          color={card.color}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex flex-col w-64 border-l border-[#f1f5f9] p-5 shrink-0">
              <div className="flex flex-col items-center text-center mb-5">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#023e8a] to-[#0353a4] flex items-center justify-center text-white text-lg font-semibold mb-3">
                  {heroCopy.mock.profile.initials}
                </div>
                <div className="font-semibold text-sm text-[#111827]">
                  {heroCopy.mock.profile.name}
                </div>
                <div className="text-xs text-[#6b7280] flex items-center gap-1 mt-0.5">
                  <span
                    className="w-3 h-3 rounded-full inline-block"
                    style={{ backgroundColor: heroCopy.mock.profile.tagColor }}
                  />
                  {heroCopy.mock.profile.tag}
                </div>
              </div>

              <div className="flex items-center justify-center gap-1.5 mb-5">
                {heroCopy.mock.profile.actions.map((action) => (
                  <button
                    key={action}
                    className="px-3 py-1.5 rounded-lg border border-[#e5e7eb] text-xs font-medium text-[#6b7280] hover:bg-[#f9fafb] transition-colors"
                  >
                    {action}
                  </button>
                ))}
                <button className="px-2 py-1.5 rounded-lg border border-[#e5e7eb] text-xs text-[#6b7280]">
                  ...
                </button>
              </div>

              <div className="border-t border-[#f1f5f9] pt-4">
                <div className="text-xs font-semibold text-[#111827] mb-3">Upcoming</div>
                {heroCopy.mock.profile.upcoming.map((item, index) => (
                  <div
                    key={item.title}
                    className={`flex items-center gap-2.5 py-2 px-2 rounded-lg ${
                      index === 0 ? 'bg-[#f9fafb]' : 'mt-1'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded flex items-center justify-center text-[10px] ${upcomingToneClasses[item.tone]}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-[#111827]">{item.title}</div>
                      <div className="text-[10px] text-[#9ca3af]">{item.time}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#f1f5f9] pt-4 mt-4">
                <div className="text-xs font-semibold text-[#111827] mb-3">Recent activity</div>
                {heroCopy.mock.profile.recent.map((entry, index) => (
                  <div
                    key={entry}
                    className={`text-xs text-[#6b7280] leading-relaxed ${index > 0 ? 'mt-1.5' : ''}`}
                  >
                    {entry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}

function PipelineCard({
  name,
  company,
  email,
  color,
}: {
  name: string;
  company: string;
  email: string;
  color: string;
}) {
  return (
    <div className="bg-white rounded-xl border border-[#f1f5f9] p-3 shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-semibold shrink-0"
          style={{ backgroundColor: color }}
        >
          {name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </div>
        <span className="text-xs font-semibold text-[#111827] truncate">{name}</span>
      </div>
      <div className="text-[10px] text-[#6b7280] flex items-center gap-1.5 mb-0.5">
        <span
          className="w-2.5 h-2.5 rounded-full shrink-0"
          style={{ backgroundColor: color, opacity: 0.3 }}
        />
        {company}
      </div>
      <div className="text-[10px] text-[#9ca3af] flex items-center gap-1.5">
        <span className="text-[8px]">@</span>
        {email}
      </div>
    </div>
  );
}
