type AsyncMapper<T, U> = (
  value: T,
  index: number,
  array: T[]
) => U | Promise<U>

export default function mapAsync<T, U>(
  array: T[],
  callbackFn: AsyncMapper<T, U>
): Promise<U[]> {
  return new Promise((resolve, reject) => {
    const results = new Array<U>(array.length);
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
