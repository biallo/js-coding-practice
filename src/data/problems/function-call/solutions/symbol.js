Function.prototype.myCall = function (thisArg, ...args) {
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
