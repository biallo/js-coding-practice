import type { PracticeProblem } from '../../problemTypes';
import memoizedJavascriptSolution from './solutions/memoized.js?raw';
import memoizedTypescriptSolution from './solutions/memoized.ts?raw';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';

export const spreadsheetProblem: PracticeProblem = {
  id: 'spreadsheet',
  title: 'Spreadsheet',
  difficulty: 'Medium',
  description:
    'Spreadsheets let each cell hold either a literal value or a formula that references other cells.\n\nImplement a small `Spreadsheet` class. Cells only hold numbers or formula strings. Formula strings start with `=` and only use `+`. Formula operands are either cell references or unsigned numeric literals. Referenced cells may themselves contain formulas, and inputs are guaranteed acyclic.\n\n`new Spreadsheet()` creates an empty spreadsheet. `setCell(cellId, input)` stores either a number or formula string for `cellId`. `getCell(cellId)` returns the evaluated numeric value for that cell. If a cell has not been set, it should behave like `0`.\n\nCell references use uppercase A1-style labels such as `A1` and `B12`. Spaces inside formulas should be ignored. You do not need subtraction, multiplication, division, cycles, ranges, or invalid-formula handling.\n\nExample:\n`const sheet = new Spreadsheet();`\n`sheet.setCell(\'A1\', 10);`\n`sheet.setCell(\'B1\', \'=A1 + 5\');`\n`sheet.getCell(\'B1\')` returns `15`.\n\nUnset cells behave like `0`: after `sheet.setCell(\'A1\', \'=B1 + 3\')`, `sheet.getCell(\'A1\')` returns `3`.\n\nReferences can point to formulas: if `A1` is `2`, `B1` is `=A1 + 3`, and `C1` is `=B1 + 4`, then `getCell(\'C1\')` returns `9`.',
  points: [
    '`new Spreadsheet()`: Creates a spreadsheet with no cells.',
    '`setCell(cellId, input)`: Stores a number or formula string for the given cell id.',
    '`getCell(cellId)`: Returns the evaluated numeric value of the cell.',
    'Unset cells should evaluate to `0`.',
    'Formula strings begin with `=` and contain operands joined by `+`.',
    'Formula operands are uppercase A1-style cell references or unsigned numeric literals.',
    'Referenced cells can themselves contain formulas.',
    'Spaces inside formulas should be ignored.',
    'Cycles, ranges, invalid formulas, and operators other than `+` are out of scope.',
  ],
  solutions: [
    {
      title: 'Recursive Evaluation',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'Per-read Memoization',
      javascript: memoizedJavascriptSolution.trim(),
      typescript: memoizedTypescriptSolution.trim(),
    },
  ],
};
