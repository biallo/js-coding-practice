import type { ReactNode } from 'react'

type RichTextProps = {
  text: string
}

export function InlineText({ text }: RichTextProps) {
  return renderInlineCode(text)
}

export function RichText({ text }: RichTextProps) {
  const paragraphs = text.split(/\n{2,}/)

  return (
    <div className="rich-text">
      {paragraphs.map((paragraph, paragraphIndex) => {
        const lines = paragraph.split('\n')

        return (
          <p key={`${paragraph}-${paragraphIndex}`}>
            {lines.map((line, lineIndex) => (
              <FragmentWithBreak
                isLast={lineIndex === lines.length - 1}
                key={`${line}-${lineIndex}`}
              >
                {renderInlineCode(line)}
              </FragmentWithBreak>
            ))}
          </p>
        )
      })}
    </div>
  )
}

function FragmentWithBreak({
  children,
  isLast,
}: {
  children: ReactNode
  isLast: boolean
}) {
  return (
    <>
      {children}
      {!isLast && <br />}
    </>
  )
}

function renderInlineCode(text: string) {
  const parts = text.split(/(`[^`]+`)/g)

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code className="inline-code" key={`${part}-${index}`}>
          {part.slice(1, -1)}
        </code>
      )
    }

    return part
  })
}
