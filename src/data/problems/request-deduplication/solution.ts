type Requester<K, Args extends unknown[], R> = (
  key: K,
  ...args: Args
) => Promise<R>;

export default function dedupe<K, Args extends unknown[], R>(
  requester: Requester<K, Args, R>,
): Requester<K, Args, R> {
  const pending = new Map<K, Promise<R>>();

  return function deduped(key: K, ...args: Args): Promise<R> {
    if (pending.has(key)) {
      return pending.get(key) as Promise<R>;
    }

    const promise = Promise.resolve()
      .then(() => requester(key, ...args))
      .finally(() => {
        pending.delete(key);
      });

    pending.set(key, promise);
    return promise;
  };
}
