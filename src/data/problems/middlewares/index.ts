import type { PracticeProblem } from '../../problemTypes';
import dispatchJavascriptSolution from './solutions/dispatch.js?raw';
import dispatchTypescriptSolution from './solutions/dispatch.ts?raw';
import reduceRightJavascriptSolution from './solutions/reduce-right.js?raw';
import reduceRightTypescriptSolution from './solutions/reduce-right.ts?raw';

export const middlewaresProblem: PracticeProblem = {
  id: 'middlewares',
  title: 'Middlewares',
  difficulty: 'Medium',
  description: 'Implement a `middlewares` function that accepts any number of middleware functions and composes them into one callable function.\n\nThe composed function should accept a shared `context` object and return a `Promise`. Each middleware receives two arguments: the shared `context` and a `next` function. Calling `next()` should run the next middleware in the chain. If a middleware does not call `next()`, the chain stops there.\n\nExecution should be asynchronous and ordered, similar to middleware systems in frameworks such as Koa. Middleware can run code before and after `await next()`, which creates a nested execution flow.',
  examples: [
    {
      input: '`async function fn1(ctx, next) {\n  ctx.stack.push(\'fn1-start\');\n  await next();\n  ctx.stack.push(\'fn1-end\');\n}`\n`async function fn2(ctx, next) {\n  ctx.stack.push(\'fn2-start\');\n  await next();\n  ctx.stack.push(\'fn2-end\');\n}`\nAfter `await middlewares(fn1, fn2)({ stack: [] })`, the stack should be:\n`[\'fn1-start\', \'fn2-start\', \'fn2-end\', \'fn1-end\']`.',
      output: '`[\'fn1-start\', \'fn2-start\', \'fn2-end\', \'fn1-end\']`',
    }
  ],
  points: [
    '`...fns` (Function[]): Middleware functions to compose in order.',
    'Each middleware receives `(context, next)`.',
    '`next()` should execute the next middleware in the chain.',
    'If a middleware does not call `next()`, later middleware should not run.',
    'The composed function should return a `Promise` and support sync or async middleware.',
    'Middleware should be able to run code both before and after `await next()`.',
  ],
  solutions: [
    {
      title: 'Dispatch',
      javascript: dispatchJavascriptSolution.trim(),
      typescript: dispatchTypescriptSolution.trim(),
    },
    {
      title: 'Reduce Right',
      javascript: reduceRightJavascriptSolution.trim(),
      typescript: reduceRightTypescriptSolution.trim(),
    },
  ],
};
