type ClassDictionary = Record<string, unknown>
type ClassArray = ClassValue[]
type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | false
  | undefined

export default function classNames(...args: ClassValue[]): string {
  const classes: string[] = [];

  for (const arg of args) {
    // Ignore falsey values like null, undefined, false, 0, and empty strings.
    if (!arg) {
      continue;
    }

    if (typeof arg === 'string' || typeof arg === 'number') {
      classes.push(String(arg));
      continue;
    }

    if (Array.isArray(arg)) {
      // Arrays follow the same rules recursively.
      const nestedClasses = classNames(...arg);

      if (nestedClasses) {
        classes.push(nestedClasses);
      }

      continue;
    }

    for (const key in arg) {
      if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
        classes.push(key);
      }
    }
  }

  return classes.join(' ');
}
