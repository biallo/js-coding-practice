import type { PracticeProblem } from '../../problemTypes';
import coreJavascriptSolution from './solutions/core.js?raw';
import coreTypescriptSolution from './solutions/core.ts?raw';
import readableJavascriptSolution from './solutions/readable.js?raw';
import readableTypescriptSolution from './solutions/readable.ts?raw';

export const classVarianceAuthorityProblem: PracticeProblem = {
  id: 'classVarianceAuthority',
  title: 'Class Variance Authority',
  difficulty: 'Medium',
  description: 'Implement a simplified `cva` utility inspired by Class Variance Authority. The utility should make it easy to generate class name strings for components that have multiple visual variants.\n\n`cva(base, config)` should return a function. Calling that returned function with variant props should combine the base classes, selected variant classes, matching compound variant classes, and any extra `class` or `className` values.\n\nThe `config` object can contain:\n`variants`: A mapping of variant names to variant values and their class names.\n`defaultVariants`: Default variant values used when a prop is not provided.\n`compoundVariants`: Extra class names that apply only when multiple variant conditions match.\n\nBoolean variant values should be treated as string keys such as `true` and `false`. Compound variant conditions may also contain an array of acceptable values.',
  examples: [
    {
      input: '`const button = cva(\'button\', {\n  variants: {\n    intent: { primary: \'primary\', secondary: \'secondary\' },\n  },\n  defaultVariants: { intent: \'primary\' },\n});`\n`button()` returns `\'button primary\'`.\n`button({ intent: \'secondary\', className: \'extra\' })`',
      output: '`\'button secondary extra\'`',
    }
  ],
  points: [
    '`base` (string | string[]): Base class names included in every result.',
    '`config.variants`: Maps variant names and variant values to class names.',
    '`config.defaultVariants`: Provides fallback variant values when props omit them.',
    '`config.compoundVariants`: Adds classes when multiple variant conditions match.',
    '`props.class` and `props.className` should be appended to the returned class string.',
    '(Function): Returns a resolver function that produces the final class name string.',
  ],
  solutions: [
    {
      title: 'Core',
      javascript: coreJavascriptSolution.trim(),
      typescript: coreTypescriptSolution.trim(),
    },
    {
      title: 'Readable',
      javascript: readableJavascriptSolution.trim(),
      typescript: readableTypescriptSolution.trim(),
    },
  ],
};
