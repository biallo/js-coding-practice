export default function middlewares(...fns) {
  return function run(context) {
    let lastIndex = -1;

    function dispatch(index) {
      if (index <= lastIndex) {
        return Promise.reject(new Error('next() called multiple times'));
      }

      lastIndex = index;
      const fn = fns[index];

      if (fn === undefined) {
        return Promise.resolve();
      }

      // Promise.resolve normalizes sync and async middleware return values.
      return Promise.resolve(fn(context, () => dispatch(index + 1)));
    }

    return dispatch(0);
  };
}
