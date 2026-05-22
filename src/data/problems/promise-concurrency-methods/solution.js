export function promiseAllSettled(values) {
  return new Promise((resolve) => {
    if (values.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(values.length);
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

export function promiseRace(values) {
  return new Promise((resolve, reject) => {
    for (const value of values) {
      Promise.resolve(value).then(resolve, reject);
    }
  });
}

export function promiseAny(values) {
  return new Promise((resolve, reject) => {
    if (values.length === 0) {
      reject(new AggregateError([], 'All promises were rejected'));
      return;
    }

    const reasons = new Array(values.length);
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
