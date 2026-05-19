import { categoryLabelMap } from '../../lib/scenarioUtils'
import type { Scenario } from '../../types/scenario'
import { DifficultyBadge } from './DifficultyBadge'
import { RiskBadge } from './RiskBadge'

const sensitiveDisclaimerMap: Record<Exclude<Scenario['disclaimerLevel'], 'standard'>, string> = {
  'legal-sensitive':
    'This drill is for language practice only. It does not provide legal or immigration advice or guarantee any outcome.',
  'medical-sensitive': 'This drill is for language practice only. It does not provide medical advice, diagnosis, or treatment.',
  'mental-health-sensitive':
    'This drill is for language practice only. It does not provide mental health treatment or crisis support.',
}

export function ScenarioMetaPanel({ scenario }: { scenario: Scenario }) {
  const notice = scenario.disclaimerLevel === 'standard' ? undefined : sensitiveDisclaimerMap[scenario.disclaimerLevel]

  return (
    <section className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-3">
      <h1 className="text-2xl font-bold">{scenario.title}</h1>
      <p className="text-xs uppercase tracking-wide text-[--color-text-secondary]">{categoryLabelMap[scenario.category]}</p>
      <div className="flex flex-wrap items-center gap-2">
        <DifficultyBadge difficulty={scenario.difficulty} />
        <RiskBadge riskLevel={scenario.riskLevel} />
        <span className="text-xs text-[--color-text-secondary]">{scenario.estimatedMinutes} min</span>
      </div>
      {notice ? <p className="rounded-md border border-amber-700/40 bg-amber-500/10 p-3 text-xs text-amber-200">{notice}</p> : null}
    </section>
  )
}
