import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const virtualDomRenderProblem: PracticeProblem = {
  id: 'virtualDomRender',
  title: 'Virtual DOM Render',
  difficulty: 'Medium',
  description: 'Implement `render(vnode)` to convert a simple virtual DOM node into a real DOM node.\n\nA vnode can be a string, a number, or an object shaped like `{ type, props, children }`. `type` is the tag name. `props` is an object of attributes, DOM properties, event handlers, and optional `style`. `children` is an array of vnodes.\n\nEvent handler props start with `on`, such as `onClick`. `className` should map to the DOM `class` attribute. `style` should be an object of CSS property names and values.',
  examples: [
    {
      input: '`render("hello")`',
      output: 'a text node',
    },
    {
      input: '`render({ type: "button", props: { className: "primary", onClick: fn }, children: ["Save"] })`',
      output: 'a button element with text and click handler',
    }
  ],
  points: [
    'Strings and numbers should render to text nodes.',
    'Object vnodes should render to DOM elements.',
    'Append rendered children in order.',
    'Map `className` to the `class` attribute.',
    'Attach event handlers for props like `onClick`.',
    'Apply object `style` values to the element style.',
    'Set other props as DOM properties when possible, otherwise as attributes.',
  ],
  solutions: [
    {
      title: 'Recursive DOM creation',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
