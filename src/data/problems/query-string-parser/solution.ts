type QueryValue = string | number | boolean | null | undefined;
type ParsedQuery = Record<string, string | string[]>;
type QueryParams = Record<string, QueryValue | QueryValue[]>;

export function parseQuery(query: string): ParsedQuery {
  const result: ParsedQuery = {};
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
        : [result[key] as string, value];
    } else {
      result[key] = value;
    }
  }

  return result;
}

export function stringifyQuery(params: QueryParams): string {
  const parts: string[] = [];

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
