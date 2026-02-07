import { createContext, useContext, useState, useCallback, ReactNode } from 'react'

interface FailedTestInfo {
  note: string
}

interface FailedTestsContextType {
  failedTests: Map<string, FailedTestInfo>
  toggleTest: (testId: string) => void
  isTestFailed: (testId: string) => boolean
  getFailedTestsList: () => string[]
  getFailedTestsWithNotes: () => { testId: string; note: string }[]
  clearAllFailed: () => void
  updateTestNote: (testId: string, note: string) => void
  getTestNote: (testId: string) => string
}

const FailedTestsContext = createContext<FailedTestsContextType | null>(null)

export function FailedTestsProvider({ children }: { children: ReactNode }) {
  const [failedTests, setFailedTests] = useState<Map<string, FailedTestInfo>>(new Map())

  const toggleTest = useCallback((testId: string) => {
    setFailedTests((prev) => {
      const next = new Map(prev)
      if (next.has(testId)) {
        next.delete(testId)
      } else {
        next.set(testId, { note: '' })
      }
      return next
    })
  }, [])

  const isTestFailed = useCallback(
    (testId: string) => failedTests.has(testId),
    [failedTests]
  )

  const getFailedTestsList = useCallback(
    () => Array.from(failedTests.keys()).sort(),
    [failedTests]
  )

  const getFailedTestsWithNotes = useCallback(
    () =>
      Array.from(failedTests.entries())
        .map(([testId, info]) => ({ testId, note: info.note }))
        .sort((a, b) => a.testId.localeCompare(b.testId)),
    [failedTests]
  )

  const clearAllFailed = useCallback(() => {
    setFailedTests(new Map())
  }, [])

  const updateTestNote = useCallback((testId: string, note: string) => {
    setFailedTests((prev) => {
      if (!prev.has(testId)) return prev
      const next = new Map(prev)
      next.set(testId, { ...prev.get(testId)!, note })
      return next
    })
  }, [])

  const getTestNote = useCallback(
    (testId: string) => failedTests.get(testId)?.note ?? '',
    [failedTests]
  )

  return (
    <FailedTestsContext.Provider
      value={{
        failedTests,
        toggleTest,
        isTestFailed,
        getFailedTestsList,
        getFailedTestsWithNotes,
        clearAllFailed,
        updateTestNote,
        getTestNote,
      }}
    >
      {children}
    </FailedTestsContext.Provider>
  )
}

export function useFailedTests() {
  const context = useContext(FailedTestsContext)
  if (!context) {
    throw new Error('useFailedTests must be used within a FailedTestsProvider')
  }
  return context
}
