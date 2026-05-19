import { readLocalStorage, removeLocalStorage, writeLocalStorage } from '../hooks/useLocalStorage'
import type { PracticeRecord } from '../types/practice'

export const PRACTICE_RECORDS_STORAGE_KEY = 'as_if.practice_records.v1'

export function getPracticeRecords(): PracticeRecord[] {
  const parsed = readLocalStorage<unknown>(PRACTICE_RECORDS_STORAGE_KEY, [])

  if (!Array.isArray(parsed)) {
    return []
  }

  return parsed as PracticeRecord[]
}

export function savePracticeRecord(record: PracticeRecord): void {
  const existing = getPracticeRecords()
  writeLocalStorage(PRACTICE_RECORDS_STORAGE_KEY, [record, ...existing])
}

export function deletePracticeRecord(recordId: string): void {
  const existing = getPracticeRecords()
  writeLocalStorage(
    PRACTICE_RECORDS_STORAGE_KEY,
    existing.filter((record) => record.id !== recordId),
  )
}

export function clearPracticeRecords(): void {
  removeLocalStorage(PRACTICE_RECORDS_STORAGE_KEY)
}
