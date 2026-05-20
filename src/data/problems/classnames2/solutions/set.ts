type ClassDictionary = Record<string, unknown>
type ClassFunction = () => ClassValue
type ClassArray = ClassValue[]
type ClassValue =
  | ClassArray
  | ClassDictionary
  | ClassFunction
  | string
  | number
  | null
  | false
  | undefined

export default function classNames(...args: ClassValue[]): string {
  const classes = new Set<string>();

  function collect(value: ClassValue) {
    if (!value) {
      return;
    }

    if (typeof value === 'function') {
      // Function values are resolved first, then processed by the same rules.
      collect(value());
      return;
    }

    if (typeof value === 'string' || typeof value === 'number') {
      classes.add(String(value));
      return;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        collect(item);
      }

      return;
    }

    for (const key in value) {
      if (!Object.prototype.hasOwnProperty.call(value, key)) {
        continue;
      }

      if (value[key]) {
        classes.add(key);
      } else {
        classes.delete(key);
      }
    }
  }

  for (const arg of args) {
    collect(arg);
  }

  return Array.from(classes).join(' ');
}
