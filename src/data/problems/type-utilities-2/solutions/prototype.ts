export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

export function isFunction(value: unknown): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}

export function isObject(value: unknown): value is object {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export function isPlainObject(value: unknown): value is Record<PropertyKey, unknown> {
  if (!isObject(value) || isFunction(value) || isArray(value)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
