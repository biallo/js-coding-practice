import type { PracticeProblem } from '../data/problemTypes'
import { CodeTabs } from './CodeTabs'
import { InlineText, RichText } from './RichText'

type ProblemDetailProps = {
  problem: PracticeProblem
}

export function ProblemDetail({ problem }: ProblemDetailProps) {
  return (
    <section className="problem-detail scroll-area">
      <header className="detail-header">
        <h2>{problem.title}</h2>
        <span className="difficulty">{problem.difficulty}</span>
      </header>

      <section className="prompt-section" aria-labelledby="prompt-title">
        <h3 id="prompt-title">Prompt</h3>
        <RichText text={problem.description} />

        <div className="requirements-block">
          <h4>Requirements</h4>
          <ul>
            {problem.points.map((point) => (
              <li key={point}>
                <InlineText text={point} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CodeTabs solutions={problem.solutions} />
    </section>
  )
}
