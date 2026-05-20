export default function mapAsync(array, callbackFn) {
  // Array.map preserves order; Promise.all waits for every mapped promise.
  return Promise.all(
    array.map((item, index) => callbackFn(item, index, array)),
  );
}
