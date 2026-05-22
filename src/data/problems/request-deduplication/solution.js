export default function dedupe(requester) {
  const pending = new Map();

  return function deduped(key, ...args) {
    if (pending.has(key)) {
      return pending.get(key);
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
