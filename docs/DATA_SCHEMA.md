# Data Schema (Initial Frontend Draft)

This project is currently static-only. The schema below is a planning artifact for future implementation.

## Scenario
- `id`: string
- `title`: string
- `category`: string
- `difficulty`: 'basic' | 'intermediate' | 'advanced'
- `summary`: string

## Phrase
- `id`: string
- `scenarioId`: string
- `text`: string
- `translationKo`: string
- `notes`: string

## PracticeSession
- `id`: string
- `scenarioId`: string
- `startedAt`: string (ISO timestamp)
- `completedAt`: string (ISO timestamp)
- `selfScore`: number (1-5)
