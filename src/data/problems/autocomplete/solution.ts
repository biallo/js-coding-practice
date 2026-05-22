type Options = {
  debounceMs?: number
  cache?: boolean
};

export default function createAutocomplete<T>(
  searcher: (query: string) => Promise<T[]>,
  { debounceMs = 200, cache = true }: Options = {},
) {
  const resultCache = new Map<string, T[]>();
  let timerId: ReturnType<typeof setTimeout> | null = null;
  let requestId = 0;
  let rejectPending: ((reason?: unknown) => void) | null = null;

  function search(query: string): Promise<T[]> {
    if (cache && resultCache.has(query)) {
      return Promise.resolve(resultCache.get(query) as T[]);
    }

    requestId += 1;
    const currentRequestId = requestId;

    if (timerId !== null) {
      clearTimeout(timerId);
      timerId = null;
    }

    if (rejectPending) {
      rejectPending('Stale response');
      rejectPending = null;
    }

    return new Promise((resolve, reject) => {
      rejectPending = reject;

      timerId = setTimeout(() => {
        timerId = null;
        rejectPending = null;

        searcher(query).then(
          (results) => {
            if (currentRequestId !== requestId) {
              reject('Stale response');
              return;
            }

            if (cache) {
              resultCache.set(query, results);
            }

            resolve(results);
          },
          reject,
        );
      }, debounceMs);
    });
  }

  return {
    search,
    clearCache() {
      resultCache.clear();
    },
  };
}
