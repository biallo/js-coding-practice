export default function checkIfInstanceOf(obj, classFunction) {
  if (obj == null || typeof classFunction !== 'function') {
    return false;
  }

  const targetPrototype = classFunction.prototype;

  if (targetPrototype == null) {
    return false;
  }

  let current = obj;

  while (current != null) {
    const prototype = Object.getPrototypeOf(current);

    if (prototype === targetPrototype) {
      return true;
    }

    current = prototype;
  }

  return false;
}
