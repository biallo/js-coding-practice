export default function createAutocomplete(
  searcher,
  { debounceMs = 200, cache = true } = {},
) {
  const resultCache = new Map();
  let timerId = null;
  let requestId = 0;
  let rejectPending = null;

  function search(query) {
    if (cache && resultCache.has(query)) {
      return Promise.resolve(resultCache.get(query));
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
