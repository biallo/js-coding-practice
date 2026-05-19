function throttle(fn, delay) {
  let lastCallTime = 0

  return function throttled(...args) {
    const now = Date.now()

    if (now - lastCallTime >= delay) {
      fn.apply(this, args)
      lastCallTime = now
    }
  }
}
