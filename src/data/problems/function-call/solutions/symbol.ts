export {};

declare global {
  interface Function {
    myCall<T, Args extends unknown[], R>(
      this: (this: T, ...args: Args) => R,
      thisArg: T,
      ...args: Args
    ): R
  }
}

Function.prototype.myCall = function <T, Args extends unknown[], R>(
  this: (this: T, ...args: Args) => R,
  thisArg: T,
  ...args: Args
): R {
  const context = thisArg == null ? globalThis : Object(thisArg);
  const fnKey = Symbol('fn');

  Object.defineProperty(context, fnKey, {
    value: this,
    configurable: true,
  });

  try {
    return context[fnKey](...args);
  } finally {
    delete context[fnKey];
  }
};
