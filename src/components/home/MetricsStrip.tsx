export function MetricsStrip() {
  const metrics = [
    { value: '72%', label: 'weekly active engagement' },
    { value: '3.4x', label: 'faster skill progression' },
    { value: '41%', label: 'reduction in training admin' },
    { value: '90 days', label: 'to measurable impact' },
  ];

  return (
    <section className="border-y border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-2 xl:grid-cols-4 xl:px-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center md:text-left">
            <div className="text-4xl font-bold tracking-[-0.06em] text-neutral-900">{metric.value}</div>
            <div className="mt-2 text-sm text-neutral-600">{metric.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
