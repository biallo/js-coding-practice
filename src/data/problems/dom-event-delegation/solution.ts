type DelegatedHandler = (event: Event, matchedElement: Element) => void;

export default function delegate(
  root: Element,
  selector: string,
  eventName: string,
  handler: DelegatedHandler,
): () => void {
  function listener(event: Event) {
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
