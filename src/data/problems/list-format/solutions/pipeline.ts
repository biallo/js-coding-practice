type ListFormatOptions = {
  length?: number
  sorted?: boolean
  unique?: boolean
}

export default function listFormat(
  items: string[],
  options: ListFormatOptions = {}
): string {
  let list = items.filter(Boolean);

  if (options.unique) {
    // Set keeps the first occurrence order while removing duplicates.
    list = Array.from(new Set(list));
  }

  if (options.sorted) {
    list = [...list].sort();
  }

  const shouldTruncate =
    Number.isInteger(options.length) &&
    options.length > 0 &&
    options.length < list.length;
  const remaining = shouldTruncate ? list.length - options.length : 0;

  if (shouldTruncate) {
    list = list.slice(0, options.length);
    list.push(`${remaining} ${remaining === 1 ? 'other' : 'others'}`);
  }

  if (list.length <= 2) {
    return list.join(' and ');
  }

  return `${list.slice(0, -1).join(', ')} and ${list.at(-1)}`;
}
