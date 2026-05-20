export default function debounce(func, wait = 0) {
  let timeoutID = null;
  // Track the latest call so delayed execution and flush use fresh values.
  let lastThis;
  let lastArgs = null;

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

  function debounced(...args) {
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
