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

    iterable.forEach(async (item, index) => {
      try {
        // Awaiting each item preserves concurrent starts while normalizing values.
        results[index] = await item;
        unresolved -= 1;

        if (unresolved === 0) {
          resolve(results);
        }
      } catch (error) {
        reject(error);
      }
    });
  });
}
