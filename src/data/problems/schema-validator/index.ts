import type { PracticeProblem } from '../../problemTypes';
import classJavascriptSolution from './solutions/class.js?raw';
import classTypescriptSolution from './solutions/class.ts?raw';
import factoryJavascriptSolution from './solutions/factory.js?raw';
import factoryTypescriptSolution from './solutions/factory.ts?raw';

export const schemaValidatorProblem: PracticeProblem = {
  id: 'schemaValidator',
  title: 'Schema Validator',
  difficulty: 'Medium',
  description: 'Libraries like Zod and Joi let application code describe data shapes once and reuse them to validate values.\n\nImplement a small validator builder exposed through `v`. Each schema should expose `safeParse(value)`.\n\nSupport `v.string()`, `v.number()`, `v.boolean()`, and `v.object(shape)`. `v.object(shape)` only needs to support flat objects, and all fields in `shape` are required. Unknown object keys are allowed and should be preserved in successful `data`.\n\nPrimitive schemas should return `Expected string`, `Expected number`, or `Expected boolean` for non-matching values. Object schemas should return `Expected object` for non-object values such as `null` or arrays. Missing or `undefined` fields should return `Required`.\n\nValidation failures should return all top-level field errors in schema declaration order. `safeParse()` must not mutate the input value.',
  examples: [
    {
      input: '`const User = v.object({\n  name: v.string(),\n  age: v.number(),\n  admin: v.boolean(),\n});`\n`User.safeParse({ name: \'Alice\', age: 30, admin: false, team: \'Core\' })`',
      output: '`{\n  success: true,\n  data: { name: \'Alice\', age: 30, admin: false, team: \'Core\' },\n}`',
    },
    {
      input: '`User.safeParse({ name: 123, admin: \'yes\' })`',
      output: '`{\n  success: false,\n  errors: [\n    { path: [\'name\'], message: \'Expected string\' },\n    { path: [\'age\'], message: \'Required\' },\n    { path: [\'admin\'], message: \'Expected boolean\' },\n  ],\n}`',
    }
  ],
  points: [
    '`v.string()`: Creates a schema accepting string values.',
    '`v.number()`: Creates a schema accepting number values.',
    '`v.boolean()`: Creates a schema accepting boolean values.',
    '`v.object(shape)`: Creates a schema validating a flat object shape.',
    '`schema.safeParse(value)`: Returns `{ success: true, data }` or `{ success: false, errors }`.',
    'All object fields in `shape` are required.',
    'Missing or `undefined` fields should produce `Required`.',
    'Unknown object keys should be allowed and preserved in successful data.',
    'Return all top-level field errors in schema declaration order.',
    'Arrays, nested objects, optional fields, coercion, transforms, async validation, and custom error messages are out of scope.',
  ],
  solutions: [
    {
      title: 'Factory Schemas',
      javascript: factoryJavascriptSolution.trim(),
      typescript: factoryTypescriptSolution.trim(),
    },
    {
      title: 'Schema Classes',
      javascript: classJavascriptSolution.trim(),
      typescript: classTypescriptSolution.trim(),
    },
  ],
};
