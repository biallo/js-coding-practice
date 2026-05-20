export default function promiseAll<T>(
  iterable: Array<T | PromiseLike<T>>
): Promise<T[]> {
  return new Promise((resolve, reject) => {
    const results = new Array<T>(iterable.length);
    let unresolved = iterable.length;

    if (unresolved === 0) {
      resolve(results);
      return;
    }

    iterable.forEach((item, index) => {
      // Promise.resolve handles both promise and non-promise values uniformly.
      Promise.resolve(item).then((value) => {
        results[index] = value;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results);
        }
      }, reject);
    });
  });
}
