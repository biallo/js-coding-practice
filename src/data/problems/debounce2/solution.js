export default function debounce(func, wait = 0) {
  let timeoutID = null;
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
