type JsonValue =
  | null
  | boolean
  | number
  | string
  | JsonValue[]
  | { [key: string]: JsonValue }

function escapeString(value: string): string {
  return value.replace(/[\u0000-\u001f"\\]/g, (char) => {
    if (char === '"') return '\\"';
    if (char === '\\') return '\\\\';
    if (char === '\b') return '\\b';
    if (char === '\f') return '\\f';
    if (char === '\n') return '\\n';
    if (char === '\r') return '\\r';
    if (char === '\t') return '\\t';

    return `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`;
  });
}

function serializeString(value: string): string {
  return `"${escapeString(value)}"`;
}

export default function jsonStringify(value: JsonValue): string {
  switch (typeof value) {
    case 'string':
      return serializeString(value);
    case 'number':
    case 'boolean':
      return `${value}`;
    case 'object':
      if (value === null) {
        return 'null';
      }

      if (Array.isArray(value)) {
        const items = value.map((item) => jsonStringify(item));
        return `[${items.join(',')}]`;
      }

      return `{${Object.keys(value)
        .map((key) => `${serializeString(key)}:${jsonStringify(value[key])}`)
        .join(',')}}`;
  }
}
