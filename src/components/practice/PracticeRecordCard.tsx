import { Link } from 'react-router-dom'
import { categoryLabelMap } from '../../lib/scenarioUtils'
import type { PracticeRecord } from '../../types/practice'
import { DifficultyBadge } from '../scenario/DifficultyBadge'
import { RiskBadge } from '../scenario/RiskBadge'
import { WeaknessTagList } from './WeaknessTagList'

export function PracticeRecordCard({ record, onDelete }: { record: PracticeRecord; onDelete: (id: string) => void }) {
  const totalScore = record.selfScores.reduce((sum, item) => sum + item.score, 0)
  const averageScore = record.selfScores.length > 0 ? (totalScore / record.selfScores.length).toFixed(1) : 'N/A'

  return (
    <article className="space-y-3 rounded-lg border border-[--color-line] bg-[--color-card] p-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-wide text-[--color-text-secondary]">{categoryLabelMap[record.category]}</p>
          <h3 className="text-lg font-semibold break-words">{record.scenarioTitle}</h3>
          <p className="text-xs text-[--color-text-secondary]">Saved: {new Date(record.createdAt).toLocaleString()}</p>
        </div>
        <div className="flex items-center gap-2">
          <DifficultyBadge difficulty={record.difficulty} />
          <RiskBadge riskLevel={record.riskLevel} />
        </div>
      </div>

      <p className="line-clamp-4 whitespace-pre-wrap break-words text-sm leading-6 text-[--color-text-secondary]">{record.writtenAnswer}</p>

      <div className="space-y-1 text-xs text-[--color-text-secondary]">
        <p>Self-check items scored: {record.selfScores.length}</p>
        <p>Average self-check score: {averageScore}</p>
      </div>

      <div className="space-y-2">

      {record.usedAudio ? (
        <p className="text-xs text-[--color-text-secondary]">Audio practiced</p>
      ) : null}

        <p className="text-xs font-semibold uppercase tracking-wide text-[--color-text-secondary]">Weakness tags</p>
        <WeaknessTagList tags={record.weaknessTags} />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <Link to={`/scenarios/${record.scenarioId}`} className="text-sm font-medium text-[--color-text-primary] underline">
          Practice again
        </Link>
        <button
          type="button"
          onClick={() => onDelete(record.id)}
          className="rounded-md border border-[--color-line] min-h-11 px-3 py-2 text-sm text-[--color-text-secondary] hover:text-[--color-text-primary]"
        >
          Delete
        </button>
      </div>
    </article>
  )
}
