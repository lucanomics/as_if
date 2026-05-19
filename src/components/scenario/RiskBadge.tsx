import type { RiskLevel } from '../../types/scenario'

const riskBadgeClassMap: Record<RiskLevel, string> = {
  low: 'border-emerald-700/40 bg-emerald-500/10 text-emerald-300',
  medium: 'border-amber-700/40 bg-amber-500/10 text-amber-300',
  high: 'border-rose-700/40 bg-rose-500/10 text-rose-300',
}

export function RiskBadge({ riskLevel }: { riskLevel: RiskLevel }) {
  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${riskBadgeClassMap[riskLevel]}`}>
      Risk: {riskLevel}
    </span>
  )
}
