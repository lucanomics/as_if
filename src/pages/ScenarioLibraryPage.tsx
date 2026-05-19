import { ScenarioCard } from '../components/scenario/ScenarioCard'
import { ScenarioFilters } from '../components/scenario/ScenarioFilters'
import { useScenarioFilters } from '../hooks/useScenarioFilters'
import { allScenarios } from '../lib/scenarioUtils'

export function ScenarioLibraryPage() {
  const { filters, setFilters, filteredScenarios } = useScenarioFilters(allScenarios)

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold">Scenario Library</h1>
        <p className="text-[--color-text-secondary]">
          Choose a high-pressure situation and practice the English you actually need.
        </p>
      </header>

      <ScenarioFilters filters={filters} onChange={setFilters} />

      <p className="text-sm text-[--color-text-secondary]">{filteredScenarios.length} scenarios found</p>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filteredScenarios.map((scenario) => (
          <ScenarioCard key={scenario.id} scenario={scenario} />
        ))}
      </div>
    </section>
  )
}
