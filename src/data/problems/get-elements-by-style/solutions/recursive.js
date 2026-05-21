export default function getElementsByStyle(element, property, value) {
  const results = [];

  function searchDescendants(node) {
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
