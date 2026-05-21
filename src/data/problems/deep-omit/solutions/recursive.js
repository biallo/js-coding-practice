function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function omitValue(value, keysToOmit) {
  if (Array.isArray(value)) {
    return value.map((item) => omitValue(item, keysToOmit));
  }

  if (!isObject(value)) {
    return value;
  }

  const result = {};

  for (const [key, childValue] of Object.entries(value)) {
    if (!keysToOmit.has(key)) {
      result[key] = omitValue(childValue, keysToOmit);
    }
  }

  return result;
}

export default function deepOmit(obj, keys) {
  return omitValue(obj, new Set(keys));
}
