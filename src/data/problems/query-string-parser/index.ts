import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const queryStringParserProblem: PracticeProblem = {
  id: 'queryStringParser',
  title: 'Query String Parser',
  difficulty: 'Medium',
  description:
    'Implement `parseQuery(query)` and `stringifyQuery(params)`.\n\n`parseQuery` should convert a query string into an object. It should handle an optional leading `?`, URL decoding, repeated keys as arrays, and empty values.\n\n`stringifyQuery` should convert an object back into a query string. Array values should generate repeated keys. `null` and `undefined` values should be skipped.\n\nExamples:\n`parseQuery("?q=react&page=2&tag=js&tag=ts")` returns `{ q: "react", page: "2", tag: ["js", "ts"] }`.\n`stringifyQuery({ q: "react", tag: ["js", "ts"] })` returns `"q=react&tag=js&tag=ts"`.',
  points: [
    'Ignore a leading `?` when parsing.',
    'Decode keys and values with URL decoding.',
    'Represent repeated keys as arrays.',
    'Treat keys without `=` as empty-string values.',
    'Skip `null` and `undefined` values when stringifying.',
    'Array values should become repeated query keys.',
    'Encode keys and values when stringifying.',
  ],
  solutions: [
    {
      title: 'Repeated keys',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
