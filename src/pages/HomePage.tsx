import { Link } from 'react-router-dom'

export function HomePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-[--color-steel-blue]">As If</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">High-Stakes English Practice</h1>
        <p className="text-2xl font-semibold text-[--color-warning-amber]">Textbook English? As if.</p>
        <p className="max-w-2xl text-lg text-[--color-text-secondary]">
          Practice English for the situations that actually matter.
        </p>
        <p className="max-w-3xl text-base text-[--color-text-secondary]">
          교과서 영어로 버틴다고? As if. 입국심사, 병원, 경찰, 상담실, 관공서를 위한 진짜 상황 영어.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link className="rounded-md bg-[--color-accent-red] px-5 py-3 font-medium" to="/practice">
          Start a Drill
        </Link>
        <Link
          className="rounded-md border border-[--color-line] bg-[--color-card] px-5 py-3 font-medium text-[--color-text-primary]"
          to="/phrases"
        >
          Browse Phrase Bank
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {['Border & Immigration', 'Police & Public Safety', 'Hospital & Urgent Care'].map((item) => (
          <article key={item} className="rounded-lg border border-[--color-line] bg-[--color-card] p-4">
            <h2 className="font-semibold">{item}</h2>
            <p className="mt-2 text-sm text-[--color-text-secondary]">Placeholder content for upcoming drills.</p>
          </article>
        ))}
      </div>
    </section>
  )
}
