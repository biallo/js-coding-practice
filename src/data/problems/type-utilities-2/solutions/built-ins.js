export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === 'function';
}

export function isObject(value) {
  return value !== null && value !== undefined && (
    typeof value === 'object' ||
    typeof value === 'function'
  );
}

export function isPlainObject(value) {
  if (value === null || typeof value !== 'object') {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}
