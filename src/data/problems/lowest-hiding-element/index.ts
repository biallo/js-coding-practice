import type { PracticeProblem } from '../../problemTypes';
import ancestorsJavascriptSolution from './solutions/ancestors.js?raw';
import ancestorsTypescriptSolution from './solutions/ancestors.ts?raw';
import depthJavascriptSolution from './solutions/depth.js?raw';
import depthTypescriptSolution from './solutions/depth.ts?raw';

export const lowestHidingElementProblem: PracticeProblem = {
  id: 'lowestHidingElement',
  title: 'Lowest Hiding Element',
  difficulty: 'Medium',
  description:
    'Sometimes UI behavior is controlled by hiding a container instead of hiding each descendant individually. If several elements need to disappear together, it is useful to know the deepest element in the DOM tree that contains all of them.\n\nImplement `lowestHidingElement(elements)`, which takes a non-empty array of DOM elements and returns the deepest element that would hide all of them if that element were hidden.\n\nAn element counts as hiding itself and all of its descendants. If one input element contains all the others, return that element. Do not mutate the DOM. You do not need to handle Shadow DOM, iframes, detached trees, or existing CSS visibility state.\n\nExamples:\nIf `saveButton` and `cancelButton` are both children of the same `section`, `lowestHidingElement([saveButton, cancelButton])` should return that `section`.\nIf `list` contains `firstLink`, `lowestHidingElement([list, firstLink])` should return `list`.',
  points: [
    '`elements` (Element[]): A non-empty array of elements from the same document tree.',
    'Return the deepest element that contains every input element.',
    'An element should count as containing itself.',
    'If one input element contains all the others, return that input element.',
    'Do not mutate the DOM.',
    '(Element): Returns the lowest shared containing element.',
  ],
  solutions: [
    {
      title: 'Ancestor Sets',
      javascript: ancestorsJavascriptSolution.trim(),
      typescript: ancestorsTypescriptSolution.trim(),
    },
    {
      title: 'Depth Alignment',
      javascript: depthJavascriptSolution.trim(),
      typescript: depthTypescriptSolution.trim(),
    },
  ],
};
