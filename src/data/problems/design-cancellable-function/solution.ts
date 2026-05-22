type CancellableResult<T> = [cancel: () => void, promise: Promise<T>];

export default function cancellable<T>(
  generator: Generator<Promise<unknown>, T, unknown>,
): CancellableResult<T> {
  let cancel: () => void = () => {};

  const cancelPromise = new Promise<never>((_, reject) => {
    cancel = () => reject('Cancelled');
  });

  cancelPromise.catch(() => {});

  const promise = (async () => {
    let next = generator.next();

    while (!next.done) {
      try {
        const value = await Promise.race([next.value, cancelPromise]);
        next = generator.next(value);
      } catch (error) {
        next = generator.throw(error);
      }
    }

    return next.value;
  })();

  return [cancel, promise];
}
