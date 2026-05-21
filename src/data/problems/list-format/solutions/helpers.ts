type ListFormatOptions = {
  length?: number
  sorted?: boolean
  unique?: boolean
}

function normalizeItems(
  items: string[],
  options: ListFormatOptions
): string[] {
  let list = items.filter((item) => item !== '');

  if (options.unique) {
    list = list.filter((item, index) => list.indexOf(item) === index);
  }

  if (options.sorted) {
    list.sort();
  }

  return list;
}

function formatItems(items: string[]): string {
  if (items.length <= 2) {
    return items.join(' and ');
  }

  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

export default function listFormat(
  items: string[],
  options: ListFormatOptions = {}
): string {
  const list = normalizeItems(items, options);
  const shouldTruncate =
    Number.isInteger(options.length) &&
    options.length > 0 &&
    options.length < list.length;

  if (!shouldTruncate) {
    return formatItems(list);
  }

  const visibleItems = list.slice(0, options.length);
  const remaining = list.length - visibleItems.length;
  // Treat the remaining count as the final display item.
  visibleItems.push(`${remaining} ${remaining === 1 ? 'other' : 'others'}`);

  return formatItems(visibleItems);
}
