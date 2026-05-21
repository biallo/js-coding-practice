function parseClassNames(classNames: string): string[] {
  return classNames.trim().split(/\s+/).filter(Boolean);
}

function hasAllClasses(element: Element, classNames: string[]): boolean {
  return classNames.every((className) => element.classList.contains(className));
}

export default function getElementsByClassName(
  element: Element,
  classNames: string,
): Element[] {
  const requiredClassNames = parseClassNames(classNames);
  const results: Element[] = [];
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
    const currentElement = node as Element;

    if (hasAllClasses(currentElement, requiredClassNames)) {
      results.push(currentElement);
    }

    node = walker.nextNode();
  }

  return results;
}
