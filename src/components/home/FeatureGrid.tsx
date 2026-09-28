const features = [
  {
    title: 'AI Learning Coach',
    description: 'Ask questions, build plans, and get job-ready guidance in seconds.',
    accent: 'from-primary-base to-primary-700',
    badge: 'Daily coaching',
  },
  {
    title: 'Skill Gap Intelligence',
    description: 'Map capability gaps to the exact next skill moves your team needs.',
    accent: 'from-secondary-base to-secondary-700',
    badge: 'Role-specific',
  },
  {
    title: 'Practice That Sticks',
    description: 'Turn learning into application through real-world challenges and reflection.',
    accent: 'from-info-base to-secondary-base',
    badge: 'On-the-job',
  },
  {
    title: 'Manager Coaching',
    description: 'Help leaders coach better with AI prompts, talent insight, and guidance.',
    accent: 'from-warning-base to-primary-base',
    badge: 'Leadership',
  },
  {
    title: 'Capability Pathways',
    description: 'Build personalized growth journeys for frontline, sales, operations, and leadership.',
    accent: 'from-primary-base to-secondary-base',
    badge: 'Personalized',
  },
  {
    title: 'Business Impact',
    description: 'Track capability uplift, readiness, promotion readiness, and performance support.',
    accent: 'from-secondary-base to-primary-base',
    badge: 'Measured',
  },
];

export function FeatureGrid() {
  return (
    <section className="section-contained">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-700">Why teams adopt it</div>
        <h2 className="text-4xl tracking-[-0.06em] text-neutral-900">Built for real capability growth</h2>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="card group relative overflow-hidden p-0">
            <div className={`h-2 w-full bg-gradient-to-r ${feature.accent}`} />
            <div className="p-6">
              <div className="mb-4 inline-flex rounded-full bg-neutral-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-neutral-600">
                {feature.badge}
              </div>
              <h3 className="mb-3 text-2xl font-semibold text-neutral-900">{feature.title}</h3>
              <p className="text-base text-neutral-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
