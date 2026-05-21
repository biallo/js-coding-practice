type Next = () => Promise<void>
type Middleware<TContext> = (
  context: TContext,
  next: Next
) => void | Promise<void>

export default function middlewares<TContext>(
  ...fns: Array<Middleware<TContext>>
) {
  return function run(context: TContext): Promise<void> {
    const composed = fns.reduceRight<Next>(
      (next, fn) => {
        return () => Promise.resolve(fn(context, next));
      },
      () => Promise.resolve(),
    );

    // The first middleware receives a next function that represents the rest.
    return composed();
  };
}
