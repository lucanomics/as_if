import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export function useAudioRecorder() {
  const [isRecording, setIsRecording] = useState(false)
  const [isPermissionDenied, setIsPermissionDenied] = useState(false)
  const [audioUrl, setAudioUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const chunksRef = useRef<BlobPart[]>([])
  const audioUrlRef = useRef<string | null>(null)

  const isSupported = useMemo(() => {
    return typeof window !== 'undefined' && typeof navigator !== 'undefined' && Boolean(navigator.mediaDevices?.getUserMedia) && typeof MediaRecorder !== 'undefined'
  }, [])

  const clearObjectUrl = useCallback(() => {
    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current)
      audioUrlRef.current = null
    }
  }, [])

  const stopTracks = useCallback(() => {
    streamRef.current?.getTracks().forEach((track) => track.stop())
    streamRef.current = null
  }, [])

  const clearRecording = useCallback(() => {
    clearObjectUrl()
    setAudioUrl(null)
    setError(null)
  }, [clearObjectUrl])

  const stopRecording = useCallback(() => {
    const recorder = mediaRecorderRef.current

    if (recorder && recorder.state === 'recording') {
      recorder.stop()
    } else {
      stopTracks()
      setIsRecording(false)
    }
  }, [stopTracks])

  const startRecording = useCallback(async () => {
    setError(null)
    setIsPermissionDenied(false)

    if (!isSupported) {
      setError('Audio recording is not supported in this browser.')
      return
    }

    clearRecording()

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream

      const recorder = new MediaRecorder(stream)
      mediaRecorderRef.current = recorder
      chunksRef.current = []

      recorder.ondataavailable = (event: BlobEvent) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data)
        }
      }

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })

        clearObjectUrl()
        const nextAudioUrl = URL.createObjectURL(blob)
        audioUrlRef.current = nextAudioUrl
        setAudioUrl(nextAudioUrl)
        setIsRecording(false)
        stopTracks()
      }

      recorder.onerror = () => {
        setError('Unable to capture audio. Please try again.')
        setIsRecording(false)
        stopTracks()
      }

      recorder.start()
      setIsRecording(true)
    } catch (cause) {
      const isDenied = cause instanceof DOMException && (cause.name === 'NotAllowedError' || cause.name === 'PermissionDeniedError')

      if (isDenied) {
        setIsPermissionDenied(true)
        setError('Microphone access denied.')
      } else {
        setError('Unable to start audio recording on this device.')
      }

      setIsRecording(false)
      stopTracks()
    }
  }, [clearObjectUrl, clearRecording, isSupported, stopTracks])

  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current?.state === 'recording') {
        mediaRecorderRef.current.stop()
      }
      stopTracks()
      clearObjectUrl()
    }
  }, [clearObjectUrl, stopTracks])

  return {
    isSupported,
    isPermissionDenied,
    isRecording,
    audioUrl,
    error,
    startRecording,
    stopRecording,
    clearRecording,
  }
}
