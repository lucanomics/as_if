import academicScenarios from '../data/scenarios/academic.json'
import airportScenarios from '../data/scenarios/airport.json'
import medicalScenarios from '../data/scenarios/medical.json'
import policeScenarios from '../data/scenarios/police.json'
import socialScenarios from '../data/scenarios/social.json'
import type { Difficulty, RiskLevel, Scenario, ScenarioCategory } from '../types/scenario'

export const allScenarios: Scenario[] = [
  ...airportScenarios,
  ...policeScenarios,
  ...medicalScenarios,
  ...academicScenarios,
  ...socialScenarios,
] as Scenario[]

export const scenarioCategories: Array<{ value: ScenarioCategory; label: string }> = [
  { value: 'airport-immigration', label: 'Airport & Immigration' },
  { value: 'police-emergency', label: 'Police & Emergency' },
  { value: 'medical-counseling', label: 'Medical & Counseling' },
  { value: 'academic-bureaucratic', label: 'Academic & Bureaucratic' },
  { value: 'social-survival', label: 'Gen Z & Social Survival' },
]

export const difficulties: Difficulty[] = ['basic', 'intermediate', 'advanced', 'hard']
export const riskLevels: RiskLevel[] = ['low', 'medium', 'high']

export const categoryLabelMap: Record<ScenarioCategory, string> = Object.fromEntries(
  scenarioCategories.map((category) => [category.value, category.label]),
) as Record<ScenarioCategory, string>
