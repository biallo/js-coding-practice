Function.prototype.myCall = function (thisArg, ...args) {
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
