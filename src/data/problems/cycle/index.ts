import type { PracticeProblem } from '../../problemTypes';
import moduloJavascriptSolution from './solutions/modulo.js?raw';
import moduloTypescriptSolution from './solutions/modulo.ts?raw';
import resetJavascriptSolution from './solutions/reset.js?raw';
import resetTypescriptSolution from './solutions/reset.ts?raw';

export const cycleProblem: PracticeProblem = {
  id: 'cycle',
  title: 'Cycle',
  difficulty: 'Easy',
  description: 'Implement `cycle(...values)`, which takes one or more values and returns a function. Each time the returned function is called, it should return the next value from the original arguments. After returning the last value, it should cycle back to the first value.\n\nThe returned function should remember its current position between calls using closure state. If only one value is provided, every call should return that value.',
  examples: [
    {
      input: '`const helloFn = cycle(\'hello\');`\n`helloFn()` returns `\'hello\'`.\n`helloFn()`',
      output: '`\'hello\'`',
    },
    {
      input: '`const onOffFn = cycle(\'on\', \'off\');`\n`onOffFn()` returns `\'on\'`.\n`onOffFn()` returns `\'off\'`.\n`onOffFn()`',
      output: '`\'on\'`',
    }
  ],
  points: [
    '`...values` (Array): One or more values to cycle through.',
    'Return a function that produces the next value on every call.',
    'After the last value, continue again from the first value.',
    'Use closure state to remember the current position between calls.',
    'For one input value, every call should return that value.',
    '(Function): Returns a zero-argument function that yields the next value.',
  ],
  solutions: [
    {
      title: 'Modulo Index',
      javascript: moduloJavascriptSolution.trim(),
      typescript: moduloTypescriptSolution.trim(),
    },
    {
      title: 'Reset Index',
      javascript: resetJavascriptSolution.trim(),
      typescript: resetTypescriptSolution.trim(),
    },
  ],
};
