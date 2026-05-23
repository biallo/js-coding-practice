import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const chunkArrayProblem: PracticeProblem = {
  id: 'chunkArray',
  title: 'Chunk Array',
  difficulty: 'Easy',
  description: 'Given an array `arr` and a chunk size `size`, return a chunked array.\n\nA chunked array contains the original elements from `arr`, but grouped into subarrays where each subarray has length `size`. The final subarray may contain fewer than `size` elements when `arr.length` is not evenly divisible by `size`.\n\nPlease solve it without using lodash\'s `_.chunk` function.',
  examples: [
    {
      input: '`chunk([1, 2, 3, 4, 5], 1)`',
      output: '`[[1], [2], [3], [4], [5]]`',
    },
    {
      input: '`chunk([1, 9, 6, 3, 2], 3)`',
      output: '`[[1, 9, 6], [3, 2]]`',
    },
    {
      input: '`chunk([8, 5, 3, 2, 6], 6)`',
      output: '`[[8, 5, 3, 2, 6]]`',
    },
    {
      input: '`chunk([], 1)`',
      output: '`[]`',
    }
  ],
  points: [
    '`arr` (Array): The array to split into chunks.',
    '`size` (number): Maximum length of each chunk.',
    'Preserve the original element order.',
    'Every chunk except possibly the last should have length `size`.',
    'The last chunk may be shorter than `size`.',
    'Do not use lodash\'s `_.chunk` function.',
    '(Array[]): Returns the chunked array.',
  ],
  solutions: [
    {
      title: 'Slice Loop',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
