export function BetterAnswerPanel({ betterAnswer }: { betterAnswer: string }) {
  return (
    <section className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-2">
      <h3 className="text-base font-semibold">Better Answer</h3>
      <p className="text-sm text-[--color-text-secondary]">{betterAnswer}</p>
      <p className="text-xs text-[--color-text-secondary]">
        This is a model for clarity and tone, not a script to memorize or use dishonestly.
      </p>
    </section>
  )
}
