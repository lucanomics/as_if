import type { ScenarioCategory } from './scenario'

export type PhraseCategory = ScenarioCategory | 'general'

export type PhraseRegister =
  | 'casual'
  | 'polite'
  | 'official'
  | 'assertive-safe'
  | 'therapeutic'
  | 'academic'

export type PhraseRiskType =
  | 'too-vague'
  | 'too-defensive'
  | 'too-casual'
  | 'too-emotional'
  | 'too-much-information'
  | 'legally-risky'
  | 'medically-unclear'
  | 'unnatural'

export type SafePhrase = {
  id: string
  phrase: string
  category: PhraseCategory
  register: PhraseRegister
  useCase: string
  whyItWorks: string
  caution?: string
  tags: string[]
}

export type DontSayThat = {
  id: string
  riskyPhrase: string
  category: PhraseCategory
  riskType: PhraseRiskType
  whyRisky: string
  saferAlternative: string
  explanation: string
  tags: string[]
}

export type ToneShift = {
  id: string
  inputMeaning: string
  category: PhraseCategory
  versions: {
    casual?: string
    polite?: string
    official?: string
    assertiveSafe?: string
    therapeutic?: string
    academic?: string
  }
  notes: string
  tags: string[]
}
