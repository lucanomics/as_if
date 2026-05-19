# Data Schema (Scenario Library + Drill + Phrase Bank)

This project uses static JSON data for frontend language-practice scenarios, phrase bank entries, and self-check rubrics.
Practice records are stored locally in each browser via `localStorage` (no server sync).

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

## Phrase Bank

```ts
type SafePhrase = {
  id: string
  phrase: string
  category: PhraseCategory
  register: PhraseRegister
  useCase: string
  whyItWorks: string
  caution?: string
  tags: string[]
}

type DontSayThat = {
  id: string
  riskyPhrase: string
  category: PhraseCategory
  riskType: PhraseRiskType
  whyRisky: string
  saferAlternative: string
  explanation: string
  tags: string[]
}

type ToneShift = {
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

## PracticeRecord (local only)

```ts
type PracticeRecord = {
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
```

## Enum values

### `category` (`ScenarioCategory`)
- `airport-immigration`
- `police-emergency`
- `medical-counseling`
- `academic-bureaucratic`
- `social-survival`

### `phraseCategory` (`PhraseCategory`)
- `general`
- `airport-immigration`
- `police-emergency`
- `medical-counseling`
- `academic-bureaucratic`
- `social-survival`

### `phraseRegister` (`PhraseRegister`)
- `casual`
- `polite`
- `official`
- `assertive-safe`
- `therapeutic`
- `academic`

### `phraseRiskType` (`PhraseRiskType`)
- `too-vague`
- `too-defensive`
- `too-casual`
- `too-emotional`
- `too-much-information`
- `legally-risky`
- `medically-unclear`
- `unnatural`

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

- Scenarios and phrase bank content are for **language practice only**.
- Content must not provide legal, immigration, medical, or mental health advice.
- Content must not suggest lying, hiding facts, manipulating officials, or evading questions.
- Phrase alternatives must prioritize clarity, truthfulness, calm tone, asking for clarification, and avoiding unnecessary extra information.
- Content must avoid promises or guarantees of outcomes.
- Self-check ratings are reflective prompts only; they are not legal, medical, or immigration safety scores.
