type DebouncedFunction<TArgs extends unknown[]> = {
  (this: unknown, ...args: TArgs): void;
  cancel: () => void;
  flush: () => void;
};

export default function debounce<TArgs extends unknown[]>(
  func: (...args: TArgs) => void,
  wait: number = 0,
): DebouncedFunction<TArgs> {
  let timeoutID: ReturnType<typeof setTimeout> | null = null;
  // Track the latest call so delayed execution and flush use fresh values.
  let lastThis: unknown;
  let lastArgs: TArgs | null = null;

  function clearPending() {
    if (timeoutID !== null) {
      clearTimeout(timeoutID);
      timeoutID = null;
    }
  }

  function invoke() {
    if (lastArgs === null) {
      return;
    }

    const args = lastArgs;
    lastArgs = null;
    func.apply(lastThis, args);
  }

  function debounced(this: unknown, ...args: TArgs) {
    // Each call replaces the pending invocation with the latest context/args.
    lastThis = this;
    lastArgs = args;
    clearPending();

    timeoutID = setTimeout(() => {
      timeoutID = null;
      invoke();
    }, wait);
  }

  debounced.cancel = function () {
    // Cancel both the timer and the saved invocation data.
    clearPending();
    lastArgs = null;
  };

  debounced.flush = function () {
    if (timeoutID === null) {
      return;
    }

    // Run the pending invocation immediately instead of waiting for the timer.
    clearPending();
    invoke();
  };

  return debounced;
}
