export default function join(arr1, arr2) {
  const byId = new Map();

  for (const item of arr1) {
    byId.set(item.id, { ...item });
  }

  for (const item of arr2) {
    byId.set(item.id, { ...(byId.get(item.id) ?? {}), ...item });
  }

  return Array.from(byId.values()).sort((a, b) => a.id - b.id);
}
