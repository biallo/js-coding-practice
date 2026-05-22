type Path = string | string[];
type MutableRecord = Record<string, unknown>;

function parsePath(path: string): string[] {
  return path
    .replace(/\[(\w+)\]/g, '.$1')
    .split('.')
    .filter(Boolean);
}

function isIndex(segment: string): boolean {
  return /^\d+$/.test(segment);
}

export function get<T = unknown>(
  obj: unknown,
  path: Path,
  defaultValue?: T,
): unknown | T {
  const segments = Array.isArray(path) ? path : parsePath(path);
  let current = obj;

  for (const segment of segments) {
    if (current == null || !(segment in Object(current))) {
      return defaultValue as T;
    }

    current = (current as MutableRecord)[segment];
  }

  return current;
}

export function set<T extends MutableRecord>(obj: T, path: Path, value: unknown): T {
  const segments = Array.isArray(path) ? path : parsePath(path);
  let current: MutableRecord = obj;

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

    current = current[segment] as MutableRecord;
  }

  return obj;
}
