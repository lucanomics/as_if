import { PhraseCard } from '../components/phrase/PhraseCard'
import { PhraseFilters } from '../components/phrase/PhraseFilters'
import { ToneShiftCard } from '../components/phrase/ToneShiftCard'
import { usePhraseFilters, type PhraseTab } from '../hooks/usePhraseFilters'

const tabs: Array<{ key: PhraseTab; label: string }> = [
  { key: 'safe', label: 'Safe Phrases' },
  { key: 'dont-say-that', label: 'Don’t Say That' },
  { key: 'tone-shift', label: 'Tone Shift' },
]

export function PhraseBankPage() {
  const { filters, setFilters, safePhrases, dontSayThat, toneShifts } = usePhraseFilters()
  const activeCount = filters.activeTab === 'safe' ? safePhrases.length : filters.activeTab === 'dont-say-that' ? dontSayThat.length : toneShifts.length

  return (
    <section className="space-y-5">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Phrase Bank</h1>
        <p className="text-[--color-text-secondary] leading-6">Quick access to safer wording, risky expressions to avoid, and tone shifts for high-pressure English.</p>
        <p className="rounded-lg border border-[--color-line] bg-[--color-card] p-4 text-sm leading-6">These examples are for language practice. Adapt them truthfully to your actual situation.</p>
      </header>

      <nav className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button key={tab.key} className={`rounded-md border px-4 py-2 text-sm min-h-11 ${filters.activeTab === tab.key ? 'border-[--color-accent] bg-[--color-accent] text-black' : 'border-[--color-line] bg-[--color-card]'}`} onClick={() => setFilters((prev) => ({ ...prev, activeTab: tab.key }))}>
            {tab.label}
          </button>
        ))}
      </nav>

      <PhraseFilters filters={filters} onChange={setFilters} resultCount={activeCount} />

      <div className="grid gap-4">
        {filters.activeTab === 'safe' && safePhrases.map((item) => <PhraseCard key={item.id} type="safe" item={item} />)}
        {filters.activeTab === 'dont-say-that' && dontSayThat.map((item) => <PhraseCard key={item.id} type="dont-say-that" item={item} />)}
        {filters.activeTab === 'tone-shift' && toneShifts.map((item) => <ToneShiftCard key={item.id} item={item} />)}
      </div>
    </section>
  )
}
