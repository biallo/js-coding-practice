export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === 'function';
}

export function isObject(value) {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export function isPlainObject(value) {
  if (!isObject(value) || isFunction(value) || isArray(value)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}
