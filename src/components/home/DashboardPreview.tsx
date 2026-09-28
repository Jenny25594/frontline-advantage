export function DashboardPreview() {
  return (
    <section className="section bg-neutral-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">Platform experience</div>
          <h2 className="text-4xl tracking-[-0.06em] text-neutral-900">Simple by design. Powerful by outcome.</h2>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-4 shadow-xl md:p-6">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm font-medium text-neutral-600">Navigation</div>
                <div className="h-2.5 w-2.5 rounded-full bg-primary-base" />
              </div>
              <div className="space-y-3">
                {['Dashboard', 'AI Coach', 'Growth Paths', 'Manager View', 'Skills', 'Career'].map((item, index) => (
                  <div
                    key={item}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm ${index === 0 ? 'bg-secondary-900 text-white' : 'bg-white text-neutral-700'}`}
                  >
                    <span>{item}</span>
                    <span className="text-xs opacity-70">{index + 1}</span>
                  </div>
                ))}
              </div>
            </aside>

            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  { label: 'Skill growth', value: '+18%', tone: 'bg-primary-base' },
                  { label: 'Leadership readiness', value: '76%', tone: 'bg-secondary-base' },
                  { label: 'Learning streak', value: '12 days', tone: 'bg-info-base' },
                ].map((card) => (
                  <div key={card.label} className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <div className="mb-3 h-2.5 w-16 rounded-full bg-neutral-200">
                      <div className={`h-full rounded-full ${card.tone}`} style={{ width: '68%' }} />
                    </div>
                    <div className="text-2xl font-semibold text-neutral-900">{card.value}</div>
                    <div className="mt-1 text-sm text-neutral-600">{card.label}</div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="text-sm font-medium text-neutral-600">Growth overview</div>
                  <div className="rounded-full bg-primary-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary-700">
                    This quarter
                  </div>
                </div>

                <div className="flex h-48 items-end gap-3">
                  {[38, 52, 48, 70, 84, 78, 95].map((height, index) => (
                    <div key={index} className="flex-1">
                      <div
                        className={`w-full rounded-t-xl ${index % 2 === 0 ? 'bg-primary-base' : 'bg-secondary-base'} opacity-90`}
                        style={{ height: `${height}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
