export default function delegate(root, selector, eventName, handler) {
  function listener(event) {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const matchedElement = target.closest(selector);

    if (!matchedElement || !root.contains(matchedElement)) {
      return;
    }

    handler(event, matchedElement);
  }

  root.addEventListener(eventName, listener);

  return function cleanup() {
    root.removeEventListener(eventName, listener);
  };
}
