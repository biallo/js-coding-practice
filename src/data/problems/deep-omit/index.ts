import type { PracticeProblem } from '../../problemTypes';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';
import stackJavascriptSolution from './solutions/stack.js?raw';
import stackTypescriptSolution from './solutions/stack.ts?raw';

export const deepOmitProblem: PracticeProblem = {
  id: 'deepOmit',
  title: 'Deep Omit',
  difficulty: 'Medium',
  description:
    'Implement `deepOmit(obj, keys)`, which removes specified keys and their corresponding values from an object, including nested objects and arrays.\n\nThe function should recursively traverse the entire input structure and remove every object property whose key appears in `keys`, no matter how deeply nested it is. Arrays should keep their order and length, while their object elements should be processed recursively.\n\nExamples:\n`deepOmit({ a: 1, b: 2, c: 3 }, [\'b\'])` returns `{ a: 1, c: 3 }`.\n\n`deepOmit({ a: 1, b: 2, c: { d: 3, e: 4 }, f: [5, 6] }, [\'b\', \'c\', \'e\'])` returns `{ a: 1, f: [5, 6] }`.',
  points: [
    '`obj` (Object): The object to process.',
    '`keys` (string[]): Property names to remove.',
    'Remove matching keys at every object nesting level.',
    'Recursively process objects inside arrays.',
    'Preserve array order and length.',
    'Return a new object or array structure without mutating the input.',
    '(Object): Returns the object with specified keys omitted deeply.',
  ],
  solutions: [
    {
      title: 'Recursive',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'Stack',
      javascript: stackJavascriptSolution.trim(),
      typescript: stackTypescriptSolution.trim(),
    },
  ],
};
