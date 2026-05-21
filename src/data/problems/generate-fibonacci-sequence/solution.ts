export default function* fibGenerator(): Generator<number, never, unknown> {
  let previous = 0;
  let current = 1;

  while (true) {
    yield previous;

    const next = previous + current;
    previous = current;
    current = next;
  }
}
