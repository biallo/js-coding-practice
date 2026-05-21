export default function curry(fn) {
  function buildCurried(collectedArgs, context) {
    return function curried(arg) {
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
