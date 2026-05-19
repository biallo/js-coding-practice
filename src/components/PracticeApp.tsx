import { useMemo, useState } from 'react'
import { problems } from '../data/problems'
import { EmptyState } from './EmptyState'
import { ProblemDetail } from './ProblemDetail'
import { ProblemSidebar } from './ProblemSidebar'

export function PracticeApp() {
  const [selectedId, setSelectedId] = useState(problems[0]?.id ?? '')

  const selectedProblem = useMemo(
    () => problems.find((problem) => problem.id === selectedId) ?? problems[0],
    [selectedId],
  )

  if (!selectedProblem) {
    return <EmptyState />
  }

  return (
    <main className="practice-shell">
      <ProblemSidebar
        onSelect={setSelectedId}
        problems={problems}
        selectedId={selectedProblem.id}
      />
      <ProblemDetail problem={selectedProblem} />
    </main>
  )
}
