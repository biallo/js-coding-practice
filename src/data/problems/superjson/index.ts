import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const superjsonProblem: PracticeProblem = {
  id: 'superjson',
  title: 'Superjson',
  difficulty: 'Medium',
  description:
    '`JSON.stringify()` is convenient for plain JSON data, but it loses information for values such as `undefined`, `Date`, `RegExp`, `BigInt`, `NaN`, `Infinity`, and `-Infinity`.\n\nImplement `serialize(value)` and `deserialize(serialized)`. `serialize()` should return a string, and `deserialize()` should restore an equivalent JavaScript value from a string produced by `serialize()`.\n\nThe exact wire format is up to you. A common approach is to recursively transform the input into a JSON-safe tree that tags special values, then pass that tree to `JSON.stringify()`.\n\nSupported values can appear as the top-level value or anywhere inside dense arrays and plain objects. You do not need to support functions, symbols, symbol keys, `Map`, `Set`, cyclic references, sparse arrays, malformed serialized strings, or custom class instances.\n\nExample:\n`const value = { createdAt: new Date(\'2026-01-01T00:00:00.000Z\'), retries: Infinity, missing: undefined, matcher: /user-\\d+/gi };`\n`const restored = deserialize(serialize(value));`\n`restored.createdAt instanceof Date` is `true`.\n`restored.retries` is `Infinity`.\n`restored.missing` is `undefined`.\n`restored.matcher.test(\'USER-42\')` is `true`.\n\n`deserialize(serialize([undefined, BigInt(42), { score: NaN }]))` restores an array whose first value is `undefined`, second value is `42n`, and `score` is `NaN`.',
  points: [
    '`serialize(value)`: Converts a supported JavaScript value into a string.',
    '`deserialize(serialized)`: Restores the value represented by a string produced by `serialize()`.',
    'Support all normal JSON values.',
    'Support `undefined`, `NaN`, `Infinity`, `-Infinity`, `BigInt`, `Date`, and `RegExp`.',
    'Special values may appear anywhere inside dense arrays and plain objects.',
    'The serialized format can be any string format as long as round-tripping works.',
    'Functions, symbols, `Map`, `Set`, cycles, sparse arrays, malformed input, and custom class instances are out of scope.',
  ],
  solutions: [
    {
      title: 'Tagged Tree',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
