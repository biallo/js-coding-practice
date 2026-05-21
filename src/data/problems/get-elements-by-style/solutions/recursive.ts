export default function getElementsByStyle(
  element: Element,
  property: string,
  value: string
): Element[] {
  const results: Element[] = [];

  function searchDescendants(node: Element) {
    for (const child of node.children) {
      // Match the rendered/computed style rather than only inline styles.
      if (window.getComputedStyle(child).getPropertyValue(property) === value) {
        results.push(child);
      }

      searchDescendants(child);
    }
  }

  searchDescendants(element);
  return results;
}
