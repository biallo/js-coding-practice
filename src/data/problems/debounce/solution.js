export default function debounce(func, wait = 0) {
  // Store the active timer so each new call can restart the waiting period.
  let timeoutID = null;

  return function (...args) {
    // Preserve the latest call's this value and arguments for the delayed run.
    const context = this;
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      timeoutID = null;
      func.apply(context, args);
    }, wait);
  };
}
