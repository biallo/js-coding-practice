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
  let fnKey = '__myCallFn__';

  while (Object.hasOwn(context, fnKey)) {
    fnKey += '_';
  }

  context[fnKey] = this;

  try {
    return context[fnKey](...args);
  } finally {
    delete context[fnKey];
  }
};
