type Fn = (...args: unknown[]) => unknown;

export default function cancellable(
  fn: Fn,
  args: unknown[],
  t: number,
): () => void {
  fn(...args);

  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  return function cancelFn() {
    clearInterval(intervalId);
  };
}
