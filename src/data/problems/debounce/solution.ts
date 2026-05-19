function debounce<TArgs extends unknown[]>(
  fn: (...args: TArgs) => void,
  delay: number,
) {
  let timerId: ReturnType<typeof setTimeout> | null = null

  return function debounced(this: unknown, ...args: TArgs) {
    if (timerId !== null) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => {
      fn.apply(this, args)
      timerId = null
    }, delay)
  }
}
