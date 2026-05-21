type Fn = (...args: unknown[]) => unknown;

export default function cancellable(
  fn: Fn,
  args: unknown[],
  t: number,
): () => void {
  const timeoutId = setTimeout(() => {
    fn(...args);
  }, t);

  return function cancelFn() {
    clearTimeout(timeoutId);
  };
}
