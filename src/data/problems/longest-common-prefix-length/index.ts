import type { PracticeProblem } from '../../problemTypes';
import prefixSetJavascriptSolution from './solutions/prefix-set.js?raw';
import prefixSetTypescriptSolution from './solutions/prefix-set.ts?raw';
import trieJavascriptSolution from './solutions/trie.js?raw';
import trieTypescriptSolution from './solutions/trie.ts?raw';

export const longestCommonPrefixLengthProblem: PracticeProblem = {
  id: 'longestCommonPrefixLength',
  title: 'Find the Length of the Longest Common Prefix',
  difficulty: 'Medium',
  description:
    'Given two arrays of positive integers `arr1` and `arr2`, find the length of the longest common prefix between any pair `(x, y)` where `x` comes from `arr1` and `y` comes from `arr2`.\n\nA prefix of a number is formed by one or more digits starting from the leftmost digit. For example, `123` is a prefix of `12345`, but `234` is not.\n\nReturn `0` when no pair has a common prefix. Common prefixes between elements of the same array do not count.\n\nExamples:\n`longestCommonPrefix([1, 10, 100], [1000])` returns `3` because the pair `(100, 1000)` shares the prefix `100`.\n`longestCommonPrefix([1, 2, 3], [4, 4, 4])` returns `0` because no pair across the two arrays shares a prefix.\n\nConstraints: `1 <= arr1.length, arr2.length <= 5 * 10^4` and `1 <= arr1[i], arr2[i] <= 10^8`.',
  points: [
    '`arr1` (number[]): The first array of positive integers.',
    '`arr2` (number[]): The second array of positive integers.',
    'Consider only pairs where one number comes from `arr1` and the other comes from `arr2`.',
    'A valid prefix must begin at the leftmost digit and contain at least one digit.',
    'Return the maximum common prefix length across all cross-array pairs.',
    'Return `0` if no common prefix exists.',
    '(number): Returns the longest common prefix length.',
  ],
  solutions: [
    {
      title: 'Prefix Set',
      javascript: prefixSetJavascriptSolution.trim(),
      typescript: prefixSetTypescriptSolution.trim(),
    },
    {
      title: 'Trie',
      javascript: trieJavascriptSolution.trim(),
      typescript: trieTypescriptSolution.trim(),
    },
  ],
};
