function debounce(fn, delay) {
  let timerId = null

  return function debounced(...args) {
    if (timerId !== null) {
      clearTimeout(timerId)
    }

    timerId = setTimeout(() => {
      fn.apply(this, args)
      timerId = null
    }, delay)
  }
}
