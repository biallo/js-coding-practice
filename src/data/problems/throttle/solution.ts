export default function throttle(
  func: Function,
  wait: number = 0
): Function {
  // A non-null timer means the current throttling window is still active.
  let timeoutID: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any[]) {
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
