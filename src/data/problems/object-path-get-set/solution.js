function parsePath(path) {
  return path
    .replace(/\[(\w+)\]/g, '.$1')
    .split('.')
    .filter(Boolean);
}

function isIndex(segment) {
  return /^\d+$/.test(segment);
}

export function get(obj, path, defaultValue) {
  const segments = Array.isArray(path) ? path : parsePath(path);
  let current = obj;

  for (const segment of segments) {
    if (current == null || !(segment in Object(current))) {
      return defaultValue;
    }

    current = current[segment];
  }

  return current;
}

export function set(obj, path, value) {
  const segments = Array.isArray(path) ? path : parsePath(path);
  let current = obj;

  for (let index = 0; index < segments.length; index += 1) {
    const segment = segments[index];

    if (index === segments.length - 1) {
      current[segment] = value;
      break;
    }

    const nextSegment = segments[index + 1];

    if (current[segment] == null || typeof current[segment] !== 'object') {
      current[segment] = isIndex(nextSegment) ? [] : {};
    }

    current = current[segment];
  }

  return obj;
}
