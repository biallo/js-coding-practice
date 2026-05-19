import type { PracticeProblem } from '../data/problemTypes'

type ProblemSidebarProps = {
  problems: PracticeProblem[]
  selectedId: string
  onSelect: (id: string) => void
}

export function ProblemSidebar({
  problems,
  selectedId,
  onSelect,
}: ProblemSidebarProps) {
  const appIconUrl = `${import.meta.env.BASE_URL}icons/icon-192.png`

  return (
    <aside className="problem-sidebar" aria-label="Problem list">
      <div className="sidebar-heading">
        <img className="sidebar-heading-icon" src={appIconUrl} alt="" />
        <div>
          <h1>Javascript</h1>
          <p className="subhead">Coding Practice</p>
        </div>
      </div>

      <nav className="problem-list scroll-area" aria-label="Problems">
        {problems.map((problem, index) => (
          <button
            className={problem.id === selectedId ? 'active' : ''}
            key={problem.id}
            onClick={() => onSelect(problem.id)}
            type="button"
          >
            <span className="problem-index">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>
              <strong>{problem.title}</strong>
              <small>{problem.difficulty}</small>
            </span>
          </button>
        ))}
      </nav>

      <select
        className="problem-select"
        id="problem-select"
        onChange={(event) => onSelect(event.target.value)}
        value={selectedId}
      >
        {problems.map((problem, index) => (
          <option key={problem.id} value={problem.id}>
            {String(index + 1).padStart(2, '0')} - {problem.title}
          </option>
        ))}
      </select>
    </aside>
  )
}
