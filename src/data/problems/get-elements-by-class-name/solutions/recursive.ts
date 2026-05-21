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

  function traverse(node: Element): void {
    for (const child of Array.from(node.children)) {
      if (hasAllClasses(child, requiredClassNames)) {
        results.push(child);
      }

      traverse(child);
    }
  }

  traverse(element);
  return results;
}
