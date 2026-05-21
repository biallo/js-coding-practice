type TemplateData = Record<string, unknown>

function getValue(data: TemplateData, path: string): unknown {
  return path.split('.').reduce<unknown>((value, key) => {
    if (value == null) {
      return undefined;
    }

    return (value as Record<string, unknown>)[key];
  }, data);
}

export default function templateEngine(
  template: string,
  data: TemplateData
): string {
  return template.replace(/\{\{\s*([^{}]+?)\s*\}\}/g, (_, path: string) => {
    // Missing or nullish values render as an empty string.
    const value = getValue(data, path.trim());
    return value == null ? '' : String(value);
  });
}
