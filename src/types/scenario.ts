export type ScenarioCategory =
  | 'airport-immigration'
  | 'police-emergency'
  | 'medical-counseling'
  | 'academic-bureaucratic'
  | 'social-survival'

export type Difficulty = 'basic' | 'intermediate' | 'advanced' | 'hard'

export type RiskLevel = 'low' | 'medium' | 'high'

export type DisclaimerLevel =
  | 'standard'
  | 'legal-sensitive'
  | 'medical-sensitive'
  | 'mental-health-sensitive'

export interface Scenario {
  id: string
  title: string
  category: ScenarioCategory
  difficulty: Difficulty
  riskLevel: RiskLevel
  estimatedMinutes: number
  situation: string
  userGoal: string
  pressureQuestion: string
  contextNotes: string[]
  avoidSaying: string[]
  safePhrases: string[]
  betterAnswer: string
  skillFocus: string[]
  riskTags: string[]
  selfCheckRubricIds: string[]
  disclaimerLevel: DisclaimerLevel
}
