const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function getFocusable(container) {
  return [...container.querySelectorAll(focusableSelector)].filter(
    (element) => element.offsetParent !== null,
  );
}

export default function createFocusTrap(container, options = {}) {
  let active = false;
  let previouslyFocused = null;

  function onKeyDown(event) {
    if (event.key === 'Escape') {
      options.onEscape?.();
      return;
    }

    if (event.key !== 'Tab') {
      return;
    }

    const focusable = getFocusable(container);

    if (focusable.length === 0) {
      event.preventDefault();
      container.focus();
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return {
    activate() {
      if (active) {
        return;
      }

      active = true;
      previouslyFocused = document.activeElement;
      document.addEventListener('keydown', onKeyDown);

      const first = getFocusable(container)[0] ?? container;
      first.focus();
    },
    deactivate() {
      if (!active) {
        return;
      }

      active = false;
      document.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus?.();
      previouslyFocused = null;
    },
  };
}
