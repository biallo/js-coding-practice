export default function getElementsByStyle(
  element: Element,
  property: string,
  value: string
): Element[] {
  const results: Element[] = [];
  // TreeWalker visits descendants without including the root element itself.
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT);
  let node = walker.nextNode() as Element | null;

  while (node !== null) {
    if (window.getComputedStyle(node).getPropertyValue(property) === value) {
      results.push(node);
    }

    node = walker.nextNode() as Element | null;
  }

  return results;
}
