export default function once(fn) {
  let hasBeenCalled = false;

  return function onceFn(...args) {
    if (hasBeenCalled) {
      return undefined;
    }

    hasBeenCalled = true;
    return fn(...args);
  };
}
