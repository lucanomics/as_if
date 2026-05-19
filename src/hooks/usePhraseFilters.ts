import { useMemo, useState } from 'react'
import { allDontSayThatExamples, allSafePhrases, allToneShifts, includesText } from '../lib/phraseUtils'
import type { PhraseCategory, PhraseRegister, PhraseRiskType } from '../types/phrase'

export type PhraseTab = 'safe' | 'dont-say-that' | 'tone-shift'

export type PhraseFilterState = {
  activeTab: PhraseTab
  searchQuery: string
  category: PhraseCategory | 'all'
  register: PhraseRegister | 'all'
  riskType: PhraseRiskType | 'all'
}

const defaultState: PhraseFilterState = {
  activeTab: 'safe',
  searchQuery: '',
  category: 'all',
  register: 'all',
  riskType: 'all',
}

export function usePhraseFilters() {
  const [filters, setFilters] = useState<PhraseFilterState>(defaultState)

  const safePhrases = useMemo(
    () =>
      allSafePhrases.filter((item) => {
        if (filters.category !== 'all' && item.category !== filters.category) return false
        if (filters.register !== 'all' && item.register !== filters.register) return false
        return includesText([item.phrase, item.useCase, item.whyItWorks, item.caution, ...item.tags], filters.searchQuery)
      }),
    [filters],
  )

  const dontSayThat = useMemo(
    () =>
      allDontSayThatExamples.filter((item) => {
        if (filters.category !== 'all' && item.category !== filters.category) return false
        if (filters.riskType !== 'all' && item.riskType !== filters.riskType) return false
        return includesText(
          [item.riskyPhrase, item.whyRisky, item.saferAlternative, item.explanation, ...item.tags],
          filters.searchQuery,
        )
      }),
    [filters],
  )

  const toneShifts = useMemo(
    () =>
      allToneShifts.filter((item) => {
        if (filters.category !== 'all' && item.category !== filters.category) return false
        if (filters.register !== 'all' && !item.versions[filters.register === 'assertive-safe' ? 'assertiveSafe' : filters.register]) return false
        return includesText([
          item.inputMeaning,
          item.notes,
          item.versions.casual,
          item.versions.polite,
          item.versions.official,
          item.versions.assertiveSafe,
          item.versions.therapeutic,
          item.versions.academic,
          ...item.tags,
        ], filters.searchQuery)
      }),
    [filters],
  )

  return { filters, setFilters, safePhrases, dontSayThat, toneShifts }
}
