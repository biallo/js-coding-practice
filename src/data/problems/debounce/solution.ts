type Fn = (...args: number[]) => void

export default function debounce(
  func: Fn,
  wait: number = 0
): Fn {
  // Store the active timer so each new call can restart the waiting period.
  let timeoutID: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any[]) {
    // Preserve the latest call's this value and arguments for the delayed run.
    const context = this;
    clearTimeout(timeoutID ?? undefined);

    timeoutID = setTimeout(function () {
      timeoutID = null;
      func.apply(context, args);
    }, wait);
  };
}
