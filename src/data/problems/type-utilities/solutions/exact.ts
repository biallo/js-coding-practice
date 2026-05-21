export function isBoolean(value: unknown): value is boolean {
  return value === true || value === false;
}

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function isNull(value: unknown): value is null {
  return value === null;
}

export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}

export function isUndefined(value: unknown): value is undefined {
  return value === undefined;
}
