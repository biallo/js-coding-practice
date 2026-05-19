function throttle<TArgs extends unknown[]>(
  fn: (...args: TArgs) => void,
  delay: number,
) {
  let lastCallTime = 0

  return function throttled(this: unknown, ...args: TArgs) {
    const now = Date.now()

    if (now - lastCallTime >= delay) {
      fn.apply(this, args)
      lastCallTime = now
    }
  }
}
