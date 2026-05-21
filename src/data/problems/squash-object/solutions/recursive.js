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

  function flatten(value, path) {
    if (!isObjectLike(value)) {
      result[path] = value;
      return;
    }

    for (const [key, childValue] of Object.entries(value)) {
      flatten(childValue, joinPath(path, key));
    }
  }

  for (const [key, value] of Object.entries(object)) {
    flatten(value, key);
  }

  return result;
}
