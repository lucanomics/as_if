import { useState } from 'react'
import type { RubricItem } from '../../types/rubric'

export function SelfCheckPanel({ items }: { items: RubricItem[] }) {
  const [scores, setScores] = useState<Record<string, number>>({})

  return (
    <section className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-4">
      <h3 className="text-lg font-semibold">Self-check</h3>
      <p className="text-xs text-[--color-text-secondary]">Language practice only. Use this to reflect on clarity and tone.</p>
      {items.map((item) => (
        <div key={item.id} className="space-y-2 border-t border-[--color-line] pt-3 first:border-t-0 first:pt-0">
          <p className="text-sm font-semibold">{item.label}</p>
          <p className="text-xs text-[--color-text-secondary]">{item.description}</p>
          <p className="text-xs italic text-[--color-text-secondary]">{item.guidingQuestion}</p>
          <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5].map((value) => (
              <label key={value} className="inline-flex items-center gap-1 rounded-md border border-[--color-line] px-2 py-1 text-xs">
                <input
                  type="radio"
                  name={`rubric-${item.id}`}
                  value={value}
                  checked={scores[item.id] === value}
                  onChange={() => setScores((prev) => ({ ...prev, [item.id]: value }))}
                />
                {value}
              </label>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
