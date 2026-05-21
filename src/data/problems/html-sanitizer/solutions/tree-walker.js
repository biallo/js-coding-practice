const dangerousTags = new Set(['script', 'iframe', 'object', 'embed']);

function sanitizeAttributes(element) {
  for (const attribute of Array.from(element.attributes)) {
    const name = attribute.name.toLowerCase();
    const value = attribute.value.trim().toLowerCase();

    if (
      name.startsWith('on') ||
      ((name === 'href' || name === 'src') && value.startsWith('javascript:'))
    ) {
      element.removeAttribute(attribute.name);
    }
  }
}

export default function sanitizeHTML(input) {
  const template = document.createElement('template');
  template.innerHTML = input;
  const nodesToRemove = [];
  const walker = document.createTreeWalker(
    template.content,
    NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT,
  );

  let node = walker.nextNode();

  while (node !== null) {
    if (node.nodeType === Node.COMMENT_NODE) {
      nodesToRemove.push(node);
    } else {
      const element = node;

      if (dangerousTags.has(element.tagName.toLowerCase())) {
        nodesToRemove.push(element);
      } else {
        sanitizeAttributes(element);
      }
    }

    node = walker.nextNode();
  }

  for (const nodeToRemove of nodesToRemove) {
    nodeToRemove.remove();
  }

  return template.innerHTML;
}
