type SquashValue =
  | null
  | undefined
  | boolean
  | number
  | string
  | SquashValue[]
  | { [key: string]: SquashValue }

function isObjectLike(value: SquashValue): value is SquashValue[] | { [key: string]: SquashValue } {
  return typeof value === 'object' && value !== null;
}

function joinPath(prefix: string, key: string): string {
  if (prefix === '') {
    return key;
  }

  if (key === '') {
    return prefix;
  }

  return `${prefix}.${key}`;
}

export default function squashObject(object: { [key: string]: SquashValue }): Record<string, SquashValue> {
  const result: Record<string, SquashValue> = {};

  function flatten(value: SquashValue, path: string): void {
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
