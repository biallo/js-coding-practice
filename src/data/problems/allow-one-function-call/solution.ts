type Fn<TArgs extends unknown[], TResult> = (...args: TArgs) => TResult;

export default function once<TArgs extends unknown[], TResult>(
  fn: Fn<TArgs, TResult>,
): (...args: TArgs) => TResult | undefined {
  let hasBeenCalled = false;

  return function onceFn(...args: TArgs): TResult | undefined {
    if (hasBeenCalled) {
      return undefined;
    }

    hasBeenCalled = true;
    return fn(...args);
  };
}
