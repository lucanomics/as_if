import { Link } from 'react-router-dom'
import { PracticeRecordCard } from '../components/practice/PracticeRecordCard'
import { usePracticeRecords } from '../hooks/usePracticeRecords'

export function MyPracticePage() {
  const { records, deleteRecord, clearRecords } = usePracticeRecords()
  const sortedRecords = [...records].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  const handleClearAll = () => {
    if (window.confirm('Clear all saved practice records from this browser?')) {
      clearRecords()
    }
  }

  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">My Practice</h1>
      <p className="text-[--color-text-secondary]">Review the drills you saved in this browser.</p>

      <div className="rounded-lg border border-[--color-line] bg-[--color-card] p-4 text-sm leading-6 text-[--color-text-secondary]">
        Records are stored locally in your browser. They are not synced or reviewed by As If.
      </div>

      {sortedRecords.length === 0 ? (
        <div className="rounded-lg border border-[--color-line] bg-[--color-card] p-5 space-y-3">
          <p className="font-semibold">No saved practice yet.</p>
          <p className="text-sm text-[--color-text-secondary]">Complete a drill and save your response to see it here.</p>
          <Link to="/scenarios" className="text-sm font-medium text-[--color-text-primary] underline">
            Go to Scenario Library
          </Link>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-[--color-text-secondary]">{sortedRecords.length} saved record(s)</p>
            <button
              type="button"
              onClick={handleClearAll}
              className="rounded-md border border-[--color-line] min-h-11 px-3 py-2 text-sm text-[--color-text-secondary] hover:text-[--color-text-primary]"
            >
              Clear All
            </button>
          </div>

          <div className="space-y-3">
            {sortedRecords.map((record) => (
              <PracticeRecordCard key={record.id} record={record} onDelete={deleteRecord} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
