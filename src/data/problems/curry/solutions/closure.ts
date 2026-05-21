type AnyFunction = (...args: any[]) => any

export default function curry<T extends AnyFunction>(fn: T) {
  function buildCurried(collectedArgs: unknown[], context?: unknown) {
    return function curried(this: unknown, arg?: unknown): unknown {
      if (arguments.length === 0) {
        if (fn.length === 0) {
          return fn.apply(this);
        }

        const nextContext = collectedArgs.length === 0 && context === undefined
          ? this
          : context;
        return buildCurried(collectedArgs, nextContext);
      }

      const nextContext = collectedArgs.length === 0 && context === undefined
        ? this
        : context;
      const nextArgs = [...collectedArgs, arg];

      if (nextArgs.length >= fn.length) {
        return fn.apply(nextContext, nextArgs);
      }

      return buildCurried(nextArgs, nextContext);
    };
  }

  return buildCurried([]);
}
