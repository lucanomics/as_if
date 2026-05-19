# Data Schema (Scenario Library + Drill)

This project currently uses static JSON data for frontend language-practice scenarios and self-check rubrics.

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

## Self-check rubric

```ts
type RubricItem = {
  id: string
  label: string
  description: string
  scale: {
    min: 1
    max: 5
  }
  guidingQuestion: string
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

- Scenarios and rubric are for **language practice only**.
- Content must not provide legal, immigration, medical, or mental health advice.
- Content must not suggest lying, hiding facts, manipulating officials, or evading questions.
- Safer examples should prioritize clarity, calm tone, asking for clarification, and factual communication.
- Content must avoid promises or guarantees of outcomes.
- Self-check ratings are reflective prompts only; they are not legal, medical, or immigration safety scores.
