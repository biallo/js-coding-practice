type JsonPrimitive = string | number | boolean | null
type SpecialNumber = 'NaN' | 'Infinity' | '-Infinity'

type EncodedValue =
  | { type: 'json'; value: JsonPrimitive }
  | { type: 'undefined' }
  | { type: 'number'; value: SpecialNumber }
  | { type: 'bigint'; value: string }
  | { type: 'date'; value: string }
  | { type: 'regexp'; source: string; flags: string }
  | { type: 'array'; value: EncodedValue[] }
  | { type: 'object'; value: [string, EncodedValue][] }

function encode(value: unknown): EncodedValue {
  if (value === null) {
    return { type: 'json', value };
  }

  const valueType = typeof value;

  if (
    valueType === 'string' ||
    valueType === 'boolean' ||
    valueType === 'number'
  ) {
    if (Number.isNaN(value)) {
      return { type: 'number', value: 'NaN' };
    }

    if (value === Infinity) {
      return { type: 'number', value: 'Infinity' };
    }

    if (value === -Infinity) {
      return { type: 'number', value: '-Infinity' };
    }

    return { type: 'json', value };
  }

  if (valueType === 'undefined') {
    return { type: 'undefined' };
  }

  if (valueType === 'bigint') {
    return { type: 'bigint', value: value.toString() };
  }

  if (value instanceof Date) {
    return { type: 'date', value: value.toISOString() };
  }

  if (value instanceof RegExp) {
    return { type: 'regexp', source: value.source, flags: value.flags };
  }

  if (Array.isArray(value)) {
    return { type: 'array', value: value.map(encode) };
  }

  return {
    type: 'object',
    value: Object.entries(value as Record<string, unknown>).map(
      ([key, child]) => [key, encode(child)],
    ),
  };
}

function decode(node: EncodedValue): unknown {
  switch (node.type) {
    case 'json':
      return node.value;
    case 'undefined':
      return undefined;
    case 'number':
      if (node.value === 'NaN') {
        return NaN;
      }
      return node.value === 'Infinity' ? Infinity : -Infinity;
    case 'bigint':
      return BigInt(node.value);
    case 'date':
      return new Date(node.value);
    case 'regexp':
      return new RegExp(node.source, node.flags);
    case 'array':
      return node.value.map(decode);
    case 'object': {
      const result: Record<string, unknown> = {};

      for (const [key, child] of node.value) {
        result[key] = decode(child);
      }

      return result;
    }
  }
}

export function serialize(value: unknown): string {
  return JSON.stringify(encode(value));
}

export function deserialize(serialized: string): unknown {
  return decode(JSON.parse(serialized) as EncodedValue);
}
