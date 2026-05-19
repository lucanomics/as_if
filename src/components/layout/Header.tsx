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
    <header className="border-b border-[--color-line] bg-[--color-surface]">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <div>
          <p className="text-xl font-semibold tracking-tight">As If</p>
          <p className="text-sm text-[--color-text-secondary]">High-Stakes English Practice</p>
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-2 md:gap-3">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm transition-colors ${
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
