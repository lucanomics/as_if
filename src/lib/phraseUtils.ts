import dontSayThatData from '../data/phrases/dont-say-that.json'
import safePhrasesData from '../data/phrases/safe-phrases.json'
import toneShiftsData from '../data/phrases/tone-shifts.json'
import type { DontSayThat, PhraseCategory, PhraseRegister, PhraseRiskType, SafePhrase, ToneShift } from '../types/phrase'

export const allSafePhrases = safePhrasesData as SafePhrase[]
export const allDontSayThatExamples = dontSayThatData as DontSayThat[]
export const allToneShifts = toneShiftsData as ToneShift[]

export const phraseCategoryLabels: Record<PhraseCategory, string> = {
  general: 'General',
  'airport-immigration': 'Airport & Immigration',
  'police-emergency': 'Police & Emergency',
  'medical-counseling': 'Medical & Counseling',
  'academic-bureaucratic': 'Academic & Bureaucratic',
  'social-survival': 'Social Survival',
}

export const phraseRegisterLabels: Record<PhraseRegister, string> = {
  casual: 'Casual',
  polite: 'Polite',
  official: 'Official',
  'assertive-safe': 'Assertive Safe',
  therapeutic: 'Therapeutic',
  academic: 'Academic',
}

export const phraseRiskTypeLabels: Record<PhraseRiskType, string> = {
  'too-vague': 'Too Vague',
  'too-defensive': 'Too Defensive',
  'too-casual': 'Too Casual',
  'too-emotional': 'Too Emotional',
  'too-much-information': 'Too Much Information',
  'legally-risky': 'Legally Risky',
  'medically-unclear': 'Medically Unclear',
  unnatural: 'Unnatural',
}

export const includesText = (fields: Array<string | undefined>, query: string) => {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return true
  return fields.some((field) => field?.toLowerCase().includes(normalized))
}
