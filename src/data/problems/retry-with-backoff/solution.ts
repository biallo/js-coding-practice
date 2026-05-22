function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function retry<T>(
  fn: () => Promise<T>,
  retries: number,
  delay: number,
  factor = 2,
): Promise<T> {
  let wait = delay;
  let lastError: unknown;

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
