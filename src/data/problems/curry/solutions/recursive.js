export default function curry(fn) {
  function buildCurried(args, context) {
    return function next(arg) {
      if (arguments.length === 0) {
        if (fn.length === 0) {
          return fn.apply(this);
        }

        const nextContext = args.length === 0 && context === undefined
          ? this
          : context;
        return buildCurried(args, nextContext);
      }

      const nextContext = args.length === 0 && context === undefined
        ? this
        : context;
      const nextArgs = [...args, arg];

      if (nextArgs.length >= fn.length) {
        return fn.apply(nextContext, nextArgs);
      }

      return buildCurried(nextArgs, nextContext);
    };
  }

  return buildCurried([]);
}
