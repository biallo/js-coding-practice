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

function ok<T>(data: T): ParseResult<T> {
  return { success: true, data };
}

function fail(errors: ValidationError[]): ParseResult<never> {
  return { success: false, errors };
}

class PrimitiveSchema<T> implements Schema<T> {
  constructor(
    private typeName: 'string' | 'number' | 'boolean',
    private message: string,
  ) {}

  safeParse(value: unknown): ParseResult<T> {
    if (typeof value === this.typeName) {
      return ok(value as T);
    }

    return fail([{ path: [], message: this.message }]);
  }
}

class ObjectSchema implements Schema<Record<string, unknown>> {
  constructor(private shape: Record<string, Schema>) {}

  safeParse(value: unknown): ParseResult<Record<string, unknown>> {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) {
      return fail([{ path: [], message: 'Expected object' }]);
    }

    const data = value as Record<string, unknown>;
    const errors: ValidationError[] = [];

    for (const [key, schema] of Object.entries(this.shape)) {
      const fieldValue = data[key];

      if (fieldValue === undefined) {
        errors.push({ path: [key], message: 'Required' });
        continue;
      }

      const result = schema.safeParse(fieldValue);

      if (!result.success) {
        for (const error of result.errors) {
          errors.push({ path: [key, ...error.path], message: error.message });
        }
      }
    }

    return errors.length === 0 ? ok(data) : fail(errors);
  }
}

export const v = {
  string(): Schema<string> {
    return new PrimitiveSchema<string>('string', 'Expected string');
  },

  number(): Schema<number> {
    return new PrimitiveSchema<number>('number', 'Expected number');
  },

  boolean(): Schema<boolean> {
    return new PrimitiveSchema<boolean>('boolean', 'Expected boolean');
  },

  object(shape: Record<string, Schema>): Schema<Record<string, unknown>> {
    return new ObjectSchema(shape);
  },
};
