import { Link, useParams } from 'react-router-dom'
import selfCheckRubric from '../data/rubrics/self-check-rubric.json'
import { getRelatedScenarios, getScenarioById } from '../lib/scenarioUtils'
import type { RubricItem } from '../types/rubric'
import { AnswerInput } from '../components/scenario/AnswerInput'
import { BetterAnswerPanel } from '../components/scenario/BetterAnswerPanel'
import { ContextNotesPanel } from '../components/scenario/ContextNotesPanel'
import { DontSayThatPanel } from '../components/scenario/DontSayThatPanel'
import { DrillQuestion } from '../components/scenario/DrillQuestion'
import { SafePhrasePanel } from '../components/scenario/SafePhrasePanel'
import { ScenarioMetaPanel } from '../components/scenario/ScenarioMetaPanel'
import { SelfCheckPanel } from '../components/scenario/SelfCheckPanel'

const rubricItems = selfCheckRubric as RubricItem[]

export function ScenarioDetailPage() {
  const { scenarioId = '' } = useParams()
  const scenario = getScenarioById(scenarioId)

  if (!scenario) {
    return (
      <section className="space-y-4">
        <h1 className="text-3xl font-bold">Scenario not found</h1>
        <p className="text-[--color-text-secondary]">This drill may have been moved or removed.</p>
        <Link to="/scenarios" className="text-sm font-medium text-[--color-text-primary] underline">
          Back to Scenario Library
        </Link>
      </section>
    )
  }

  const related = getRelatedScenarios(scenario.id, 3)

  return (
    <section className="space-y-6">
      <Link to="/scenarios" className="text-sm font-medium text-[--color-text-secondary] hover:text-[--color-text-primary]">
        ← Back to Scenario Library
      </Link>

      <ScenarioMetaPanel scenario={scenario} />

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-2 lg:col-span-2">
          <h3 className="text-lg font-semibold">Situation</h3>
          <p className="text-sm text-[--color-text-secondary]">{scenario.situation}</p>
          <h4 className="text-sm font-semibold">Your goal</h4>
          <p className="text-sm text-[--color-text-secondary]">{scenario.userGoal}</p>
        </div>
        <ContextNotesPanel contextNotes={scenario.contextNotes} />
      </section>

      <DrillQuestion question={scenario.pressureQuestion} />
      <AnswerInput />

      <section className="grid gap-4 lg:grid-cols-3">
        <SafePhrasePanel safePhrases={scenario.safePhrases} />
        <DontSayThatPanel avoidSaying={scenario.avoidSaying} />
        <BetterAnswerPanel betterAnswer={scenario.betterAnswer} />
      </section>

      <SelfCheckPanel items={rubricItems} />

      {related.length > 0 ? (
        <section className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-3">
          <h3 className="text-lg font-semibold">Related scenarios</h3>
          <div className="grid gap-2 md:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.id}
                to={`/scenarios/${item.id}`}
                className="rounded-md border border-[--color-line] px-3 py-2 text-sm text-[--color-text-secondary] hover:text-[--color-text-primary]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </section>
  )
}
