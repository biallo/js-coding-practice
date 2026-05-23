import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const nestedArrayGeneratorProblem: PracticeProblem = {
  id: 'nestedArrayGenerator',
  title: 'Nested Array Generator',
  difficulty: 'Medium',
  description: 'Given a multi-dimensional array of integers `arr`, return a generator object that yields integers in the same order as an inorder traversal.\n\nA multi-dimensional array is a recursive data structure that contains integers and other multi-dimensional arrays. Inorder traversal processes each array from left to right, yielding integers directly and recursively traversing nested arrays when they appear.\n\nThe generator should yield values lazily without first creating a fully flattened copy of the array.',
  examples: [
    {
      input: '`const generator = inorderTraversal([[[6]], [1, 3], []]);`\n`generator.next().value` returns `6`.\n`generator.next().value` returns `1`.\n`generator.next().value` returns `3`.\n`generator.next().done`',
      output: '`true`',
    },
    {
      input: '`Array.from(inorderTraversal([]))`',
      output: '`[]`',
    }
  ],
  points: [
    '`arr` (Array): A multi-dimensional array of integers.',
    'Return a generator object.',
    'Yield integers in left-to-right inorder traversal order.',
    'Traverse nested arrays when they are encountered.',
    'Do not create a fully flattened copy before yielding values.',
    'The array may be empty.',
    '(Generator<number>): Returns a generator yielding the nested integers.',
  ],
  solutions: [
    {
      title: 'Iterative Generator',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
