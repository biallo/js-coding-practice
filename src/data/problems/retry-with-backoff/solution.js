function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function retry(fn, retries, delay, factor = 2) {
  let wait = delay;
  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (attempt === retries) {
        break;
      }

      await sleep(wait);
      wait *= factor;
    }
  }

  throw lastError;
}
