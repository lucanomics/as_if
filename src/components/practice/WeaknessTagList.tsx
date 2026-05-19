export function WeaknessTagList({ tags }: { tags: string[] }) {
  if (tags.length === 0) {
    return <p className="text-xs text-[--color-text-secondary]">No major weak spots flagged.</p>
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span key={tag} className="rounded-full border border-rose-700/40 bg-rose-500/10 px-2 py-0.5 text-xs text-rose-300">
          {tag}
        </span>
      ))}
    </div>
  )
}
