import { LogoMark } from '@/components/brand/LogoMark';

export function Navbar() {
  const navItems = ['Platform', 'Solutions', 'AI Coach', 'Capabilities', 'Pricing'];

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-neutral-50/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <LogoMark compact />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-secondary-900"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-md border border-neutral-200 bg-white px-4 py-2 text-sm font-semibold text-neutral-700 md:inline-flex">
            Book demo
          </button>
          <button className="inline-flex rounded-md bg-primary-base px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-600">
            Start free
          </button>
        </div>
      </div>
    </header>
  );
}
