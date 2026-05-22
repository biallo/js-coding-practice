type AsyncFunction<Args extends unknown[], Result> = (
  ...args: Args
) => Promise<Result>;

export default function timeLimit<Args extends unknown[], Result>(
  fn: AsyncFunction<Args, Result>,
  t: number,
): AsyncFunction<Args, Result> {
  return function (...args: Args): Promise<Result> {
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
