import type { PracticeProblem } from '../../problemTypes';
import delegateClassJavascriptSolution from './solutions/delegate-class.js?raw';
import delegateClassTypescriptSolution from './solutions/delegate-class.ts?raw';
import factoryJavascriptSolution from './solutions/factory.js?raw';
import factoryTypescriptSolution from './solutions/factory.ts?raw';

export const miniOrmProblem: PracticeProblem = {
  id: 'miniOrm',
  title: 'Mini Object-relational Mapper',
  difficulty: 'Medium',
  description: 'Many JavaScript apps use Object-relational Mappers such as Prisma so application code can read and write data through model delegates like `db.user.findMany()` and `db.article.create()`.\n\nImplement a `MiniORM` class that exposes one delegate per model name from the input data. Model names are arbitrary; if the input contains `user`, `post`, or `article`, the instance should expose `db.user`, `db.post`, or `db.article` respectively. Do not hardcode model names.\n\nEach delegate should support `findMany([args])`, `create({ data })`, `update({ where, data })`, and `delete({ where })`. `where` filters are top-level exact-match conditions where every provided field must be strictly equal to the stored value.\n\nClone the initial records when constructing the ORM. `findMany()` should return a new array with shallow-cloned records so callers cannot directly mutate the stored data. `create()` should store a shallow copy of `data` instead of the original object reference.',
  examples: [
    {
      input: '`const db = new MiniORM({\n  article: [\n    { id: 1, title: \'Intro to ORMs\', published: true },\n    { id: 2, title: \'Query Builders\', published: false },\n  ],\n});`\n`db.article.findMany({ where: { published: true } })` returns `[{ id: 1, title: \'Intro to ORMs\', published: true }]`.\n`db.article.create({\n  data: { id: 3, title: \'Includes and Selects\', published: true },\n})` returns `{ id: 3, title: \'Includes and Selects\', published: true }`.\n`db.article.update({\n  where: { id: 2 },\n  data: { published: true },\n})` returns `{ id: 2, title: \'Query Builders\', published: true }`.\n`db.article.delete({ where: { id: 1 } })`',
      output: '`{ id: 1, title: \'Intro to ORMs\', published: true }`',
    }
  ],
  points: [
    '`new MiniORM(data)`: Creates delegates for every model key in the input object.',
    'Model names are arbitrary and should not be hardcoded.',
    '`model.findMany([args])`: Returns matching records in insertion order.',
    '`args.where`: Optional top-level exact-match conditions using strict equality.',
    '`model.create({ data })`: Appends a shallow copy of `data` and returns the created record.',
    '`model.update({ where, data })`: Finds the one matching record, shallow-merges `data`, stores it, and returns the updated record.',
    '`model.delete({ where })`: Finds the one matching record, removes it, and returns the deleted record.',
    'Initial records and `findMany()` results should be shallow-cloned.',
  ],
  solutions: [
    {
      title: 'Factory Delegate',
      javascript: factoryJavascriptSolution.trim(),
      typescript: factoryTypescriptSolution.trim(),
    },
    {
      title: 'Delegate Class',
      javascript: delegateClassJavascriptSolution.trim(),
      typescript: delegateClassTypescriptSolution.trim(),
    },
  ],
};
