type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };

type ArrayType = { id: number } & Record<string, JSONValue>;

export default function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  const byId = new Map<number, ArrayType>();

  for (const item of arr1) {
    byId.set(item.id, { ...item });
  }

  for (const item of arr2) {
    byId.set(item.id, { ...(byId.get(item.id) ?? {}), ...item });
  }

  return Array.from(byId.values()).sort((a, b) => a.id - b.id);
}
