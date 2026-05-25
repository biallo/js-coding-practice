import { useEffect, useMemo, useState } from 'react';
import { problems } from '../data/problems';
import { EmptyState } from './EmptyState';
import { ProblemDetail } from './ProblemDetail';
import { ProblemSidebar } from './ProblemSidebar';

const selectedProblemStorageKey = 'js-coding-practice:selected-problem';
const completedProblemsStorageKey = 'js-coding-practice:completed-problems';

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

function getInitialCompletedIds() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const storedIds = window.localStorage.getItem(completedProblemsStorageKey);
    const parsedIds: unknown = storedIds ? JSON.parse(storedIds) : [];

    if (!Array.isArray(parsedIds)) {
      return [];
    }

    return parsedIds.filter((id): id is string =>
      typeof id === 'string' && problems.some((problem) => problem.id === id),
    );
  } catch {
    return [];
  }
}

export function PracticeApp() {
  const [selectedId, setSelectedId] = useState(getInitialSelectedId);
  const [completedIds, setCompletedIds] = useState(getInitialCompletedIds);
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
  const completedProblemIds = useMemo(() => new Set(completedIds), [completedIds]);

  const handleCompleteProblem = (id: string) => {
    setCompletedIds((currentIds) =>
      currentIds.includes(id) ? currentIds : [...currentIds, id],
    );
  };

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

  useEffect(() => {
    try {
      window.localStorage.setItem(
        completedProblemsStorageKey,
        JSON.stringify(completedIds),
      );
    } catch {
      // Ignore storage failures so marking completion still works for this session.
    }
  }, [completedIds]);

  if (!selectedProblem) {
    return <EmptyState />;
  }

  return (
    <main className="practice-shell">
      <ProblemSidebar
        completedIds={completedProblemIds}
        onSearchChange={setSearchQuery}
        onSelect={setSelectedId}
        problems={filteredProblems}
        searchQuery={searchQuery}
        selectedId={selectedProblem.id}
        totalProblemCount={problems.length}
      />
      <ProblemDetail
        isCompleted={completedProblemIds.has(selectedProblem.id)}
        onComplete={handleCompleteProblem}
        problem={selectedProblem}
      />
    </main>
  );
}
