export function AnswerInput({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <section className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-3">
      <label htmlFor="answer-input" className="text-sm font-semibold text-[--color-text-primary]">
        Your answer
      </label>
      <textarea
        id="answer-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        rows={7}
        className="w-full rounded-md border border-[--color-line] bg-[--color-bg] px-3 py-2.5 text-base leading-6 text-[--color-text-primary]"
        placeholder="Write your response here..."
      />
      <p className="text-xs leading-5 text-[--color-text-secondary]">
        Write what you would actually say. Do not try to sound perfect. Try to sound clear, calm, and accurate.
      </p>
      <div className="flex items-center justify-between text-xs leading-5 text-[--color-text-secondary]">
        <span>{value.length} characters</span>
        <button
          type="button"
          onClick={() => onChange('')}
          className="rounded-md border border-[--color-line] min-h-11 px-3 py-2 hover:text-[--color-text-primary]"
        >
          Clear
        </button>
      </div>
    </section>
  )
}
