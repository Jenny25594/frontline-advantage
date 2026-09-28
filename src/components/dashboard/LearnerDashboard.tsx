export function LearnerDashboard() {
  return (
    <div className="space-y-6 p-6 lg:p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-neutral-900">Welcome back, Sarah</h1>
        <p className="mt-1 text-neutral-600">Keep your growth streak going. Your next lesson is ready.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-4">
        {[
          { label: 'Skill Growth', value: '+18%', tone: 'from-primary-base to-primary-600' },
          { label: 'Learning Streak', value: '12 days', tone: 'from-secondary-base to-secondary-600' },
          { label: 'Skills Mastered', value: '3', tone: 'from-info-base to-info-600' },
          { label: 'Career Level', value: 'Intermediate', tone: 'from-warning-base to-warning-600' },
        ].map((stat) => (
          <div key={stat.label} className="card">
            <div className={`mb-3 inline-block h-2.5 w-12 rounded-full bg-gradient-to-r ${stat.tone}`} />
            <div className="text-3xl font-bold text-neutral-900">{stat.value}</div>
            <div className="mt-2 text-sm text-neutral-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Learn Today */}
        <div className="lg:col-span-2 card p-0 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-primary-base to-primary-600" />
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-primary-700 font-semibold">Today's Focus</div>
                <h2 className="mt-2 text-2xl font-bold text-neutral-900">Customer Service Excellence</h2>
                <p className="mt-2 text-neutral-600">Master the art of handling difficult conversations with empathy and clarity.</p>
              </div>
              <div className="text-4xl">💬</div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">Lesson Progress</span>
                  <span className="font-semibold text-neutral-900">65%</span>
                </div>
                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-neutral-200">
                  <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-primary-base to-primary-600" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button className="btn-primary flex-1">Continue lesson</button>
              <button className="btn-tertiary">Preview</button>
            </div>
          </div>
        </div>

        {/* AI Coach Quick Access */}
        <div className="card p-0 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-secondary-base to-secondary-600" />
          <div className="p-6">
            <div className="mb-4 text-lg">🤖</div>
            <h3 className="font-semibold text-neutral-900">AI Coach</h3>
            <p className="mt-2 text-sm text-neutral-600">Get personalized guidance on any skill or topic.</p>
            <button className="mt-4 btn-secondary w-full">Open Coach</button>
          </div>
        </div>
      </div>

      {/* Capability Growth */}
      <div className="card">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-neutral-900">Your Capabilities</h3>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">This quarter</span>
        </div>

        <div className="space-y-4">
          {[
            { name: 'Customer Service', level: 78, color: 'bg-primary-base' },
            { name: 'Communication', level: 84, color: 'bg-secondary-base' },
            { name: 'Problem Solving', level: 71, color: 'bg-info-base' },
            { name: 'Leadership', level: 63, color: 'bg-warning-base' },
          ].map((capability) => (
            <div key={capability.name}>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-700">{capability.name}</span>
                <span className="font-semibold text-neutral-900">{capability.level}%</span>
              </div>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-neutral-200">
                <div
                  className={`h-full rounded-full ${capability.color}`}
                  style={{ width: `${capability.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Lessons */}
      <div className="card">
        <h3 className="mb-4 text-lg font-semibold text-neutral-900">Your Learning Path</h3>
        <div className="space-y-3">
          {[
            { week: 'Week 1', title: 'Difficult Conversations', status: 'In progress' },
            { week: 'Week 2', title: 'Emotional Intelligence', status: 'Ready' },
            { week: 'Week 3', title: 'Team Coaching', status: 'Upcoming' },
          ].map((lesson) => (
            <div key={lesson.week} className="flex items-center gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
              <div className="text-sm font-semibold text-neutral-600">{lesson.week}</div>
              <div className="flex-1">
                <div className="font-medium text-neutral-900">{lesson.title}</div>
              </div>
              <div className="badge badge-primary">{lesson.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
