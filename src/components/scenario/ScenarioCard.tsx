import { categoryLabelMap } from '../../lib/scenarioUtils'
import type { Scenario } from '../../types/scenario'
import { DifficultyBadge } from './DifficultyBadge'
import { RiskBadge } from './RiskBadge'

export function ScenarioCard({ scenario }: { scenario: Scenario }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-lg border border-[--color-line] bg-[--color-card] p-5">
      <header className="space-y-2">
        <h2 className="text-lg font-semibold text-[--color-text-primary]">{scenario.title}</h2>
        <p className="text-xs uppercase tracking-wide text-[--color-text-secondary]">{categoryLabelMap[scenario.category]}</p>
      </header>

      <div className="flex flex-wrap items-center gap-2">
        <DifficultyBadge difficulty={scenario.difficulty} />
        <RiskBadge riskLevel={scenario.riskLevel} />
        <span className="text-xs text-[--color-text-secondary]">{scenario.estimatedMinutes} min</span>
      </div>

      <p className="text-sm text-[--color-text-secondary]">{scenario.situation}</p>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">Skill focus</p>
        <div className="flex flex-wrap gap-2">
          {scenario.skillFocus.map((skill) => (
            <span key={skill} className="rounded-md border border-[--color-line] px-2 py-1 text-xs text-[--color-text-secondary]">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">Risk tags</p>
        <div className="flex flex-wrap gap-2">
          {scenario.riskTags.map((tag) => (
            <span key={tag} className="rounded-md border border-rose-900/50 bg-rose-900/20 px-2 py-1 text-xs text-rose-200">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        disabled
        className="mt-auto rounded-md border border-[--color-line] px-3 py-2 text-sm font-medium text-[--color-text-secondary] opacity-70"
      >
        View Drill · coming next
      </button>
    </article>
  )
}
