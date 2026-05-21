export default function middlewares(...fns) {
  return function run(context) {
    const composed = fns.reduceRight(
      (next, fn) => {
        return () => Promise.resolve(fn(context, next));
      },
      () => Promise.resolve(),
    );

    // The first middleware receives a next function that represents the rest.
    return composed();
  };
}
