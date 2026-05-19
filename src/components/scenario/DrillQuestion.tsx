export function DrillQuestion({ question }: { question: string }) {
  return (
    <section className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-3">
      <h3 className="text-lg font-semibold">Pressure Drill Question</h3>
      <p className="text-base font-medium leading-7 text-[--color-text-primary]">{question}</p>
    </section>
  )
}
