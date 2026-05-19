export function SafePhrasePanel({ safePhrases }: { safePhrases: string[] }) {
  return (
    <section className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-2">
      <h3 className="text-base font-semibold">Safe Phrases</h3>
      <ul className="list-disc space-y-1 pl-5 text-sm text-[--color-text-secondary]">
        {safePhrases.map((phrase) => (
          <li key={phrase}>{phrase}</li>
        ))}
      </ul>
      <p className="text-xs text-[--color-text-secondary]">
        These phrases are for language practice. Adapt them truthfully to your actual situation.
      </p>
    </section>
  )
}
