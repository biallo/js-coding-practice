import type { PracticeProblem } from '../../problemTypes';
import mapJavascriptSolution from './solutions/map.js?raw';
import mapTypescriptSolution from './solutions/map.ts?raw';
import reduceJavascriptSolution from './solutions/reduce.js?raw';
import reduceTypescriptSolution from './solutions/reduce.ts?raw';

export const dataMergingProblem: PracticeProblem = {
  id: 'dataMerging',
  title: 'Data Merging',
  difficulty: 'Medium',
  description:
    'A data set of gym sessions contains objects with a `user` id, a `duration` in minutes, and an alphabetically sorted `equipment` array.\n\nImplement `mergeData(sessions)`, which returns a unified view of each user\'s activity. Sessions with the same `user` should be merged into one object. When merging, sum the `duration` fields and combine all `equipment` values with duplicates removed and the final equipment list sorted alphabetically.\n\nThe result order should follow the original session order. If a user appears more than once, the merged row should stay at that user\'s earliest occurrence. Do not mutate the input objects or their equipment arrays.\n\nExample:\n`mergeData([{ user: 8, duration: 50, equipment: [\'bench\'] }, { user: 7, duration: 150, equipment: [\'dumbbell\'] }, { user: 7, duration: 100, equipment: [\'bike\', \'kettlebell\'] }])` returns `[{ user: 8, duration: 50, equipment: [\'bench\'] }, { user: 7, duration: 250, equipment: [\'bike\', \'dumbbell\', \'kettlebell\'] }]`.',
  points: [
    '`sessions` (Array): Gym session records containing `user`, `duration`, and `equipment`.',
    'Merge records with the same `user` into a single output object.',
    'Sum all durations for each user.',
    'Combine equipment values, remove duplicates, and sort the final array alphabetically.',
    'Keep users in the order of their first appearance in the input.',
    'Do not mutate the input objects or arrays.',
    '(Array): Returns the merged session data.',
  ],
  solutions: [
    {
      title: 'Map',
      javascript: mapJavascriptSolution.trim(),
      typescript: mapTypescriptSolution.trim(),
    },
    {
      title: 'Reduce',
      javascript: reduceJavascriptSolution.trim(),
      typescript: reduceTypescriptSolution.trim(),
    },
  ],
};
