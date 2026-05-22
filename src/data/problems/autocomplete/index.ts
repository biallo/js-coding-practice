import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const autocompleteProblem: PracticeProblem = {
  id: 'autocomplete',
  title: 'Autocomplete',
  difficulty: 'Hard',
  description:
    'Implement `createAutocomplete(searcher, options)` for an autocomplete input.\n\nThe returned object should expose `search(query)`. Calls should be debounced by `options.debounceMs`. Results should be cached by query when `options.cache` is `true`. If multiple requests are in flight and an older request resolves after a newer one, ignore the stale response by rejecting it with `"Stale response"`.\n\nThis models a common frontend interview problem: debounce user input, avoid duplicate network work, cache results, and prevent out-of-order responses from showing stale suggestions.\n\nExamples:\n`const autocomplete = createAutocomplete(fetchSuggestions, { debounceMs: 100, cache: true });`\n`autocomplete.search("rea")` waits for the debounce, calls `fetchSuggestions("rea")`, and resolves with suggestions.',
  points: [
    '`searcher(query)`: Async function returning suggestions.',
    '`debounceMs`: Delay before starting a request.',
    '`cache`: When true, reuse cached successful results by query.',
    'Clear any pending debounce timer when a newer search starts.',
    'Only the latest request should be allowed to resolve normally.',
    'Reject stale responses with `"Stale response"`.',
    'Expose a `clearCache()` method.',
  ],
  solutions: [
    {
      title: 'Debounce cache latest',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
