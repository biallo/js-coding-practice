import type { PracticeProblem } from '../../problemTypes';
import javascriptSolution from './solution.js?raw';
import typescriptSolution from './solution.ts?raw';

export const focusTrapProblem: PracticeProblem = {
  id: 'focusTrap',
  title: 'Focus Trap',
  difficulty: 'Hard',
  description:
    'Implement `createFocusTrap(container, options)` for modal and popover accessibility.\n\nThe returned object should expose `activate()` and `deactivate()`. When active, focus should stay inside `container` when the user presses `Tab` or `Shift+Tab`. Pressing `Escape` should call `options.onEscape` when provided. When activated, remember the previously focused element and move focus to the first focusable element inside the container. When deactivated, remove listeners and restore previous focus.\n\nThis is a common component-library interview problem.',
  points: [
    '`container` (HTMLElement): Element that should trap focus.',
    '`activate()`: Start trapping focus and move focus inside.',
    '`deactivate()`: Stop trapping and restore previous focus.',
    'Cycle from the last focusable element to the first on `Tab`.',
    'Cycle from the first focusable element to the last on `Shift+Tab`.',
    'Call `onEscape` when Escape is pressed.',
    'Clean up event listeners when deactivated.',
  ],
  solutions: [
    {
      title: 'Keyboard trap',
      javascript: javascriptSolution.trim(),
      typescript: typescriptSolution.trim(),
    },
  ],
};
