import { useEffect, useMemo, useState } from 'react';
import { problems } from '../data/problems';
import { EmptyState } from './EmptyState';
import { ProblemDetail } from './ProblemDetail';
import { ProblemSidebar } from './ProblemSidebar';

const selectedProblemStorageKey = 'js-coding-practice:selected-problem';

function getInitialSelectedId() {
  const fallbackId = problems[0]?.id ?? '';

  if (typeof window === 'undefined') {
    return fallbackId;
  }

  try {
    const storedId = window.localStorage.getItem(selectedProblemStorageKey);
    return problems.some((problem) => problem.id === storedId)
      ? storedId ?? fallbackId
      : fallbackId;
  } catch {
    return fallbackId;
  }
}

export function PracticeApp() {
  const [selectedId, setSelectedId] = useState(getInitialSelectedId);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProblems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      return problems;
    }

    return problems.filter((problem) => {
      const searchableText = [
        problem.title,
        problem.difficulty,
      ]
        .join(' ')
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [searchQuery]);

  const selectedProblem = useMemo(
    () => problems.find((problem) => problem.id === selectedId) ?? problems[0],
    [selectedId],
  );

  const selectedProblemId = selectedProblem?.id;

  useEffect(() => {
    if (!selectedProblemId) {
      return;
    }

    try {
      window.localStorage.setItem(selectedProblemStorageKey, selectedProblemId);
    } catch {
      // Ignore storage failures so selecting problems still works.
    }
  }, [selectedProblemId]);

  if (!selectedProblem) {
    return <EmptyState />;
  }

  return (
    <main className="practice-shell">
      <ProblemSidebar
        onSearchChange={setSearchQuery}
        onSelect={setSelectedId}
        problems={filteredProblems}
        searchQuery={searchQuery}
        selectedId={selectedProblem.id}
        totalProblemCount={problems.length}
      />
      <ProblemDetail problem={selectedProblem} />
    </main>
  );
}
