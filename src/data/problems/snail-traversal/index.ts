import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const snailTraversalProblem: PracticeProblem = {
  id: 'snailTraversal',
  title: 'Snail Traversal',
  difficulty: 'Medium',
  description:
    'Write code that enhances all arrays so that `array.snail(rowsCount, colsCount)` transforms a one-dimensional array into a two-dimensional matrix in snail traversal order.\n\nSnail traversal starts at the top-left cell, fills the first column from top to bottom, then fills the next column from bottom to top. The direction alternates for each column until every value is placed.\n\nIf `rowsCount * colsCount !== array.length`, the input is invalid and the method should return an empty array.\n\nExamples:\n`[19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15].snail(5, 4)` returns `[[19, 17, 16, 15], [10, 1, 14, 4], [3, 2, 12, 20], [7, 5, 18, 11], [9, 8, 6, 13]]`.\n\n`[1, 2, 3, 4].snail(1, 4)` returns `[[1, 2, 3, 4]]`.\n`[1, 3].snail(2, 2)` returns `[]`.',
  points: [
    'Add a `snail(rowsCount, colsCount)` method to `Array.prototype`.',
    'Return `[]` when `rowsCount * colsCount` does not equal the array length.',
    'Fill the first column from top to bottom.',
    'Alternate direction for each following column.',
    'Preserve the original array order along the snail traversal path.',
    '`rowsCount` and `colsCount` are between `1` and `250`.',
    '(Array[]): Returns the two-dimensional snail traversal matrix.',
  ],
  solutions: [
    {
      title: 'Column Direction',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
