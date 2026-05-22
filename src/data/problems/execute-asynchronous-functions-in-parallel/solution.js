export default function promiseAll(functions) {
  return new Promise((resolve, reject) => {
    const results = new Array(functions.length);
    let resolvedCount = 0;
    let settled = false;

    functions.forEach((fn, index) => {
      Promise.resolve()
        .then(fn)
        .then((value) => {
          if (settled) {
            return;
          }

          results[index] = value;
          resolvedCount += 1;

          if (resolvedCount === functions.length) {
            settled = true;
            resolve(results);
          }
        })
        .catch((error) => {
          if (settled) {
            return;
          }

          settled = true;
          reject(error);
        });
    });
  });
}
