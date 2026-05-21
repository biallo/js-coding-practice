type JsonContainer = Record<string, unknown> | unknown[];

export default function isEmpty(obj: JsonContainer): boolean {
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      return false;
    }
  }

  return true;
}
