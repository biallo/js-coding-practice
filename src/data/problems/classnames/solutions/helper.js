export default function classNames(...args) {
  const classes = [];

  function collect(value) {
    // All recursive calls write into the same result array.
    if (!value) {
      return;
    }

    if (typeof value === 'string' || typeof value === 'number') {
      classes.push(String(value));
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
        if (Object.prototype.hasOwnProperty.call(value, key) && value[key]) {
          classes.push(key);
        }
      }
    }
  }

  for (const arg of args) {
    collect(arg);
  }

  return classes.join(' ');
}
