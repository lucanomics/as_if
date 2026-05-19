import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function AppShell() {
  return (
    <div className="min-h-screen bg-[--color-bg] text-[--color-text-primary]">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-3 py-6 sm:px-4 sm:py-8 md:px-6 md:py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
