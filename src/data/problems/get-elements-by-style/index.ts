import type { PracticeProblem } from '../../problemTypes';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';
import treeWalkerJavascriptSolution from './solutions/tree-walker.js?raw';
import treeWalkerTypescriptSolution from './solutions/tree-walker.ts?raw';

export const getElementsByStyleProblem: PracticeProblem = {
  id: 'getElementsByStyle',
  title: 'getElementsByStyle',
  difficulty: 'Medium',
  description: 'Implement a method `getElementsByStyle()` that finds DOM elements rendered by the browser using a specified style.\n\nThe function should take an element, a CSS property string, and a CSS value string. It should search only the descendants of the provided element, not the element itself. For every descendant, compare the rendered style for the provided property with the expected value.\n\nThe function should return an array of matching `Element`s. Do not use `document.querySelectorAll()` or `element.querySelectorAll()`; the point of the problem is to manually traverse the DOM.',
  examples: [
    {
      input: 'Given descendants with `font-size: 12px`, calling `getElementsByStyle(document.body, \'font-size\', \'12px\')`',
      output: 'the matching elements as an array',
    }
  ],
  points: [
    '`element` (Element): The root element whose descendants should be searched.',
    '`property` (string): The CSS property to check, for example `font-size`.',
    '`value` (string): The computed CSS value to match, for example `12px`.',
    'Only descendants of `element` should be searched; do not include `element` itself.',
    'Use rendered/computed styles rather than only checking inline style attributes.',
    '(Element[]): Returns an array of matching elements.',
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
