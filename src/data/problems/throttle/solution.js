export default function throttle(func, wait = 0) {
  // A non-null timer means the current throttling window is still active.
  let timeoutID = null;

  return function (...args) {
    const context = this;
    if (timeoutID !== null) {
      // Ignore calls made before the wait window has finished.
      return;
    }

    // Run the first call immediately, preserving this and the call arguments.
    func.apply(context, args);

    timeoutID = setTimeout(() => {
      timeoutID = null;
    }, wait);
  };
}
