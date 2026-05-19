export function ContextNotesPanel({ contextNotes }: { contextNotes: string[] }) {
  return (
    <section className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-2">
      <h3 className="text-base font-semibold">Context Notes</h3>
      <ul className="list-disc space-y-1 pl-5 text-sm text-[--color-text-secondary]">
        {contextNotes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </section>
  )
}
