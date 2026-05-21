function parseClassNames(classNames) {
  return classNames.trim().split(/\s+/).filter(Boolean);
}

function hasAllClasses(element, classNames) {
  return classNames.every((className) => element.classList.contains(className));
}

export default function getElementsByClassName(element, classNames) {
  const requiredClassNames = parseClassNames(classNames);
  const results = [];
  const walker = document.createTreeWalker(
    element,
    NodeFilter.SHOW_ELEMENT,
    {
      acceptNode(node) {
        return node === element
          ? NodeFilter.FILTER_SKIP
          : NodeFilter.FILTER_ACCEPT;
      },
    },
  );

  let node = walker.nextNode();

  while (node !== null) {
    const currentElement = node;

    if (hasAllClasses(currentElement, requiredClassNames)) {
      results.push(currentElement);
    }

    node = walker.nextNode();
  }

  return results;
}
