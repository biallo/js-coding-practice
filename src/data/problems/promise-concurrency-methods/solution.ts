type SettledResult<T> =
  | { status: 'fulfilled'; value: T }
  | { status: 'rejected'; reason: unknown };

type PromiseValue<T> = T | PromiseLike<T>;

export function promiseAllSettled<T>(
  values: Array<PromiseValue<T>>,
): Promise<Array<SettledResult<T>>> {
  return new Promise((resolve) => {
    if (values.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array<SettledResult<T>>(values.length);
    let settledCount = 0;

    values.forEach((value, index) => {
      Promise.resolve(value)
        .then(
          (resolvedValue) => {
            results[index] = { status: 'fulfilled', value: resolvedValue };
          },
          (reason) => {
            results[index] = { status: 'rejected', reason };
          },
        )
        .finally(() => {
          settledCount += 1;

          if (settledCount === values.length) {
            resolve(results);
          }
        });
    });
  });
}

export function promiseRace<T>(values: Array<PromiseValue<T>>): Promise<T> {
  return new Promise((resolve, reject) => {
    for (const value of values) {
      Promise.resolve(value).then(resolve, reject);
    }
  });
}

export function promiseAny<T>(values: Array<PromiseValue<T>>): Promise<T> {
  return new Promise((resolve, reject) => {
    if (values.length === 0) {
      reject(new AggregateError([], 'All promises were rejected'));
      return;
    }

    const reasons = new Array<unknown>(values.length);
    let rejectedCount = 0;

    values.forEach((value, index) => {
      Promise.resolve(value).then(resolve, (reason) => {
        reasons[index] = reason;
        rejectedCount += 1;

        if (rejectedCount === values.length) {
          reject(new AggregateError(reasons, 'All promises were rejected'));
        }
      });
    });
  });
}
