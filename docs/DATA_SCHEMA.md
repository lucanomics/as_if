# Data Schema (Scenario Library)

This project currently uses static JSON data for frontend language-practice scenarios.

## Scenario

```ts
interface Scenario {
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
```

## Enum values

### `category` (`ScenarioCategory`)
- `airport-immigration`
- `police-emergency`
- `medical-counseling`
- `academic-bureaucratic`
- `social-survival`

### `difficulty` (`Difficulty`)
- `basic`
- `intermediate`
- `advanced`
- `hard`

### `riskLevel` (`RiskLevel`)
- `low`
- `medium`
- `high`

### `disclaimerLevel` (`DisclaimerLevel`)
- `standard`
- `legal-sensitive`
- `medical-sensitive`
- `mental-health-sensitive`

## Content safety boundaries

- Scenarios are for **language practice only**.
- Scenario text must not provide legal, immigration, medical, or mental health advice.
- Scenario text must not suggest lying, hiding facts, manipulating officials, or evading questions.
- Safer answer examples should prioritize clarity, calm tone, asking for clarification, and factual communication.
- Scenario text must avoid promises or guarantees of outcomes.
