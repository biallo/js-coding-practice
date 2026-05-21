function parseClassNames(classNames) {
  return classNames.trim().split(/\s+/).filter(Boolean);
}

function hasAllClasses(element, classNames) {
  return classNames.every((className) => element.classList.contains(className));
}

export default function getElementsByClassName(element, classNames) {
  const requiredClassNames = parseClassNames(classNames);
  const results = [];

  function traverse(node) {
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
