import { useMemo, useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import type { PracticeProblem } from '../data/problemTypes'

type CodeLanguage = keyof PracticeProblem['solutions']

const tabs: Array<{
  label: string
  language: CodeLanguage
  extension: string
}> = [
  { label: 'JavaScript', language: 'javascript', extension: '.js' },
  { label: 'TypeScript', language: 'typescript', extension: '.ts' },
]

type CodeTabsProps = {
  solutions: PracticeProblem['solutions']
}

export function CodeTabs({ solutions }: CodeTabsProps) {
  const [activeLanguage, setActiveLanguage] =
    useState<CodeLanguage>('javascript')
  const activeTab = tabs.find((tab) => tab.language === activeLanguage) ?? tabs[0]
  const code = solutions[activeLanguage]

  const highlightedCode = useMemo(() => {
    const grammar =
      activeLanguage === 'typescript'
        ? Prism.languages.typescript
        : Prism.languages.javascript

    return Prism.highlight(code, grammar, activeLanguage)
  }, [activeLanguage, code])

  return (
    <section className="solution-section" aria-label="Solution code">
      <div className="code-tabs" role="tablist" aria-label="Solution language">
        {tabs.map((tab) => (
          <button
            aria-selected={tab.language === activeLanguage}
            className={tab.language === activeLanguage ? 'active' : ''}
            key={tab.language}
            onClick={() => setActiveLanguage(tab.language)}
            role="tab"
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <article className="code-panel">
        <div className="code-title">
          <h3>{activeTab.label}</h3>
          <span>{activeTab.extension}</span>
        </div>
        <pre>
          <code
            className={`language-${activeLanguage}`}
            dangerouslySetInnerHTML={{ __html: highlightedCode }}
          />
        </pre>
      </article>
    </section>
  )
}
