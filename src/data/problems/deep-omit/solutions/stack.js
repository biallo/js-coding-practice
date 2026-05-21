function isContainer(value) {
  return typeof value === 'object' && value !== null;
}

function createContainer(value) {
  return Array.isArray(value) ? [] : {};
}

export default function deepOmit(obj, keys) {
  const keysToOmit = new Set(keys);
  const result = {};
  const stack = [{ source: obj, target: result }];

  while (stack.length > 0) {
    const { source, target } = stack.pop();

    if (Array.isArray(source) && Array.isArray(target)) {
      for (let index = 0; index < source.length; index += 1) {
        const value = source[index];

        if (isContainer(value)) {
          const childTarget = createContainer(value);
          target[index] = childTarget;
          stack.push({ source: value, target: childTarget });
        } else {
          target[index] = value;
        }
      }

      continue;
    }

    for (const [key, value] of Object.entries(source)) {
      if (keysToOmit.has(key)) {
        continue;
      }

      if (isContainer(value)) {
        const childTarget = createContainer(value);
        target[key] = childTarget;
        stack.push({ source: value, target: childTarget });
      } else {
        target[key] = value;
      }
    }
  }

  return result;
}
