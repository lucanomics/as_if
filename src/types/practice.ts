import type { Difficulty, RiskLevel, ScenarioCategory } from './scenario'

export type PracticeRecord = {
  id: string
  scenarioId: string
  scenarioTitle: string
  category: ScenarioCategory
  difficulty: Difficulty
  riskLevel: RiskLevel
  createdAt: string
  writtenAnswer: string
  selfScores: {
    rubricId: string
    score: number
  }[]
  weaknessTags: string[]
  usedAudio?: boolean
  notes?: string
}
