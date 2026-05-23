import type { PracticeProblem } from '../../problemTypes';
import filterJavascriptSolution from './solutions/filter.js?raw';
import filterTypescriptSolution from './solutions/filter.ts?raw';
import scanJavascriptSolution from './solutions/scan.js?raw';
import scanTypescriptSolution from './solutions/scan.ts?raw';

export const styledTextRangesProblem: PracticeProblem = {
  id: 'styledTextRanges',
  title: 'Styled Text Ranges',
  difficulty: 'Medium',
  description: 'Design tools often represent styled text as a string plus a list of ranges that describe which style applies to each part of the text.\n\nImplement `sliceStyledText(node, start, end)` for a simplified Figma-inspired representation. Each range is half-open, meaning `[start, end)`. Inputs are guaranteed valid: ranges are sorted, non-overlapping, and cover the full text.\n\nReturn a new styled text object for the sliced range. The returned `text` should be `node.text.slice(start, end)`, and every returned range offset should be relative to the new sliced text. Do not mutate `node` or its nested `ranges`.\n\nEmpty slices should return `{ text: \'\', ranges: [] }`.',
  examples: [
    {
      input: '`sliceStyledText(\n  {\n    text: \'Hello world\',\n    ranges: [\n      { start: 0, end: 6, style: \'body\' },\n      { start: 6, end: 11, style: \'bold\' },\n    ],\n  },\n  3,\n  8,\n)`',
      output: '`{\n  text: \'lo wo\',\n  ranges: [\n    { start: 0, end: 3, style: \'body\' },\n    { start: 3, end: 5, style: \'bold\' },\n  ],\n}`',
    }
  ],
  points: [
    '`node.text` (string): The full text.',
    '`node.ranges` (Array): Sorted, non-overlapping ranges that cover the full text.',
    '`start` (number): Inclusive slice start.',
    '`end` (number): Exclusive slice end.',
    'Include only ranges that overlap the requested half-open slice `[start, end)`.',
    'Clamp overlapping ranges to the slice boundaries and subtract `start` from their offsets.',
    'Return a new object and new range objects without mutating the input.',
    'Empty slices should return `{ text: \'\', ranges: [] }`.',
  ],
  solutions: [
    {
      title: 'Filter Overlaps',
      javascript: filterJavascriptSolution.trim(),
      typescript: filterTypescriptSolution.trim(),
    },
    {
      title: 'Sorted Scan',
      javascript: scanJavascriptSolution.trim(),
      typescript: scanTypescriptSolution.trim(),
    },
  ],
};
