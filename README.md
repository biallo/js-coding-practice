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

Each problem lives in its own file under `src/data/problems`. To add a new one:

1. Create a new file such as `src/data/problems/debounce.ts`.
2. Export a `PracticeProblem` object from that file.
3. Add it to the array in `src/data/problems/index.ts`.

Problem fields:

- `id`: Unique problem id.
- `title`: Sidebar and detail title.
- `category`: Problem category.
- `difficulty`: `Easy`, `Medium`, or `Hard`.
- `description`: Prompt description.
- `points`: Requirements, edge cases, or interview notes.
- `solutions.javascript`: JavaScript solution.
- `solutions.typescript`: TypeScript solution.

Prompt formatting:

- Wrap identifiers in backticks, for example `debounce(func, wait)`, to render inline code.
- Use `\n` for a line break inside a paragraph.
- Use `\n\n` to start a new paragraph.
