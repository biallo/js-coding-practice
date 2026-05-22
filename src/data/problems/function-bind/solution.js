Function.prototype.myBind = function (thisArg, ...boundArgs) {
  const target = this;

  function boundFunction(...callArgs) {
    const receiver =
      this && this instanceof boundFunction ? this : thisArg;
    return target.apply(receiver, [...boundArgs, ...callArgs]);
  }

  if (target.prototype) {
    boundFunction.prototype = Object.create(target.prototype);
    Object.defineProperty(boundFunction.prototype, 'constructor', {
      value: boundFunction,
      writable: true,
      configurable: true,
    });
  }

  return boundFunction;
};
