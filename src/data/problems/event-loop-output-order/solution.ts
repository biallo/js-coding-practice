export default function getEventLoopOutput(): Promise<string[]> {
  const output: string[] = [];

  output.push('sync-1');

  setTimeout(() => {
    output.push('timeout');
  }, 0);

  Promise.resolve()
    .then(() => {
      output.push('promise-1');
    })
    .then(() => {
      output.push('promise-2');
    });

  queueMicrotask(() => {
    output.push('microtask');
  });

  output.push('sync-2');

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(output);
    }, 0);
  });
}
