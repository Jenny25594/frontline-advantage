export function HRDashboard() {
  return (
    <div className="space-y-6 p-6 lg:p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Organizational Learning Analytics</h1>
        <p className="mt-1 text-neutral-600">Monitor workforce capability, engagement, and readiness across the organization.</p>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: 'Total Users', value: '1,243', change: '+12%' },
          { label: 'Avg Engagement', value: '68%', change: '+5%' },
          { label: 'Skills Mastered', value: '3,421', change: '+18%' },
          { label: 'Promotion Ready', value: '84', change: '+8%' },
        ].map((kpi) => (
          <div key={kpi.label} className="card">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-sm text-neutral-600">{kpi.label}</div>
                <div className="mt-2 text-3xl font-bold text-neutral-900">{kpi.value}</div>
              </div>
              <div className="badge badge-success">{kpi.change}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Engagement Over Time */}
      <div className="card">
        <h3 className="mb-6 text-lg font-semibold text-neutral-900">Engagement Trend</h3>
        <div className="flex h-40 items-end gap-2">
          {[35, 42, 48, 55, 62, 68, 71, 74, 76, 78, 79, 80].map((height, idx) => (
            <div
              key={idx}
              className={`flex-1 rounded-t-lg ${
                idx % 2 === 0 ? 'bg-primary-base' : 'bg-secondary-base'
              } opacity-90 hover:opacity-100 cursor-pointer`}
              style={{ height: `${height}%` }}
              title={`Week ${idx + 1}: ${height}%`}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-between text-xs text-neutral-500">
          <span>Week 1</span>
          <span>Week 6</span>
          <span>Week 12</span>
        </div>
      </div>

      {/* Org-wide Skills Gaps */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="card">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900">Top Skills Gaps</h3>
          <div className="space-y-4">
            {[
              { skill: 'AI Literacy', gap: 32, color: 'bg-error-base' },
              { skill: 'Digital Skills', gap: 28, color: 'bg-warning-base' },
              { skill: 'Leadership', gap: 24, color: 'bg-info-base' },
              { skill: 'Sales Excellence', gap: 18, color: 'bg-primary-base' },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-700">{item.skill}</span>
                  <span className="font-semibold text-neutral-900">{item.gap}% gap</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className={`h-full rounded-full ${item.color}`}
                    style={{ width: `${item.gap}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="mb-4 text-lg font-semibold text-neutral-900">Learning by Role</h3>
          <div className="space-y-4">
            {[
              { role: 'Sales', active: 156, percent: 78 },
              { role: 'Operations', active: 198, percent: 72 },
              { role: 'Customer Service', active: 142, percent: 68 },
              { role: 'Leadership', active: 87, percent: 82 },
            ].map((item) => (
              <div key={item.role}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-700">{item.role}</span>
                  <span className="font-semibold text-neutral-900">{item.active} active</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-neutral-200">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary-base to-secondary-base"
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Readiness by Department */}
      <div className="card">
        <h3 className="mb-6 text-lg font-semibold text-neutral-900">Promotion Readiness by Department</h3>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { dept: 'Sales', ready: 18, total: 98, percent: 73 },
            { dept: 'Operations', ready: 24, total: 156, percent: 68 },
            { dept: 'Customer Service', ready: 15, total: 87, percent: 62 },
          ].map((item) => (
            <div key={item.dept} className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <div className="mb-3 text-sm font-medium text-neutral-900">{item.dept}</div>
              <div className="mb-4 text-2xl font-bold text-neutral-900">
                {item.ready} <span className="text-lg text-neutral-500">of {item.total}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-neutral-200">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-primary-base to-primary-600"
                  style={{ width: `${item.percent}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
