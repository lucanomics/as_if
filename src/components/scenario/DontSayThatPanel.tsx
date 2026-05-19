export function DontSayThatPanel({ avoidSaying }: { avoidSaying: string[] }) {
  return (
    <section className="rounded-lg border border-rose-900/40 bg-rose-950/20 p-5 space-y-2">
      <h3 className="text-base font-semibold">Don&apos;t Say That</h3>
      <ul className="list-disc space-y-1 pl-5 text-sm text-rose-200">
        {avoidSaying.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p className="text-xs text-rose-200/90">
        These examples may sound vague, defensive, too casual, or unnecessarily risky in high-pressure settings.
      </p>
    </section>
  )
}
