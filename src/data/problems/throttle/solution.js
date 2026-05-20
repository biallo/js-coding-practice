export default function throttle(func, wait = 0) {
  let timeoutID = null;

  return function (...args) {
    const context = this;
    if (timeoutID !== null) {
      return;
    }

    func.apply(context, args);

    timeoutID = setTimeout(() => {
      timeoutID = null;
    }, wait);
  };
}
