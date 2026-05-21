import type { PracticeProblem } from '../../problemTypes';
import joinJavascriptSolution from './solutions/join.js?raw';
import joinTypescriptSolution from './solutions/join.ts?raw';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';

export const jsonStringifyProblem: PracticeProblem = {
  id: 'jsonStringify',
  title: 'JSON.stringify',
  difficulty: 'Medium',
  description:
    'Implement `jsonStringify(value)`, a simplified version of `JSON.stringify` that converts a JavaScript value into a JSON string.\n\nOnly JSON-serializable values will be present in the input: `null`, booleans, finite numbers, strings, arrays, and plain objects. You can ignore the native API\'s optional `replacer` and `space` parameters.\n\nObjects should be serialized as key-value pairs with quoted keys. Arrays should preserve element order. Strings should be quoted and escaped where needed. Do not call the native `JSON.stringify` inside the implementation.\n\nExamples:\n`jsonStringify({ foo: \'bar\' })` returns `\'{\"foo\":\"bar\"}\'`.\n`jsonStringify({ foo: \'bar\', bar: [1, 2, 3] })` returns `\'{\"foo\":\"bar\",\"bar\":[1,2,3]}\'`.\n`jsonStringify({ foo: true, bar: false })` returns `\'{\"foo\":true,\"bar\":false}\'`.\n`jsonStringify(null)` returns `\'null\'`.\n`jsonStringify(\'foo\')` returns `\'\"foo\"\'`.',
  points: [
    '`value` (JSON-serializable value): The value to convert.',
    'Handle `null`, booleans, numbers, strings, arrays, and plain objects.',
    'Quote object keys and string values.',
    'Escape special characters inside strings.',
    'Preserve array element order and object key iteration order.',
    'Do not use the native `JSON.stringify` implementation.',
    '(string): Returns the JSON string representation.',
  ],
  solutions: [
    {
      title: 'Recursive',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'Join Parts',
      javascript: joinJavascriptSolution.trim(),
      typescript: joinTypescriptSolution.trim(),
    },
  ],
};
