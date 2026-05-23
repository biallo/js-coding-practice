import type { PracticeProblem } from '../../problemTypes';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';
import treeWalkerJavascriptSolution from './solutions/tree-walker.js?raw';
import treeWalkerTypescriptSolution from './solutions/tree-walker.ts?raw';

export const getElementsByClassNameProblem: PracticeProblem = {
  id: 'getElementsByClassName',
  title: 'getElementsByClassName',
  difficulty: 'Medium',
  description: 'Implement `getElementsByClassName(element, classNames)`, a pure function version of `Element.getElementsByClassName()`.\n\nThe function receives a root element and a `classNames` string containing one or more class names separated by whitespace. Search only descendants of the root element, not the root element itself. Return an array of elements that contain every requested class name.\n\nDo not use `document.querySelectorAll()` or `element.querySelectorAll()`; the point is to manually traverse the DOM.',
  examples: [
    {
      input: 'Given this DOM:\n`<div class="foo bar baz">\n  <span class="bar baz">Span</span>\n  <p class="foo baz">Paragraph</p>\n  <div class="foo bar"></div>\n</div>`\nCalling `getElementsByClassName(document.body, \'foo bar\')`',
      output: 'the two `div` elements that contain both `foo` and `bar`',
    }
  ],
  points: [
    '`element` (Element): The root whose descendants should be searched.',
    '`classNames` (string): One or more whitespace-separated class names.',
    'Only descendants of `element` should be searched; do not include `element` itself.',
    'An element matches only if it contains every requested class name.',
    'Return an array of matching `Element`s in document traversal order.',
    'Do not use `querySelectorAll()`.',
    '(Element[]): Returns matching descendant elements.',
  ],
  solutions: [
    {
      title: 'Recursive Traversal',
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
