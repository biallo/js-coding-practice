function isText(vnode) {
  return typeof vnode === 'string' || typeof vnode === 'number';
}

function setProp(element, name, value) {
  if (name === 'className') {
    element.setAttribute('class', value);
  } else if (name.startsWith('on') && typeof value === 'function') {
    element.addEventListener(name.slice(2).toLowerCase(), value);
  } else {
    element.setAttribute(name, String(value));
  }
}

function removeProp(element, name, value) {
  if (name === 'className') {
    element.removeAttribute('class');
  } else if (name.startsWith('on') && typeof value === 'function') {
    element.removeEventListener(name.slice(2).toLowerCase(), value);
  } else {
    element.removeAttribute(name);
  }
}

function updateProps(element, oldProps = {}, newProps = {}) {
  for (const [name, value] of Object.entries(oldProps)) {
    if (!(name in newProps)) {
      removeProp(element, name, value);
    }
  }

  for (const [name, value] of Object.entries(newProps)) {
    if (oldProps[name] !== value) {
      if (name in oldProps) {
        removeProp(element, name, oldProps[name]);
      }

      setProp(element, name, value);
    }
  }
}

export function render(vnode) {
  if (isText(vnode)) {
    return document.createTextNode(String(vnode));
  }

  const element = document.createElement(vnode.type);
  updateProps(element, {}, vnode.props);

  for (const child of vnode.children ?? []) {
    element.appendChild(render(child));
  }

  return element;
}

export function patch(parent, oldVNode, newVNode, index = 0) {
  const existingNode = parent.childNodes[index];

  if (oldVNode == null) {
    const newNode = render(newVNode);
    parent.appendChild(newNode);
    return newNode;
  }

  if (newVNode == null) {
    parent.removeChild(existingNode);
    return null;
  }

  if (isText(oldVNode) || isText(newVNode)) {
    if (String(oldVNode) !== String(newVNode)) {
      const newNode = render(newVNode);
      parent.replaceChild(newNode, existingNode);
      return newNode;
    }

    return existingNode;
  }

  if (oldVNode.type !== newVNode.type) {
    const newNode = render(newVNode);
    parent.replaceChild(newNode, existingNode);
    return newNode;
  }

  updateProps(existingNode, oldVNode.props, newVNode.props);

  const oldChildren = oldVNode.children ?? [];
  const newChildren = newVNode.children ?? [];
  const commonLength = Math.min(oldChildren.length, newChildren.length);

  for (let childIndex = 0; childIndex < commonLength; childIndex += 1) {
    patch(existingNode, oldChildren[childIndex], newChildren[childIndex], childIndex);
  }

  for (let childIndex = commonLength; childIndex < newChildren.length; childIndex += 1) {
    patch(existingNode, undefined, newChildren[childIndex], childIndex);
  }

  for (let childIndex = oldChildren.length - 1; childIndex >= newChildren.length; childIndex -= 1) {
    patch(existingNode, oldChildren[childIndex], undefined, childIndex);
  }

  return existingNode;
}
