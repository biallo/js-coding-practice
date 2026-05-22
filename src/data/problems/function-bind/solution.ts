export {};

type AnyFunction = (...args: unknown[]) => unknown;

declare global {
  interface Function {
    myBind(thisArg: unknown, ...boundArgs: unknown[]): AnyFunction;
  }
}

Function.prototype.myBind = function (
  this: AnyFunction,
  thisArg: unknown,
  ...boundArgs: unknown[]
): AnyFunction {
  const target = this;

  function boundFunction(this: unknown, ...callArgs: unknown[]) {
    const receiver =
      this && this instanceof boundFunction ? this : thisArg;
    return target.apply(receiver, [...boundArgs, ...callArgs]);
  }

  if ('prototype' in target) {
    boundFunction.prototype = Object.create(target.prototype);
    Object.defineProperty(boundFunction.prototype, 'constructor', {
      value: boundFunction,
      writable: true,
      configurable: true,
    });
  }

  return boundFunction;
};
