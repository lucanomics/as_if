import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/scenarios', label: 'Scenario Library' },
  { to: '/phrases', label: 'Phrase Bank' },
  { to: '/practice', label: 'My Practice' },
  { to: '/about', label: 'About' },
]

export function Header() {
  return (
    <header className="safe-top border-b border-[--color-line] bg-[--color-surface]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-3 py-3 sm:px-4 md:px-6">
        <div>
          <p className="text-xl font-semibold tracking-tight">As If</p>
          <p className="text-sm text-[--color-text-secondary]">High-Stakes English Practice</p>
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <li key={item.to} className="min-w-0">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `inline-flex min-h-11 items-center rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--color-warning-amber] ${
                      isActive
                        ? 'bg-[--color-accent-red] text-[--color-text-primary]'
                        : 'text-[--color-text-secondary] hover:bg-[--color-card] hover:text-[--color-text-primary]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
