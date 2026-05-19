import type { Difficulty } from '../../types/scenario'

const difficultyBadgeClassMap: Record<Difficulty, string> = {
  basic: 'border-slate-600 bg-slate-700/40 text-slate-200',
  intermediate: 'border-cyan-700/50 bg-cyan-600/15 text-cyan-200',
  advanced: 'border-violet-700/50 bg-violet-600/15 text-violet-200',
  hard: 'border-fuchsia-700/50 bg-fuchsia-600/15 text-fuchsia-200',
}

export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span className={`inline-flex rounded-full border px-2 py-0.5 text-xs font-medium capitalize ${difficultyBadgeClassMap[difficulty]}`}>
      {difficulty}
    </span>
  )
}
