import type { PracticeProblem } from '../../problemTypes';
import recursiveJavascriptSolution from './solutions/recursive.js?raw';
import recursiveTypescriptSolution from './solutions/recursive.ts?raw';
import stackJavascriptSolution from './solutions/stack.js?raw';
import stackTypescriptSolution from './solutions/stack.ts?raw';

export const htmlSerializerProblem: PracticeProblem = {
  id: 'htmlSerializer',
  title: 'HTML Serializer',
  difficulty: 'Medium',
  description:
    'Given an object that resembles a DOM tree, implement `serializeHTML(tree)`, which serializes the tree into a formatted HTML string.\n\nEach element node has a `tag` and a `children` array. Children can be either nested element nodes or text strings. The output should contain one tag or text node per line, and each nesting level should be indented by one tab character (`\\t`).\n\nExample:\n`serializeHTML({ tag: \'body\', children: [{ tag: \'div\', children: [{ tag: \'span\', children: [\'foo\', \'bar\'] }] }, { tag: \'div\', children: [\'baz\'] }] })` returns a formatted string equivalent to:\n`<body>\\n\\t<div>\\n\\t\\t<span>\\n\\t\\t\\tfoo\\n\\t\\t\\tbar\\n\\t\\t</span>\\n\\t</div>\\n\\t<div>\\n\\t\\tbaz\\n\\t</div>\\n</body>`.',
  points: [
    '`tree` (Object): A DOM-like node with `tag` and `children`.',
    'Element children can be strings or nested element nodes.',
    'Emit opening and closing tags for each element node.',
    'Emit text nodes on their own lines.',
    'Indent with one tab character per nesting level.',
    'Return a single string joined with newline characters.',
    '(string): Returns the serialized HTML.',
  ],
  solutions: [
    {
      title: 'Recursive Lines',
      javascript: recursiveJavascriptSolution.trim(),
      typescript: recursiveTypescriptSolution.trim(),
    },
    {
      title: 'Stack Traversal',
      javascript: stackJavascriptSolution.trim(),
      typescript: stackTypescriptSolution.trim(),
    },
  ],
};
