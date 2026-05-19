import { useCallback, useState } from 'react'
import { clearPracticeRecords, deletePracticeRecord, getPracticeRecords, savePracticeRecord } from '../lib/storage'
import type { PracticeRecord } from '../types/practice'

type AddRecordInput = Omit<PracticeRecord, 'id' | 'createdAt'> & Partial<Pick<PracticeRecord, 'id' | 'createdAt'>>

function createRecordId(): string {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }

  return `practice-${Date.now()}`
}

export function usePracticeRecords() {
  const [records, setRecords] = useState<PracticeRecord[]>(() => getPracticeRecords())

  const refreshRecords = useCallback(() => {
    setRecords(getPracticeRecords())
  }, [])

  const addRecord = useCallback((recordInput: AddRecordInput) => {
    const record: PracticeRecord = {
      ...recordInput,
      id: recordInput.id ?? createRecordId(),
      createdAt: recordInput.createdAt ?? new Date().toISOString(),
    }

    savePracticeRecord(record)
    setRecords(getPracticeRecords())
  }, [])

  const deleteRecord = useCallback((id: string) => {
    deletePracticeRecord(id)
    setRecords(getPracticeRecords())
  }, [])

  const clearRecords = useCallback(() => {
    clearPracticeRecords()
    setRecords([])
  }, [])

  return { records, addRecord, deleteRecord, clearRecords, refreshRecords }
}
