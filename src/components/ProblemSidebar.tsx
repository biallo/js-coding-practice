import { useEffect, useRef } from 'react';
import type { PracticeProblem } from '../data/problemTypes';

type ProblemSidebarProps = {
  problems: PracticeProblem[]
  searchQuery: string
  selectedId: string
  totalProblemCount: number
  onSearchChange: (query: string) => void
  onSelect: (id: string) => void
}

export function ProblemSidebar({
  problems,
  searchQuery,
  selectedId,
  totalProblemCount,
  onSearchChange,
  onSelect,
}: ProblemSidebarProps) {
  const listRef = useRef<HTMLElement>(null);
  const selectedButtonRef = useRef<HTMLButtonElement>(null);
  const appIconUrl = `${import.meta.env.BASE_URL}icons/icon-192.png`;
  const hasSearchQuery = searchQuery.trim().length > 0;

  useEffect(() => {
    const selectedButton = selectedButtonRef.current;
    const list = listRef.current;

    if (!selectedButton || !list) {
      return;
    }

    const buttonRect = selectedButton.getBoundingClientRect();
    const listRect = list.getBoundingClientRect();
    const isVisible =
      buttonRect.top >= listRect.top &&
      buttonRect.bottom <= listRect.bottom;

    if (isVisible) {
      return;
    }

    selectedButton.scrollIntoView({
      block: 'nearest',
      inline: 'nearest',
    });
  }, [selectedId]);

  return (
    <aside className="problem-sidebar" aria-label="Problem list">
      <div className="sidebar-heading">
        <img className="sidebar-heading-icon" src={appIconUrl} alt="" />
        <div>
          <h1>Javascript</h1>
          <p className="subhead">Coding Practice</p>
        </div>
      </div>

      <div className="problem-search">
        <div className="problem-search-control">
          <span className="problem-search-icon" aria-hidden="true">
            &#8981;
          </span>
          <input
            autoComplete="off"
            id="problem-search"
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search title or difficulty"
            type="search"
            value={searchQuery}
          />
        </div>
        <p className="problem-search-count">
          {problems.length} of {totalProblemCount} problems
        </p>
      </div>

      <nav className="problem-list scroll-area" aria-label="Problems" ref={listRef}>
        {problems.length > 0 ? (
          problems.map((problem, index) => (
            <button
              className={problem.id === selectedId ? 'active' : ''}
              key={problem.id}
              onClick={() => onSelect(problem.id)}
              ref={problem.id === selectedId ? selectedButtonRef : undefined}
              type="button"
            >
              <span className="problem-index">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span>
                <strong>{problem.title}</strong>
                <small className={`difficulty-text difficulty-${problem.difficulty.toLowerCase()}`}>
                  {problem.difficulty}
                </small>
              </span>
            </button>
          ))
        ) : (
          <div className="problem-list-empty">
            <strong>No matches</strong>
            <span>Try a different search.</span>
          </div>
        )}
      </nav>

      {problems.length > 0 ? (
        <select
          className="problem-select"
          id="problem-select"
          onChange={(event) => onSelect(event.target.value)}
          value={problems.some((problem) => problem.id === selectedId) ? selectedId : problems[0].id}
        >
          {problems.map((problem, index) => (
            <option key={problem.id} value={problem.id}>
              {String(index + 1).padStart(2, '0')} - {problem.title}
            </option>
          ))}
        </select>
      ) : (
        <div className="problem-select-empty" aria-live={hasSearchQuery ? 'polite' : 'off'}>
          No matching problems
        </div>
      )}
    </aside>
  );
}
