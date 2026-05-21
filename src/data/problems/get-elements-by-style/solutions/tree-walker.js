export default function getElementsByStyle(element, property, value) {
  const results = [];
  // TreeWalker visits descendants without including the root element itself.
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT);
  let node = walker.nextNode();

  while (node !== null) {
    if (window.getComputedStyle(node).getPropertyValue(property) === value) {
      results.push(node);
    }

    node = walker.nextNode();
  }

  return results;
}
