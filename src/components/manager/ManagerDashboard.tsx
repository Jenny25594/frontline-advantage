export function ManagerDashboard() {
  return (
    <div className="space-y-6 p-6 lg:p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Team Capability Overview</h1>
        <p className="mt-1 text-neutral-600">Track your team's skill development and readiness at a glance.</p>
      </div>

      {/* Team Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: 'Team Size', value: '12', tone: 'from-primary-base to-primary-600' },
          { label: 'Avg Capability', value: '74%', tone: 'from-secondary-base to-secondary-600' },
          { label: 'Actively Learning', value: '10', tone: 'from-info-base to-info-600' },
          { label: 'Ready for Promotion', value: '3', tone: 'from-success-base to-success-700' },
        ].map((stat) => (
          <div key={stat.label} className="card">
            <div className={`mb-3 inline-block h-2.5 w-12 rounded-full bg-gradient-to-r ${stat.tone}`} />
            <div className="text-3xl font-bold text-neutral-900">{stat.value}</div>
            <div className="mt-2 text-sm text-neutral-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Team Capability Heatmap */}
      <div className="card">
        <h3 className="mb-6 text-lg font-semibold text-neutral-900">Team Capability Heatmap</h3>
        <div className="space-y-4">
          {[
            { name: 'Sarah Chen', role: 'Operations Mgr', capabilities: [85, 92, 78, 88] },
            { name: 'Marcus Johnson', role: 'Customer Service', capabilities: [72, 68, 85, 61] },
            { name: 'Elena Rodriguez', role: 'Sales Rep', capabilities: [94, 78, 89, 76] },
            { name: 'Amir Patel', role: 'Technical Support', capabilities: [71, 85, 73, 79] },
          ].map((member) => (
            <div key={member.name} className="border-b border-neutral-200 pb-4 last:border-0">
              <div className="mb-3 flex items-start justify-between">
                <div>
                  <div className="font-semibold text-neutral-900">{member.name}</div>
                  <div className="text-sm text-neutral-500">{member.role}</div>
                </div>
                <button className="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium hover:bg-neutral-50">
                  View profile
                </button>
              </div>
              <div className="grid gap-3 md:grid-cols-4">
                {['Communication', 'Technical', 'Leadership', 'Customer Focus'].map((skill, idx) => (
                  <div key={skill}>
                    <div className="mb-1 flex items-center justify-between text-xs">
                      <span className="text-neutral-600">{skill}</span>
                      <span className="font-semibold text-neutral-900">{member.capabilities[idx]}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-neutral-200">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary-base to-secondary-base"
                        style={{ width: `${member.capabilities[idx]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Items */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Coaching Opportunities */}
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-neutral-900">Coaching Opportunities</h3>
            <span className="badge badge-warning">4</span>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Marcus Johnson', gap: 'Conflict Resolution', action: 'Coach' },
              { name: 'Amir Patel', gap: 'Leadership', action: 'Mentor' },
            ].map((item) => (
              <div key={`${item.name}-${item.gap}`} className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
                <div>
                  <div className="text-sm font-medium text-neutral-900">{item.name}</div>
                  <div className="text-xs text-neutral-500">{item.gap}</div>
                </div>
                <button className="btn-tertiary text-xs px-3 py-1.5">{item.action}</button>
              </div>
            ))}
          </div>
        </div>

        {/* Promotion Readiness */}
        <div className="card">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-neutral-900">Promotion Ready</h3>
            <span className="badge badge-success">3</span>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Elena Rodriguez', readiness: 94, role: 'Senior Sales Rep' },
              { name: 'Sarah Chen', readiness: 88, role: 'Regional Manager' },
            ].map((item) => (
              <div key={item.name} className="flex items-center justify-between rounded-lg bg-neutral-50 p-3">
                <div className="flex-1">
                  <div className="text-sm font-medium text-neutral-900">{item.name}</div>
                  <div className="text-xs text-neutral-500">{item.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-success-base">{item.readiness}%</div>
                  <div className="text-xs text-neutral-500">Ready</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
