import { lazy, Suspense, useEffect, useRef } from 'react';
import type { PracticeProblem } from '../data/problemTypes';
import { ExampleText, InlineText, RichText } from './RichText';

const CodeTabs = lazy(() =>
  import('./CodeTabs').then((module) => ({ default: module.CodeTabs })),
);

type ProblemDetailProps = {
  problem: PracticeProblem
  isCompleted: boolean
  onComplete: (id: string) => void
}

export function ProblemDetail({
  isCompleted,
  onComplete,
  problem,
}: ProblemDetailProps) {
  const detailRef = useRef<HTMLElement>(null);
  const difficultyClass = `difficulty difficulty-${problem.difficulty.toLowerCase()}`;

  useEffect(() => {
    detailRef.current?.scrollTo({ top: 0 });
  }, [problem.id]);

  return (
    <section className="problem-detail scroll-area" ref={detailRef}>
      <header className="detail-header">
        <h2>{problem.title}</h2>
        <div className="detail-status">
          <span className={difficultyClass}>{problem.difficulty}</span>
          {isCompleted ? (
            <span className="detail-complete-badge">已完成</span>
          ) : null}
        </div>
      </header>

      <section className="prompt-section" aria-labelledby="prompt-title">
        <h3 id="prompt-title">Prompt</h3>
        <RichText text={problem.description} />

        {problem.examples && problem.examples.length > 0 ? (
          <div className="examples-block">
            <h4>Examples</h4>
            <div className="example-list">
              {problem.examples.map((example, index) => (
                <article className="example-card" key={`${example.input}-${index}`}>
                  {problem.examples && problem.examples.length > 1 ? (
                    <h5>Example {index + 1}</h5>
                  ) : null}
                  <dl>
                    <div>
                      <dt>Input</dt>
                      <dd>
                        <ExampleText text={example.input} />
                      </dd>
                    </div>
                    <div>
                      <dt>Output</dt>
                      <dd>
                        <ExampleText text={example.output} />
                      </dd>
                    </div>
                    {example.explanation ? (
                      <div>
                        <dt>Explanation</dt>
                        <dd>
                          <ExampleText text={example.explanation} />
                        </dd>
                      </div>
                    ) : null}
                  </dl>
                </article>
              ))}
            </div>
          </div>
        ) : null}

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

      <Suspense
        fallback={<div className="code-panel-loading">Loading solution...</div>}
      >
        <CodeTabs key={problem.id} solutions={problem.solutions} />
      </Suspense>

      <div className="completion-actions">
        <button
          className="completion-button"
          disabled={isCompleted}
          onClick={() => onComplete(problem.id)}
          type="button"
        >
          {isCompleted ? 'Completed' : 'Mark Complete'}
        </button>
      </div>
    </section>
  );
}
