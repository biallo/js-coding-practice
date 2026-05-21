export default function promisify(fn) {
  return function promisified(...args) {
    return new Promise((resolve, reject) => {
      const callback = (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      };

      fn.apply(this, [...args, callback]);
    });
  };
}
