import type { ScenarioFilterState } from '../../hooks/useScenarioFilters'
import { difficulties, riskLevels, scenarioCategories } from '../../lib/scenarioUtils'

interface ScenarioFiltersProps {
  filters: ScenarioFilterState
  onChange: (filters: ScenarioFilterState) => void
}

export function ScenarioFilters({ filters, onChange }: ScenarioFiltersProps) {
  return (
    <div className="grid gap-3 rounded-lg border border-[--color-line] bg-[--color-card] p-4 sm:grid-cols-2 md:grid-cols-3">
      <label className="space-y-1.5 text-sm">
        <span className="text-[--color-text-secondary]">Category</span>
        <select
          className="w-full rounded-md border border-[--color-line] bg-[--color-bg] px-3 py-2.5 text-[--color-text-primary]"
          value={filters.category}
          onChange={(event) => onChange({ ...filters, category: event.target.value as ScenarioFilterState['category'] })}
        >
          <option value="all">All</option>
          {scenarioCategories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.label}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-1.5 text-sm">
        <span className="text-[--color-text-secondary]">Difficulty</span>
        <select
          className="w-full rounded-md border border-[--color-line] bg-[--color-bg] px-3 py-2.5 text-[--color-text-primary]"
          value={filters.difficulty}
          onChange={(event) => onChange({ ...filters, difficulty: event.target.value as ScenarioFilterState['difficulty'] })}
        >
          <option value="all">All</option>
          {difficulties.map((difficulty) => (
            <option key={difficulty} value={difficulty} className="capitalize">
              {difficulty}
            </option>
          ))}
        </select>
      </label>

      <label className="space-y-1.5 text-sm">
        <span className="text-[--color-text-secondary]">Risk Level</span>
        <select
          className="w-full rounded-md border border-[--color-line] bg-[--color-bg] px-3 py-2.5 text-[--color-text-primary]"
          value={filters.riskLevel}
          onChange={(event) => onChange({ ...filters, riskLevel: event.target.value as ScenarioFilterState['riskLevel'] })}
        >
          <option value="all">All</option>
          {riskLevels.map((riskLevel) => (
            <option key={riskLevel} value={riskLevel} className="capitalize">
              {riskLevel}
            </option>
          ))}
        </select>
      </label>
    </div>
  )
}
