type SquashValue =
  | null
  | undefined
  | boolean
  | number
  | string
  | SquashValue[]
  | { [key: string]: SquashValue }

type StackItem = {
  path: string
  value: SquashValue
}

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
  const stack: StackItem[] = Object.entries(object)
    .reverse()
    .map(([path, value]) => ({
      path,
      value,
    }));

  while (stack.length > 0) {
    const { path, value } = stack.pop() as StackItem;

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
