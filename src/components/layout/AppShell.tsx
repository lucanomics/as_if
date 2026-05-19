import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function AppShell() {
  return (
    <div className="min-h-screen bg-[--color-bg] text-[--color-text-primary]">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
