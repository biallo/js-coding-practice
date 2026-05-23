import type { PracticeProblem } from '../../problemTypes';
import jsonJavascriptSolution from './solutions/json.js?raw';
import jsonTypescriptSolution from './solutions/json.ts?raw';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';

export const deepCloneProblem: PracticeProblem = {
  id: 'deepClone',
  title: 'Deep Clone',
  difficulty: 'Medium',
  description: 'Implement a `deepClone` function that performs a deep clone operation on JavaScript values.\n\nA deep clone creates a completely new value. If the input is an object or array, none of the nested objects or arrays in the cloned result should share references with the original input. Mutating the clone should not affect the original, and mutating the original should not affect the clone.\n\nFor this problem, you can assume the input only contains JSON-serializable values: `null`, booleans, numbers, strings, arrays, and plain objects. The input will not contain values such as `Date`, `RegExp`, `Map`, `Set`, functions, symbols, or circular references.',
  examples: [
    {
      input: '`const obj = { user: { role: \'admin\' } };`\n`const cloned = deepClone(obj);`\nAfter `cloned.user.role = \'guest\'`, `obj.user.role` should still be `\'admin\'`.',
      output: '`obj.user.role` remains `\'admin\'`',
    }
  ],
  points: [
    '`value` (JSON-serializable value): The value to clone.',
    'Primitive values should be returned as-is.',
    'Arrays should be cloned recursively item by item.',
    'Plain object own enumerable properties should be cloned recursively.',
    'The cloned result should not share nested array or object references with the original input.',
    '(any): Returns a deeply cloned value.',
  ],
  solutions: [
    {
      title: 'Recursive',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'JSON Serialization',
      javascript: jsonJavascriptSolution.trim(),
      typescript: jsonTypescriptSolution.trim(),
    },
  ],
};
