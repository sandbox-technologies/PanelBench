import { ReactNode, useState, useEffect, useRef } from 'react'
import { useFailedTests } from './TestContext'

interface TestItemProps {
  testId: string
  label: string
  children: ReactNode
  className?: string
}

export function TestItem({ testId, label, children, className = '' }: TestItemProps) {
  const { toggleTest, isTestFailed, updateTestNote, getTestNote } = useFailedTests()
  const failed = isTestFailed(testId)
  const [localNote, setLocalNote] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  // Sync local note with context when test becomes failed
  useEffect(() => {
    if (failed) {
      setLocalNote(getTestNote(testId))
    }
  }, [failed, testId, getTestNote])

  // Auto-focus the textarea when test is marked as failed
  useEffect(() => {
    if (failed && textareaRef.current) {
      textareaRef.current.focus()
    }
  }, [failed])

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newNote = e.target.value
    setLocalNote(newNote)
    updateTestNote(testId, newNote)
  }

  return (
    <div className={`test-item ${failed ? 'test-item-failed' : ''} ${className}`}>
      <div className="test-item-header">
        <span className="test-id-badge">{testId}</span>
        <label className="test-fail-checkbox">
          <input
            type="checkbox"
            checked={failed}
            onChange={() => toggleTest(testId)}
          />
          <span className="test-fail-label">Failed</span>
        </label>
      </div>
      {children}
      <p className="test-label">{label}</p>
      {failed && (
        <div className="test-note-container">
          <textarea
            ref={textareaRef}
            value={localNote}
            onChange={handleNoteChange}
            placeholder="Add a note about why this test failed..."
            className="test-note-input"
            rows={2}
          />
        </div>
      )}
    </div>
  )
}
