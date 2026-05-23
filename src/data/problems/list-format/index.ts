import type { PracticeProblem } from '../../problemTypes';
import helpersJavascriptSolution from './solutions/helpers.js?raw';
import helpersTypescriptSolution from './solutions/helpers.ts?raw';
import pipelineJavascriptSolution from './solutions/pipeline.js?raw';
import pipelineTypescriptSolution from './solutions/pipeline.ts?raw';

export const listFormatProblem: PracticeProblem = {
  id: 'listFormat',
  title: 'List Format',
  difficulty: 'Medium',
  description: 'Given a list of strings, implement a function `listFormat` that returns the items concatenated into a single human-readable string.\n\nThe function should support an optional second parameter with these options:\n`sorted`: Sorts the items in alphabetical order.\n`length`: Shows only the first `length` items and appends `and X other(s)` for the remaining items. Invalid values such as `0` or negative numbers should be ignored.\n`unique`: Removes duplicate items.\n\nEmpty strings should be omitted from the formatted result. The final string should use commas between most items and `and` before the last item.',
  examples: [
    {
      input: '`listFormat([])`',
      output: '`\'\'`',
    },
    {
      input: '`listFormat([\'Bob\', \'Alice\'])`',
      output: '`\'Bob and Alice\'`',
    },
    {
      input: '`listFormat([\'Bob\', \'Ben\', \'Tim\', \'Jane\', \'John\'])`',
      output: '`\'Bob, Ben, Tim, Jane and John\'`',
    },
    {
      input: '`listFormat([\'Bob\', \'Ben\', \'Tim\', \'Jane\', \'John\'], { length: 3 })`',
      output: '`\'Bob, Ben, Tim and 2 others\'`',
    },
    {
      input: '`listFormat([\'Bob\', \'Ben\', \'\', \'\', \'John\'])`',
      output: '`\'Bob, Ben and John\'`',
    }
  ],
  points: [
    '`items` (string[]): The list of strings to format.',
    '`options.sorted` (boolean): Sorts the list alphabetically before formatting.',
    '`options.length` (number): Limits visible items and appends `and X other(s)` for hidden items.',
    '`options.unique` (boolean): Removes duplicate items while preserving the first occurrence order.',
    'Empty strings should be ignored.',
    '(string): Returns the formatted list string.',
  ],
  solutions: [
    {
      title: 'Pipeline',
      javascript: pipelineJavascriptSolution.trim(),
      typescript: pipelineTypescriptSolution.trim(),
    },
    {
      title: 'Helpers',
      javascript: helpersJavascriptSolution.trim(),
      typescript: helpersTypescriptSolution.trim(),
    },
  ],
};
