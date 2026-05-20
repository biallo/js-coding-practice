import { useMemo, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';
import type { PracticeProblem, SolutionCode } from '../data/problemTypes';

type CodeLanguage = keyof SolutionCode

const languageTabs: Array<{
  label: string
  language: CodeLanguage
  extension: string
}> = [
  { label: 'JavaScript', language: 'javascript', extension: '.js' },
  { label: 'TypeScript', language: 'typescript', extension: '.ts' },
];

type CodeTabsProps = {
  solutions: PracticeProblem['solutions']
}

export function CodeTabs({ solutions }: CodeTabsProps) {
  const [activeSolutionIndex, setActiveSolutionIndex] = useState(0);
  const [activeLanguage, setActiveLanguage] =
    useState<CodeLanguage>('javascript');
  const activeSolution = solutions[activeSolutionIndex] ?? solutions[0];
  const code = activeSolution[activeLanguage];
  const codeTitle = activeSolution.title;

  const highlightedCode = useMemo(() => {
    const grammar =
      activeLanguage === 'typescript'
        ? Prism.languages.typescript
        : Prism.languages.javascript;

    return Prism.highlight(code, grammar, activeLanguage);
  }, [activeLanguage, code]);

  return (
    <section className="solution-section" aria-label="Solution code">
      {solutions.length > 1 && (
        <div className="approach-selector">
          <div className="approach-header">
            <h3>Solution approaches</h3>
          </div>

          <div className="approach-tabs" role="tablist" aria-label="Solution approach">
            {solutions.map((solution, index) => (
              <button
                aria-selected={index === activeSolutionIndex}
                className={index === activeSolutionIndex ? 'active' : ''}
                key={`${solution.title}-${index}`}
                onClick={() => setActiveSolutionIndex(index)}
                role="tab"
                type="button"
              >
                {solution.title}
              </button>
            ))}
          </div>
        </div>
      )}

      <article className="code-panel">
        <div className="code-title">
          <h3>{codeTitle}</h3>
          <div className="title-language-tabs" role="tablist" aria-label="Solution language">
            {languageTabs.map((tab) => (
              <button
                aria-selected={tab.language === activeLanguage}
                className={tab.language === activeLanguage ? 'active' : ''}
                key={tab.language}
                onClick={() => setActiveLanguage(tab.language)}
                role="tab"
                type="button"
              >
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
        <pre>
          <code
            className={`language-${activeLanguage}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </article>
    </section>
  );
}
