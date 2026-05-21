export default async function addTwoPromises(promise1, promise2) {
  return (await promise1) + (await promise2);
}
