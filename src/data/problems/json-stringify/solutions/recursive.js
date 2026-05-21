const escapeMap = {
  '"': '\\"',
  '\\': '\\\\',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '\t': '\\t',
};

function quoteString(value) {
  return `"${value.replace(/[\u0000-\u001f"\\]/g, (char) => (
    escapeMap[char] ??
    `\\u${char.charCodeAt(0).toString(16).padStart(4, '0')}`
  ))}"`;
}

export default function jsonStringify(value) {
  if (value === null) {
    return 'null';
  }

  if (typeof value === 'string') {
    return quoteString(value);
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return String(value);
  }

  if (Array.isArray(value)) {
    return `[${value.map((item) => jsonStringify(item)).join(',')}]`;
  }

  const entries = Object.entries(value).map(([key, item]) => (
    `${quoteString(key)}:${jsonStringify(item)}`
  ));

  return `{${entries.join(',')}}`;
}
