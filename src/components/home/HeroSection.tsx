export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200 bg-[radial-gradient(circle_at_top_right,_rgba(47,128,237,0.12),_transparent_25%),radial-gradient(circle_at_left,_rgba(0,196,140,0.14),_transparent_30%)]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary-700">
            AI-powered workforce growth
          </div>

          <h1 className="max-w-xl text-5xl font-bold tracking-[-0.08em] text-neutral-900 md:text-6xl">
            Grow skills.
            <span className="block bg-gradient-to-r from-primary-base via-secondary-base to-secondary-900 bg-clip-text text-transparent">
              Build capability.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-600">
            Frontline Advantage turns learning into daily skill growth with AI coaching, personalized capability pathways, and practical on-the-job development for every role.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="btn-primary px-6 py-3 text-base">Start free</button>
            <button className="btn-secondary px-6 py-3 text-base">Book demo</button>
          </div>

          <div className="mt-8 flex items-center gap-8 text-sm text-neutral-500">
            <div>
              <div className="text-2xl font-bold text-neutral-900">3x</div>
              <div>faster skill growth</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-900">90 days</div>
              <div>to capability impact</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-neutral-900">1 click</div>
              <div>from gap to action</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-primary-100 blur-3xl" />
          <div className="absolute -right-4 bottom-6 h-40 w-40 rounded-full bg-secondary-100 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-4 shadow-xl">
            <div className="rounded-[22px] border border-neutral-200 bg-neutral-50 p-4">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">Capability dashboard</div>
                  <div className="mt-1 text-xl font-semibold text-neutral-900">Operations Team</div>
                </div>
                <div className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">+18% this month</div>
              </div>

              <div className="space-y-4">
                {[
                  { label: 'Customer service', percent: 84, color: 'bg-primary-base' },
                  { label: 'Safety compliance', percent: 71, color: 'bg-secondary-base' },
                  { label: 'Leadership readiness', percent: 63, color: 'bg-info-base' },
                  { label: 'AI literacy', percent: 76, color: 'bg-warning-base' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="mb-2 flex items-center justify-between text-sm">
                      <span className="text-neutral-600">{item.label}</span>
                      <span className="font-semibold text-neutral-900">{item.percent}%</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-neutral-200">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.percent}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-primary-100 bg-primary-50 p-4">
                <div className="text-xs uppercase tracking-[0.15em] text-primary-700">AI coach</div>
                <div className="mt-2 text-base font-medium text-neutral-900">“Create my first 90-day leadership plan.”</div>
                <div className="mt-3 text-sm text-neutral-600">Your next focus: coaching conversations + team engagement routines.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
