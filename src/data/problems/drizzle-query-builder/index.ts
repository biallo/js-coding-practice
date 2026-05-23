import type { PracticeProblem } from '../../problemTypes';
import expressionJavascriptSolution from './solutions/expression.js?raw';
import expressionTypescriptSolution from './solutions/expression.ts?raw';
import predicateJavascriptSolution from './solutions/predicate.js?raw';
import predicateTypescriptSolution from './solutions/predicate.ts?raw';

export const drizzleQueryBuilderProblem: PracticeProblem = {
  id: 'drizzleQueryBuilder',
  title: 'Drizzle Query Builder',
  difficulty: 'Hard',
  description: 'Drizzle ORM exposes a SQL-like query builder that starts from patterns such as `db.select().from(table)` and composes helpers like `eq()`, `and()`, `or()`, `asc()`, and `desc()`.\n\nImplement a simplified in-memory version of that API. The `table()` helper is only a database-agnostic stand-in for schema helpers and does not need to match Drizzle exactly.\n\nImplement `integer(name)`, `text(name)`, `table(name, columns)`, `drizzle(data)`, `eq(left, right)`, `and(...conditions)`, `or(...conditions)`, `asc(column)`, and `desc(column)`.\n\n`drizzle(data)` should return a `db` object with `select()`. Each `db.select()` call should create a new mutable query builder. The builder should support chainable `.from(table)`, `.where(condition)`, `.orderBy(...orderings)`, `.limit(count)`, `.offset(count)`, and `.all()` methods. These methods should mutate the builder and return it for further chaining.\n\n`db.select().from(table).all()` should return shallow-cloned rows in insertion order by default. Clone the initial input rows when creating the database so later external mutation does not change stored data. `.all()` should also return fresh result objects so callers cannot directly mutate stored rows.',
  examples: [
    {
      input: '`const users = table(\'users\', {\n  id: integer(\'id\'),\n  name: text(\'name\'),\n  age: integer(\'age\'),\n  role: text(\'role\'),\n});`\n`const db = drizzle({\n  users: [\n    { id: 1, name: \'Ada\', age: 31, role: \'admin\' },\n    { id: 2, name: \'Grace\', age: 28, role: \'editor\' },\n    { id: 3, name: \'Linus\', age: 35, role: \'admin\' },\n  ],\n});`\n`db\n  .select()\n  .from(users)\n  .where(and(eq(users.role, \'admin\'), or(eq(users.age, 31), eq(users.age, 35))))\n  .orderBy(desc(users.age))\n  .limit(1)\n  .all()`',
      output: '`[{ id: 3, name: \'Linus\', age: 35, role: \'admin\' }]`',
    }
  ],
  points: [
    '`integer(name)` and `text(name)`: Return simple column definitions for `table()`.',
    '`table(name, columns)`: Creates a table object whose properties are column objects.',
    '`drizzle(data)`: Creates an in-memory database from table-name keys and row arrays.',
    '`db.select()`: Creates a fresh mutable query builder.',
    'The query builder supports `.from()`, `.where()`, `.orderBy()`, `.limit()`, `.offset()`, and `.all()`.',
    '`eq(left, right)`: Checks strict equality where `left` is a column and `right` is a literal.',
    '`and(...conditions)` and `or(...conditions)`: Combine conditions with boolean semantics.',
    '`asc(column)` and `desc(column)`: Create sort instructions for `.orderBy()`.',
    'Sorting happens before `offset()` and `limit()`.',
    'Initial input rows and `.all()` result rows should be shallow-cloned.',
    'Inserts, updates, deletes, grouped queries, aggregates, aliases, joins, and SQL string generation are out of scope.',
  ],
  solutions: [
    {
      title: 'Expression Objects',
      javascript: expressionJavascriptSolution.trim(),
      typescript: expressionTypescriptSolution.trim(),
    },
    {
      title: 'Predicate Functions',
      javascript: predicateJavascriptSolution.trim(),
      typescript: predicateTypescriptSolution.trim(),
    },
  ],
};
