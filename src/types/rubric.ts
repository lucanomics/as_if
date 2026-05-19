export type RubricItem = {
  id: string
  label: string
  description: string
  scale: {
    min: 1
    max: 5
  }
  guidingQuestion: string
}
