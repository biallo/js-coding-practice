type Next = () => Promise<void>
type Middleware<TContext> = (
  context: TContext,
  next: Next
) => void | Promise<void>

export default function middlewares<TContext>(
  ...fns: Array<Middleware<TContext>>
) {
  return function run(context: TContext): Promise<void> {
    let lastIndex = -1;

    function dispatch(index: number): Promise<void> {
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
