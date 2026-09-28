import Link from 'next/link';
import { LogoMark } from '@/components/brand/LogoMark';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: '📊' },
  { label: 'AI Coach', href: '/coach', icon: '🤖' },
  { label: 'Learning Path', href: '/learning', icon: '🎯' },
  { label: 'Skills', href: '/skills', icon: '⭐' },
  { label: 'Manager View', href: '/manager', icon: '👥' },
  { label: 'HR Analytics', href: '/hr', icon: '📈' },
  { label: 'Career', href: '/career', icon: '🚀' },
];

export function Sidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 border-r border-neutral-200 bg-white transition-transform duration-300 lg:static lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center border-b border-neutral-200 px-4">
          <LogoMark compact />
        </div>

        <nav className="space-y-1 p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors"
              onClick={onClose}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 border-t border-neutral-200 bg-neutral-50 p-4">
          <div className="mb-3 flex items-center gap-3 rounded-lg bg-white p-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-base to-secondary-base" />
            <div className="text-sm">
              <div className="font-semibold text-neutral-900">Sarah Chen</div>
              <div className="text-xs text-neutral-500">Operations Manager</div>
            </div>
          </div>
          <button className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50">
            Sign out
          </button>
        </div>
      </aside>
    </>
  );
}
