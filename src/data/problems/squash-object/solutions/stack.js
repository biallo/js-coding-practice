function isObjectLike(value) {
  return typeof value === 'object' && value !== null;
}

function joinPath(prefix, key) {
  if (prefix === '') {
    return key;
  }

  if (key === '') {
    return prefix;
  }

  return `${prefix}.${key}`;
}

export default function squashObject(object) {
  const result = {};
  const stack = Object.entries(object)
    .reverse()
    .map(([path, value]) => ({
      path,
      value,
    }));

  while (stack.length > 0) {
    const { path, value } = stack.pop();

    if (!isObjectLike(value)) {
      result[path] = value;
      continue;
    }

    const entries = Object.entries(value);

    for (let i = entries.length - 1; i >= 0; i -= 1) {
      const [key, childValue] = entries[i];
      stack.push({
        path: joinPath(path, key),
        value: childValue,
      });
    }
  }

  return result;
}
