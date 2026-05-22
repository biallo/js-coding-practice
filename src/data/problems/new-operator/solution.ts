type ConstructorFunction<T> = {
  prototype: object
  apply(thisArg: object, args: unknown[]): T | object | Function | null | undefined
};

export default function myNew<T>(
  Constructor: ConstructorFunction<T>,
  ...args: unknown[]
): T | object | Function {
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);

  if ((typeof result === 'object' && result !== null) || typeof result === 'function') {
    return result;
  }

  return instance;
}
