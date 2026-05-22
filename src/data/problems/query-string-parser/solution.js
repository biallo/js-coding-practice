export function parseQuery(query) {
  const result = {};
  const normalized = query.startsWith('?') ? query.slice(1) : query;

  if (!normalized) {
    return result;
  }

  for (const part of normalized.split('&')) {
    if (!part) {
      continue;
    }

    const [rawKey, rawValue = ''] = part.split('=');
    const key = decodeURIComponent(rawKey.replace(/\+/g, ' '));
    const value = decodeURIComponent(rawValue.replace(/\+/g, ' '));

    if (Object.prototype.hasOwnProperty.call(result, key)) {
      result[key] = Array.isArray(result[key])
        ? [...result[key], value]
        : [result[key], value];
    } else {
      result[key] = value;
    }
  }

  return result;
}

export function stringifyQuery(params) {
  const parts = [];

  for (const [key, value] of Object.entries(params)) {
    if (value == null) {
      continue;
    }

    const values = Array.isArray(value) ? value : [value];

    for (const item of values) {
      if (item == null) {
        continue;
      }

      parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(item))}`);
    }
  }

  return parts.join('&');
}
