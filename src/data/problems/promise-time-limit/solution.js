export default function timeLimit(fn, t) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const timeoutId = setTimeout(() => {
        reject('Time Limit Exceeded');
      }, t);

      Promise.resolve()
        .then(() => fn(...args))
        .then(resolve, reject)
        .finally(() => {
          clearTimeout(timeoutId);
        });
    });
  };
}
