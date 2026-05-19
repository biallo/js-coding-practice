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
2. Add `index.ts`, `solution.js`, and `solution.ts` inside that folder.
3. Import those solutions with Vite raw imports:

```ts
import javascriptSolution from './solution.js?raw'
import typescriptSolution from './solution.ts?raw'
```

4. Export a `PracticeProblem` object from the problem folder's `index.ts`.
5. Add it to the array in `src/data/problems/index.ts`.

Problem fields:

- `id`: Unique problem id.
- `title`: Sidebar and detail title.
- `category`: Problem category.
- `difficulty`: `Easy`, `Medium`, or `Hard`.
- `description`: Prompt description.
- `points`: Requirements, edge cases, or interview notes.
- `solutions.javascript`: Raw-imported JavaScript solution.
- `solutions.typescript`: Raw-imported TypeScript solution.

Prompt formatting:

- Wrap identifiers in backticks, for example `debounce(func, wait)`, to render inline code.
- Use `\n` for a line break inside a paragraph.
- Use `\n\n` to start a new paragraph.
