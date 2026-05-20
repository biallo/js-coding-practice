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
    lastThis = this;
    lastArgs = args;
    clearPending();

    timeoutID = setTimeout(() => {
      timeoutID = null;
      invoke();
    }, wait);
  }

  debounced.cancel = function cancel() {
    clearPending();
    lastArgs = null;
  };

  debounced.flush = function flush() {
    if (timeoutID === null) {
      return;
    }

    clearPending();
    invoke();
  };

  return debounced;
}
