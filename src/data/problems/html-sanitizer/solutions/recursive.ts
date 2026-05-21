const dangerousTags = new Set(['script', 'iframe', 'object', 'embed']);

function sanitizeAttributes(element: Element): void {
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

function sanitizeNode(node: Node): void {
  for (const child of Array.from(node.childNodes)) {
    if (child.nodeType === Node.COMMENT_NODE) {
      child.remove();
      continue;
    }

    if (child.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    const element = child as Element;

    if (dangerousTags.has(element.tagName.toLowerCase())) {
      element.remove();
      continue;
    }

    sanitizeAttributes(element);
    sanitizeNode(element);
  }
}

export default function sanitizeHTML(input: string): string {
  const template = document.createElement('template');
  template.innerHTML = input;
  sanitizeNode(template.content);
  return template.innerHTML;
}
