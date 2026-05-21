import type { PracticeProblem } from '../../problemTypes';
import regexJavascriptSolution from './solutions/regex.js?raw';
import regexTypescriptSolution from './solutions/regex.ts?raw';
import scannerJavascriptSolution from './solutions/scanner.js?raw';
import scannerTypescriptSolution from './solutions/scanner.ts?raw';

export const templateEngineProblem: PracticeProblem = {
  id: 'templateEngine',
  title: 'Template Engine',
  difficulty: 'Medium',
  description:
    'Implement a simple `templateEngine` function that interpolates values from a data object into a template string.\n\nThe template can contain placeholders wrapped in double curly braces, such as `{{ name }}`. Each placeholder should be replaced with the corresponding value from the provided data object. Whitespace inside the braces should be ignored.\n\nThe engine should also support nested paths using dot notation, such as `{{ user.name }}`. Missing values, `null`, and `undefined` should render as an empty string. Other values should be converted to strings. Do not evaluate arbitrary JavaScript code inside placeholders.\n\nExamples:\n`templateEngine(\'Hello, {{ name }}!\', { name: \'Alice\' })` returns `\'Hello, Alice!\'`.\n`templateEngine(\'{{ user.name }} is {{ user.age }}\', { user: { name: \'Sam\', age: 32 } })` returns `\'Sam is 32\'`.\n`templateEngine(\'Hi {{ missing }}\', {})` returns `\'Hi \'`.',
  points: [
    '`template` (string): A string containing zero or more `{{ path }}` placeholders.',
    '`data` (Object): The data source used to resolve placeholder values.',
    'Whitespace inside placeholder braces should be ignored.',
    'Nested object values should be resolved with dot notation, for example `user.name`.',
    'Missing, `null`, and `undefined` values should render as an empty string.',
    '(string): Returns the rendered template string.',
  ],
  solutions: [
    {
      title: 'Regex Replace',
      javascript: regexJavascriptSolution.trim(),
      typescript: regexTypescriptSolution.trim(),
    },
    {
      title: 'Scanner',
      javascript: scannerJavascriptSolution.trim(),
      typescript: scannerTypescriptSolution.trim(),
    },
  ],
};
