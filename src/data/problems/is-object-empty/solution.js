export default function isEmpty(obj) {
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      return false;
    }
  }

  return true;
}
