type VNode =
  | string
  | number
  | {
      type: string
      props?: Record<string, unknown>
      children?: VNode[]
    };

export default function render(vnode: VNode): Node {
  if (typeof vnode === 'string' || typeof vnode === 'number') {
    return document.createTextNode(String(vnode));
  }

  const element = document.createElement(vnode.type);
  const props = vnode.props ?? {};

  for (const [name, value] of Object.entries(props)) {
    if (name === 'className') {
      element.setAttribute('class', String(value));
    } else if (name === 'style' && value && typeof value === 'object') {
      Object.assign(element.style, value);
    } else if (name.startsWith('on') && typeof value === 'function') {
      element.addEventListener(name.slice(2).toLowerCase(), value as EventListener);
    } else if (name in element) {
      (element as unknown as Record<string, unknown>)[name] = value;
    } else {
      element.setAttribute(name, String(value));
    }
  }

  for (const child of vnode.children ?? []) {
    element.appendChild(render(child));
  }

  return element;
}
