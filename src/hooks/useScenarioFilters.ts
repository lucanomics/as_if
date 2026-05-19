import { useMemo, useState } from 'react'
import type { Difficulty, RiskLevel, Scenario, ScenarioCategory } from '../types/scenario'

type FilterValue<T extends string> = T | 'all'

export interface ScenarioFilterState {
  category: FilterValue<ScenarioCategory>
  difficulty: FilterValue<Difficulty>
  riskLevel: FilterValue<RiskLevel>
}

const defaultFilters: ScenarioFilterState = {
  category: 'all',
  difficulty: 'all',
  riskLevel: 'all',
}

export function useScenarioFilters(scenarios: Scenario[]) {
  const [filters, setFilters] = useState<ScenarioFilterState>(defaultFilters)

  const filteredScenarios = useMemo(
    () =>
      scenarios.filter((scenario) => {
        const categoryMatch = filters.category === 'all' || scenario.category === filters.category
        const difficultyMatch = filters.difficulty === 'all' || scenario.difficulty === filters.difficulty
        const riskMatch = filters.riskLevel === 'all' || scenario.riskLevel === filters.riskLevel

        return categoryMatch && difficultyMatch && riskMatch
      }),
    [filters, scenarios],
  )

  return { filters, setFilters, filteredScenarios }
}
