export default function reduce(nums, fn, init) {
  let result = init;

  for (const num of nums) {
    result = fn(result, num);
  }

  return result;
}
