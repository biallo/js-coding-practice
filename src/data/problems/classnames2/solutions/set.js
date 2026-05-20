export default function classNames(...args) {
  const classes = new Set();

  function collect(value) {
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

    if (typeof value === 'object') {
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
  }

  for (const arg of args) {
    collect(arg);
  }

  return Array.from(classes).join(' ');
}
