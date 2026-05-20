export default function mapAsync(array, callbackFn) {
  return new Promise((resolve, reject) => {
    const results = new Array(array.length);
    let pending = array.length;

    if (pending === 0) {
      resolve(results);
      return;
    }

    array.forEach((item, index) => {
      // Promise.resolve lets the mapper return either a value or a promise.
      Promise.resolve(callbackFn(item, index, array)).then((value) => {
        results[index] = value;
        pending -= 1;

        if (pending === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
}
