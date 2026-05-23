import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const domEventDelegationProblem: PracticeProblem = {
  id: 'domEventDelegation',
  title: 'DOM Event Delegation',
  difficulty: 'Medium',
  description: 'Implement `delegate(root, selector, eventName, handler)` for DOM event delegation.\n\nThe function should attach one listener to `root`. When an event bubbles from a descendant matching `selector`, call `handler(event, matchedElement)` where `matchedElement` is the closest matching element between the event target and `root`.\n\nReturn a cleanup function that removes the delegated listener.',
  examples: [
    {
      input: '`const stop = delegate(list, "button.remove", "click", (event, button) => button.remove());`\nClicking any current or future matching descendant button should call the handler.\nCalling `stop()` should remove the listener.',
      output: 'The matching button is passed to `handler`; after `stop()`, clicks no longer invoke it',
    }
  ],
  points: [
    '`root` (Element): The delegation root.',
    '`selector` (string): CSS selector used to match descendants.',
    '`eventName` (string): Event type to listen for.',
    '`handler(event, matchedElement)`: Called when a matching descendant triggers the event.',
    'Use `closest` to support clicks on nested children inside a matching element.',
    'Ignore matches outside `root`.',
    'Return a cleanup function that removes the listener.',
  ],
  solutions: [
    {
      title: 'closest and contains',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
