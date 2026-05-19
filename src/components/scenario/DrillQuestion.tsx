export function DrillQuestion({ question }: { question: string }) {
  return (
    <section className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-2">
      <h3 className="text-lg font-semibold">Pressure Drill</h3>
      <p className="text-sm text-[--color-text-secondary]">{question}</p>
    </section>
  )
}
