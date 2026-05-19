export function AudioPlayback({ audioUrl }: { audioUrl: string }) {
  return (
    <div className="space-y-2">
      <audio controls src={audioUrl} className="block w-full max-w-full" />
      <p className="text-xs text-[--color-text-secondary]">
        Playback is temporary. Save Practice records only your written answer and self-check scores.
      </p>
    </div>
  )
}
