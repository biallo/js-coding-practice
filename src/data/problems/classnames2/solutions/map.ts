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
  const classStates = new Map<string, boolean>();

  function collect(value: ClassValue) {
    if (!value) {
      return;
    }

    if (typeof value === 'function') {
      collect(value());
      return;
    }

    if (typeof value === 'string' || typeof value === 'number') {
      classStates.set(String(value), true);
      return;
    }

    if (Array.isArray(value)) {
      for (const item of value) {
        collect(item);
      }

      return;
    }

    for (const key in value) {
      if (Object.prototype.hasOwnProperty.call(value, key)) {
        // A later object entry can explicitly turn off an earlier class.
        classStates.set(key, Boolean(value[key]));
      }
    }
  }

  for (const arg of args) {
    collect(arg);
  }

  return Array.from(classStates)
    .filter(([, isEnabled]) => isEnabled)
    .map(([className]) => className)
    .join(' ');
}
