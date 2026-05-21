function ok(data) {
  return { success: true, data };
}

function fail(errors) {
  return { success: false, errors };
}

class PrimitiveSchema {
  constructor(typeName, message) {
    this.typeName = typeName;
    this.message = message;
  }

  safeParse(value) {
    if (typeof value === this.typeName) {
      return ok(value);
    }

    return fail([{ path: [], message: this.message }]);
  }
}

class ObjectSchema {
  constructor(shape) {
    this.shape = shape;
  }

  safeParse(value) {
    if (value === null || typeof value !== 'object' || Array.isArray(value)) {
      return fail([{ path: [], message: 'Expected object' }]);
    }

    const errors = [];

    for (const [key, schema] of Object.entries(this.shape)) {
      const fieldValue = value[key];

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

    return errors.length === 0 ? ok(value) : fail(errors);
  }
}

export const v = {
  string() {
    return new PrimitiveSchema('string', 'Expected string');
  },

  number() {
    return new PrimitiveSchema('number', 'Expected number');
  },

  boolean() {
    return new PrimitiveSchema('boolean', 'Expected boolean');
  },

  object(shape) {
    return new ObjectSchema(shape);
  },
};
