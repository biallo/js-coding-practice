# JS/TS Coding Practice

A collection of pure JavaScript and TypeScript coding practices for mastering core concepts and sharpening problem-solving skills.

## Preview

[https://biallo.github.io/js-coding-practice/](https://biallo.github.io/js-coding-practice/)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Adding Problems

Each problem lives in its own folder under `src/data/problems`. To add a new one:

1. Create a new folder such as `src/data/problems/debounce`.
2. Add an `index.ts` file for the problem metadata.
3. Add solution files.

For a problem with one solution approach, use root-level files:

```txt
src/data/problems/debounce/
  index.ts
  solution.js
  solution.ts
```

For a problem with multiple solution approaches, use a `solutions` folder:

```txt
src/data/problems/flatten/
  index.ts
  solutions/
    recursive.js
    recursive.ts
    iterative.js
    iterative.ts
```

4. Import solution files with Vite raw imports:

```ts
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';
```

For multiple approaches:

```ts
import iterativeJavascriptSolution from './solutions/iterative.js?raw';
import iterativeTypescriptSolution from './solutions/iterative.ts?raw';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';
```

5. Export a `PracticeProblem` object from the problem folder's `index.ts`.
6. Add it to the array in `src/data/problems/index.ts`.

Single-solution example:

```ts
export const debounceProblem: PracticeProblem = {
  id: 'debounce',
  title: 'Debounce',
  difficulty: 'Medium',
  description: '...',
  points: [
    '`func` (Function): The callback to debounce.',
    '`wait` (number): The number of milliseconds to wait.',
    '(Function): Returns the debounced function.',
  ],
  solutions: [
    {
      title: 'Basic',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
```

Multiple-solution example:

```ts
export const flattenProblem: PracticeProblem = {
  id: 'flatten',
  title: 'Flatten',
  difficulty: 'Medium',
  description: '...',
  points: [
    '`array` (Array): The array to flatten.',
    '(Array): Returns a new flattened array.',
  ],
  solutions: [
    {
      title: 'Recursive',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'Iterative Stack',
      javascript: iterativeJavascriptSolution.trim(),
      typescript: iterativeTypescriptSolution.trim(),
    },
  ],
};
```

Problem fields:

- `id`: Unique problem id.
- `title`: Sidebar and detail title.
- `difficulty`: `Easy`, `Medium`, or `Hard`.
- `description`: Prompt description.
- `points`: Requirements, edge cases, or interview notes.
- `solutions`: Array of solution approaches.
- `solutions[].title`: Approach name shown in the solution approach selector.
- `solutions[].javascript`: Raw-imported JavaScript solution.
- `solutions[].typescript`: Raw-imported TypeScript solution.

Solution files are intentionally ignored by ESLint and TypeScript app checking. This keeps example code flexible while the raw imports still render in the UI.

Prompt formatting:

- Wrap identifiers in backticks, for example `debounce(func, wait)`, to render inline code.
- Use `\n` for a line break inside a paragraph.
- Use `\n\n` to start a new paragraph.
