type ValidationError = {
  path: Array<string | number>
  message: string
}

type ParseResult<T = unknown> =
  | { success: true; data: T }
  | { success: false; errors: ValidationError[] }

type Schema<T = unknown> = {
  safeParse: (value: unknown) => ParseResult<T>
}

function success<T>(data: T): ParseResult<T> {
  return { success: true, data };
}

function failure(errors: ValidationError[]): ParseResult<never> {
  return { success: false, errors };
}

function primitive<T>(
  expectedType: 'string' | 'number' | 'boolean',
  message: string,
): Schema<T> {
  return {
    safeParse(value: unknown): ParseResult<T> {
      return typeof value === expectedType
        ? success(value as T)
        : failure([{ path: [], message }]);
    },
  };
}

function prefixErrors(
  pathSegment: string,
  errors: ValidationError[],
): ValidationError[] {
  return errors.map((error) => ({
    path: [pathSegment, ...error.path],
    message: error.message,
  }));
}

export const v = {
  string(): Schema<string> {
    return primitive<string>('string', 'Expected string');
  },

  number(): Schema<number> {
    return primitive<number>('number', 'Expected number');
  },

  boolean(): Schema<boolean> {
    return primitive<boolean>('boolean', 'Expected boolean');
  },

  object(shape: Record<string, Schema>): Schema<Record<string, unknown>> {
    return {
      safeParse(value: unknown): ParseResult<Record<string, unknown>> {
        if (value === null || typeof value !== 'object' || Array.isArray(value)) {
          return failure([{ path: [], message: 'Expected object' }]);
        }

        const data = value as Record<string, unknown>;
        const errors: ValidationError[] = [];

        for (const key of Object.keys(shape)) {
          if (data[key] === undefined) {
            errors.push({ path: [key], message: 'Required' });
            continue;
          }

          const result = shape[key].safeParse(data[key]);

          if (!result.success) {
            errors.push(...prefixErrors(key, result.errors));
          }
        }

        return errors.length > 0 ? failure(errors) : success(data);
      },
    };
  },
};
