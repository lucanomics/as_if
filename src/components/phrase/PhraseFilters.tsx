import { phraseCategoryLabels, phraseRegisterLabels, phraseRiskTypeLabels } from '../../lib/phraseUtils'
import type { PhraseFilterState } from '../../hooks/usePhraseFilters'
import type { PhraseCategory, PhraseRegister, PhraseRiskType } from '../../types/phrase'

interface PhraseFiltersProps {
  filters: PhraseFilterState
  onChange: (next: PhraseFilterState) => void
  resultCount: number
}

const categories: PhraseCategory[] = ['general', 'airport-immigration', 'police-emergency', 'medical-counseling', 'academic-bureaucratic', 'social-survival']
const registers: PhraseRegister[] = ['casual', 'polite', 'official', 'assertive-safe', 'therapeutic', 'academic']
const riskTypes: PhraseRiskType[] = ['too-vague', 'too-defensive', 'too-casual', 'too-emotional', 'too-much-information', 'legally-risky', 'medically-unclear', 'unnatural']

export function PhraseFilters({ filters, onChange, resultCount }: PhraseFiltersProps) {
  const showRegister = filters.activeTab !== 'dont-say-that'
  const showRiskType = filters.activeTab === 'dont-say-that'

  return (
    <div className="space-y-3 rounded-lg border border-[--color-line] bg-[--color-card] p-4">
      <input
        value={filters.searchQuery}
        onChange={(event) => onChange({ ...filters, searchQuery: event.target.value })}
        placeholder="Search phrase, safer alternative, tags, notes..."
        className="w-full rounded-md border border-[--color-line] bg-[--color-bg] px-3 py-3 text-sm min-h-11 leading-6"
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <select className="rounded-md border border-[--color-line] bg-[--color-bg] px-3 py-3 text-sm min-h-11" value={filters.category} onChange={(e) => onChange({ ...filters, category: e.target.value as PhraseFilterState['category'] })}>
          <option value="all">All categories</option>
          {categories.map((value) => <option key={value} value={value}>{phraseCategoryLabels[value]}</option>)}
        </select>
        {showRegister ? <select className="rounded-md border border-[--color-line] bg-[--color-bg] px-3 py-3 text-sm min-h-11" value={filters.register} onChange={(e) => onChange({ ...filters, register: e.target.value as PhraseFilterState['register'] })}><option value="all">All registers</option>{registers.map((value) => <option key={value} value={value}>{phraseRegisterLabels[value]}</option>)}</select> : null}
        {showRiskType ? <select className="rounded-md border border-[--color-line] bg-[--color-bg] px-3 py-3 text-sm min-h-11" value={filters.riskType} onChange={(e) => onChange({ ...filters, riskType: e.target.value as PhraseFilterState['riskType'] })}><option value="all">All risk types</option>{riskTypes.map((value) => <option key={value} value={value}>{phraseRiskTypeLabels[value]}</option>)}</select> : null}
        <div className="flex min-h-11 items-center rounded-md border border-[--color-line] px-3 py-3 text-sm min-h-11 text-[--color-text-secondary]">{resultCount} result{resultCount === 1 ? '' : 's'}</div>
      </div>
    </div>
  )
}
