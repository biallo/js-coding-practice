import type { ReactNode } from 'react';

type RichTextProps = {
  text: string
}

export function InlineText({ text }: RichTextProps) {
  return renderInlineCode(text);
}

export function ExampleText({ text }: RichTextProps) {
  const parts = text.split(/(`[\s\S]+?`)/g).filter(Boolean);

  return (
    <>
      {parts.map((part, index) => renderExamplePart(part, index))}
    </>
  );
}

export function RichText({ text }: RichTextProps) {
  const paragraphs = text.split(/\n{2,}/);

  return (
    <div className="rich-text">
      {paragraphs.map((paragraph, paragraphIndex) => {
        const lines = paragraph.split('\n');

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
        );
      })}
    </div>
  );
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
  );
}

function renderInlineCode(text: string) {
  const parts = text.split(/(`[\s\S]+?`)/g);

  return parts.map((part, index) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code className="inline-code" key={`${part}-${index}`}>
          {part.slice(1, -1)}
        </code>
      );
    }

    return part;
  });
}

function formatExampleCode(code: string) {
  if (code.includes('\n')) {
    return code;
  }

  let formatted = code
    .replace(
      /\b((?:async\s+)?function\*?\s+[^(]+\([^)]*\))\s*\{\s*([^{}]+?)\s*\}/g,
      (_match, signature: string, body: string) =>
        `${signature} {\n${formatStatementBody(body)}\n}`,
    )
    .replace(
      /=>\s*\{\s*([^{}]+?)\s*\}/g,
      (_match, body: string) => `=> {\n${formatStatementBody(body)}\n}`,
    );

  if (!formatted.includes('\n') && /;\s+\S/.test(formatted)) {
    formatted = formatted.replace(/;\s+/g, ';\n');
  }

  return formatted;
}

function renderExamplePart(part: string, index: number) {
  if (part.startsWith('`') && part.endsWith('`')) {
    const code = part.slice(1, -1);

    if (shouldRenderCodeBlock(code)) {
      return (
        <pre className="example-code-block" key={`${part}-${index}`}>
          <code>{formatExampleCode(code)}</code>
        </pre>
      );
    }

    return (
      <code className="inline-code" key={`${part}-${index}`}>
        {code}
      </code>
    );
  }

  const lines = part.split('\n');

  return lines.map((line, lineIndex) => (
    <FragmentWithBreak
      isLast={lineIndex === lines.length - 1}
      key={`${part}-${index}-${lineIndex}`}
    >
      {line}
    </FragmentWithBreak>
  ));
}

function shouldRenderCodeBlock(code: string) {
  return (
    code.includes('\n') ||
    code.length > 64 ||
    /\bfunction\*?\s/.test(code) ||
    /=>\s*\{/.test(code) ||
    /;\s+\S/.test(code)
  );
}

function formatStatementBody(body: string) {
  return body
    .split(/;\s*/)
    .map((statement) => statement.trim())
    .filter(Boolean)
    .map((statement) => `  ${statement};`)
    .join('\n');
}
