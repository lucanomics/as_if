import { phraseCategoryLabels, phraseRegisterLabels } from '../../lib/phraseUtils'
import type { ToneShift } from '../../types/phrase'

interface ToneShiftCardProps { item: ToneShift }

export function ToneShiftCard({ item }: ToneShiftCardProps) {
  const entries: Array<[label: string, value: string | undefined]> = [
    [phraseRegisterLabels.casual, item.versions.casual],
    [phraseRegisterLabels.polite, item.versions.polite],
    [phraseRegisterLabels.official, item.versions.official],
    [phraseRegisterLabels['assertive-safe'], item.versions.assertiveSafe],
    [phraseRegisterLabels.therapeutic, item.versions.therapeutic],
    [phraseRegisterLabels.academic, item.versions.academic],
  ]

  return (
    <article className="space-y-3 rounded-lg border border-[--color-line] bg-[--color-card] p-4">
      <p className="text-base font-semibold">Input meaning: “{item.inputMeaning}”</p>
      <span className="inline-flex rounded-full border border-[--color-line] px-2.5 py-1 text-xs text-[--color-text-secondary]">
        {phraseCategoryLabels[item.category]}
      </span>
      <div className="space-y-2">
        {entries.map(([label, value]) =>
          value ? (
            <p key={label} className="text-sm"><span className="font-medium">{label}:</span> {value}</p>
          ) : null,
        )}
      </div>
      <p className="text-sm"><span className="font-medium">Notes:</span> {item.notes}</p>
      <div className="flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="rounded-full border border-[--color-line] px-2.5 py-1 text-xs text-[--color-text-secondary]">#{tag}</span>)}</div>
    </article>
  )
}
