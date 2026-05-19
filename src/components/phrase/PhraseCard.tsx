import { phraseCategoryLabels, phraseRegisterLabels, phraseRiskTypeLabels } from '../../lib/phraseUtils'
import type { DontSayThat, SafePhrase } from '../../types/phrase'

type PhraseCardProps =
  | { type: 'safe'; item: SafePhrase }
  | { type: 'dont-say-that'; item: DontSayThat }

const badgeClass = 'rounded-full border border-[--color-line] px-2.5 py-1 text-xs font-medium text-[--color-text-secondary]'

export function PhraseCard(props: PhraseCardProps) {
  if (props.type === 'safe') {
    const { item } = props
    return (
      <article className="space-y-3 rounded-lg border border-[--color-line] bg-[--color-card] p-4">
        <p className="text-base font-semibold leading-7 break-words">“{item.phrase}”</p>
        <div className="flex flex-wrap gap-2">
          <span className={badgeClass}>{phraseCategoryLabels[item.category]}</span>
          <span className={badgeClass}>{phraseRegisterLabels[item.register]}</span>
        </div>
        <p className="text-sm leading-6"><span className="font-medium">Use case:</span> {item.useCase}</p>
        <p className="text-sm leading-6"><span className="font-medium">Why it works:</span> {item.whyItWorks}</p>
        {item.caution ? <p className="text-sm leading-6 text-amber-300"><span className="font-medium">Caution:</span> {item.caution}</p> : null}
        <div className="flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className={badgeClass}>#{tag}</span>)}</div>
      </article>
    )
  }

  const { item } = props
  return (
    <article className="space-y-3 rounded-lg border border-[--color-line] bg-[--color-card] p-4">
      <p className="text-sm uppercase tracking-wide text-red-300">Don’t say:</p>
      <p className="text-base font-semibold leading-7 break-words">“{item.riskyPhrase}”</p>
      <div className="flex flex-wrap gap-2">
        <span className={badgeClass}>{phraseCategoryLabels[item.category]}</span>
        <span className="rounded-full border border-red-500/40 px-2.5 py-1 text-xs font-medium text-red-200">
          {phraseRiskTypeLabels[item.riskType]}
        </span>
      </div>
      <p className="text-sm leading-6"><span className="font-medium">Why risky:</span> {item.whyRisky}</p>
      <p className="text-sm leading-6"><span className="font-medium">Safer alternative:</span> “{item.saferAlternative}”</p>
      <p className="text-sm leading-6"><span className="font-medium">Explanation:</span> {item.explanation}</p>
      <div className="flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className={badgeClass}>#{tag}</span>)}</div>
    </article>
  )
}
