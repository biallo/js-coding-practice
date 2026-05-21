import type { PracticeProblem } from '../../problemTypes';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';
import treeWalkerJavascriptSolution from './solutions/tree-walker.js?raw';
import treeWalkerTypescriptSolution from './solutions/tree-walker.ts?raw';

export const htmlSanitizerProblem: PracticeProblem = {
  id: 'htmlSanitizer',
  title: 'HTML Sanitizer',
  difficulty: 'Medium',
  description:
    'Implement `sanitizeHTML(input)`, a simplified HTML sanitizer inspired by the browser HTML Sanitizer API.\n\nParse the input string into a detached DOM tree, sanitize that tree, and return the resulting HTML string. Remove the element subtrees `script`, `iframe`, `object`, and `embed`. Remove all HTML comment nodes. Remove any attribute whose name starts with `on`. Remove `href` and `src` attributes whose trimmed, case-insensitive value starts with `javascript:`. Preserve all other parsed HTML.\n\nExamples:\n`sanitizeHTML(\'<p>Hello <strong>world</strong></p>\')` returns `\'<p>Hello <strong>world</strong></p>\'`.\n`sanitizeHTML(\'<div><!-- secret --><a href=\" javascript:alert(1) \" onclick=\"evil()\">Click me</a><script>alert(1)</script></div>\')` returns `\'<div><a>Click me</a></div>\'`.',
  points: [
    '`input` (string): The HTML string to sanitize.',
    'Parse into a detached DOM tree before traversing.',
    'Remove `script`, `iframe`, `object`, and `embed` subtrees entirely.',
    'Remove comment nodes.',
    'Remove attributes whose names start with `on`.',
    'Remove unsafe `href` and `src` values that start with `javascript:` after trimming and lowercasing.',
    '(string): Returns the sanitized HTML string.',
  ],
  solutions: [
    {
      title: 'Recursive DOM Traversal',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'TreeWalker',
      javascript: treeWalkerJavascriptSolution.trim(),
      typescript: treeWalkerTypescriptSolution.trim(),
    },
  ],
};
