import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const domDiffPatchProblem: PracticeProblem = {
  id: 'domDiffPatch',
  title: 'DOM Diff Patch',
  difficulty: 'Hard',
  description:
    'Implement a small virtual DOM diff and patch function.\n\nA vnode can be a string, number, or object shaped like `{ type, props, children }`. Implement `render(vnode)` to create a DOM node and `patch(parent, oldVNode, newVNode, index = 0)` to update the DOM under `parent` with minimal basic operations.\n\nIf a node is added, append or insert it. If removed, remove it. If text changes, update the text node. If element type changes, replace the node. If element type is the same, update props and recursively patch children.\n\nThis is a simplified framework interview problem, not a production reconciler.',
  examples: [
    {
      input: '`patch(parent, "hello", "world")` when `parent.childNodes[0]` is a text node containing `"hello"`',
      output: 'The existing text node is updated to `"world"`',
    },
    {
      input: '`patch(\n  parent,\n  { type: "button", props: { disabled: true }, children: ["Save"] },\n  { type: "button", props: { className: "primary" }, children: ["Save"] },\n)`',
      output: 'The button keeps its element node, removes `disabled`, and adds class `"primary"`',
    },
  ],
  points: [
    'Render text vnodes to text nodes.',
    'Render object vnodes to elements with props and children.',
    'Replace nodes when vnode type changes.',
    'Update changed props and remove stale props.',
    'Recursively patch children by index.',
    'Handle added and removed children.',
    'Return the updated DOM node.',
  ],
  solutions: [
    {
      title: 'Recursive patch',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
