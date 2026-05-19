import { useEffect } from 'react'
import { useAudioRecorder } from '../../hooks/useAudioRecorder'
import { AudioPlayback } from './AudioPlayback'

type AudioRecorderProps = {
  onRecordingAvailable?: (hasAudio: boolean) => void
}

export function AudioRecorder({ onRecordingAvailable }: AudioRecorderProps) {
  const { isSupported, isPermissionDenied, isRecording, audioUrl, error, startRecording, stopRecording, clearRecording } = useAudioRecorder()

  useEffect(() => {
    onRecordingAvailable?.(Boolean(audioUrl))
  }, [audioUrl, onRecordingAvailable])

  const status = !isSupported
    ? 'Audio recording is not supported in this browser'
    : isPermissionDenied
      ? 'Microphone access denied'
      : isRecording
        ? 'Recording...'
        : audioUrl
          ? 'Recording available'
          : 'Ready to record'

  return (
    <section className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-3">
      <h3 className="text-lg font-semibold">Audio Practice</h3>
      <p className="text-sm text-[--color-text-secondary]">Record your answer and listen back. Audio stays in this browser session and is not uploaded.</p>
      <p className="text-xs text-[--color-text-secondary]">Audio is processed locally in your browser session. It is not uploaded or saved by As If.</p>

      <p className="text-sm font-medium" aria-live="polite">Status: {status}</p>

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => void startRecording()}
          disabled={!isSupported || isRecording}
          className="rounded-md border border-[--color-line] px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-50"
        >
          Start Recording
        </button>
        <button
          type="button"
          onClick={stopRecording}
          disabled={!isRecording}
          className="rounded-md border border-rose-700/40 bg-rose-500/10 px-3 py-1.5 text-sm text-rose-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Stop Recording
        </button>
        {audioUrl ? (
          <button type="button" onClick={clearRecording} className="rounded-md border border-[--color-line] px-3 py-1.5 text-sm">
            Re-record / Clear
          </button>
        ) : null}
      </div>

      {error ? <p className="text-xs text-amber-300">{error}</p> : null}
      {audioUrl ? <AudioPlayback audioUrl={audioUrl} /> : null}
    </section>
  )
}
