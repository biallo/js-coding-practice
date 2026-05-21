function getValue(data, path) {
  return path.split('.').reduce((value, key) => {
    if (value == null) {
      return undefined;
    }

    return value[key];
  }, data);
}

export default function templateEngine(template, data) {
  return template.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (_, path) => {
    // Missing or nullish values render as an empty string.
    const value = getValue(data, path.trim());
    return value == null ? '' : String(value);
  });
}
