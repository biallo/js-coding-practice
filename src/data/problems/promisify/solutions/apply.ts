type Callback<R> = (error: unknown, result?: R) => void
type CallbackFunction<Args extends unknown[], R> = (
  ...args: [...Args, Callback<R>]
) => void

export default function promisify<Args extends unknown[], R>(
  fn: CallbackFunction<Args, R>,
): (...args: Args) => Promise<R> {
  return function promisified(this: unknown, ...args: Args): Promise<R> {
    return new Promise((resolve, reject) => {
      const callback: Callback<R> = (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result as R);
        }
      };

      fn.apply(this, [...args, callback]);
    });
  };
}
