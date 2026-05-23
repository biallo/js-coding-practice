import type { PracticeProblem } from '../../problemTypes';
import comparatorJavascriptSolution from './solutions/comparator.js?raw';
import comparatorTypescriptSolution from './solutions/comparator.ts?raw';
import decorateJavascriptSolution from './solutions/decorate.js?raw';
import decorateTypescriptSolution from './solutions/decorate.ts?raw';

export const readingOrderProblem: PracticeProblem = {
  id: 'readingOrder',
  title: 'Reading Order',
  difficulty: 'Easy',
  description: 'Canvas-based tools often store elements in creation order or another arbitrary internal order. Features such as keyboard navigation, batch actions, or exporting a canvas need a deterministic order that matches how a person scans the screen.\n\nImplement `readingOrder(elements)` for flat rectangle elements. Each element has an `id`, `x`, `y`, `width`, and `height`. For this problem, elements in the same row always have the same `y`, and different rows do not overlap vertically.\n\nReturn the element ids in reading order: top to bottom by `y`, then left to right by `x` within each row. Do not mutate the input array or its element objects.',
  examples: [
    {
      input: '`readingOrder([\n  { id: \'d\', x: 50, y: 40, width: 40, height: 20 },\n  { id: \'b\', x: 60, y: 0, width: 40, height: 20 },\n  { id: \'c\', x: 10, y: 40, width: 30, height: 20 },\n  { id: \'a\', x: 0, y: 0, width: 40, height: 20 },\n])`',
      output: '`[\'a\', \'b\', \'c\', \'d\']`',
    }
  ],
  points: [
    '`elements` (Array): A list of flat rectangle elements with `id`, `x`, `y`, `width`, and `height`.',
    'Sort rows from top to bottom using `y`.',
    'Sort elements in the same row from left to right using `x`.',
    'Return an array of ids, not the element objects.',
    'Do not mutate the input array or element objects.',
    '(string[]): Returns ids in reading order.',
  ],
  solutions: [
    {
      title: 'Comparator',
      javascript: comparatorJavascriptSolution.trim(),
      typescript: comparatorTypescriptSolution.trim(),
    },
    {
      title: 'Decorate Sort',
      javascript: decorateJavascriptSolution.trim(),
      typescript: decorateTypescriptSolution.trim(),
    },
  ],
};
