import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const promiseConcurrencyMethodsProblem: PracticeProblem = {
  id: 'promiseConcurrencyMethods',
  title: 'Promise Concurrency Methods',
  difficulty: 'Medium',
  description:
    'Implement simplified versions of three Promise concurrency helpers: `promiseAllSettled`, `promiseRace`, and `promiseAny`.\n\n`promiseAllSettled(values)` should wait for every input to settle and resolve to an array of status objects in input order.\n\n`promiseRace(values)` should settle as soon as the first input settles, resolving or rejecting with that input\'s result.\n\n`promiseAny(values)` should resolve as soon as the first input fulfills. If every input rejects, it should reject with an `AggregateError` containing all rejection reasons in input order.\n\nInputs may contain promises or plain values.\n\nExamples:\n`await promiseAllSettled([Promise.resolve(1), Promise.reject("x")])` resolves to `[{ status: "fulfilled", value: 1 }, { status: "rejected", reason: "x" }]`.\n`await promiseRace([sleep(50, "slow"), sleep(10, "fast")])` resolves to `"fast"`.\n`await promiseAny([Promise.reject("a"), Promise.resolve("b")])` resolves to `"b"`.',
  points: [
    'Support promise and non-promise input values.',
    '`promiseAllSettled` preserves input order and never rejects for input failures.',
    '`promiseRace` settles with the first fulfilled or rejected input.',
    '`promiseAny` resolves with the first fulfilled input.',
    '`promiseAny` rejects only when every input rejects.',
    'Handle empty arrays consistently with native behavior.',
    'Do not call the corresponding native static Promise method inside each implementation.',
  ],
  solutions: [
    {
      title: 'Manual coordination',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
