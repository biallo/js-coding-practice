export default function debounce(func, wait = 0) {
  let timeoutID = null;

  return function (...args) {
    const context = this;
    clearTimeout(timeoutID);

    timeoutID = setTimeout(() => {
      timeoutID = null;
      func.apply(context, args);
    }, wait);
  };
}