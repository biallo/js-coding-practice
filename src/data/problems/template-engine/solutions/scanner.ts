type TemplateData = Record<string, unknown>

function getValue(data: TemplateData, path: string): unknown {
  const keys = path.split('.');
  let value: unknown = data;

  for (const key of keys) {
    if (value == null) {
      return undefined;
    }

    value = (value as Record<string, unknown>)[key];
  }

  return value;
}

export default function templateEngine(
  template: string,
  data: TemplateData
): string {
  let result = '';
  let index = 0;

  while (index < template.length) {
    const openIndex = template.indexOf('{{', index);

    if (openIndex === -1) {
      result += template.slice(index);
      break;
    }

    result += template.slice(index, openIndex);
    const closeIndex = template.indexOf('}}', openIndex + 2);

    if (closeIndex === -1) {
      result += template.slice(openIndex);
      break;
    }

    const path = template.slice(openIndex + 2, closeIndex).trim();
    // Convert found placeholders one by one without evaluating JavaScript.
    const value = getValue(data, path);
    result += value == null ? '' : String(value);
    index = closeIndex + 2;
  }

  return result;
}
