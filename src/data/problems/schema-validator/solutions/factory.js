function success(data) {
  return { success: true, data };
}

function failure(errors) {
  return { success: false, errors };
}

function primitive(expectedType, message) {
  return {
    safeParse(value) {
      return typeof value === expectedType
        ? success(value)
        : failure([{ path: [], message }]);
    },
  };
}

function prefixErrors(pathSegment, errors) {
  return errors.map((error) => ({
    path: [pathSegment, ...error.path],
    message: error.message,
  }));
}

export const v = {
  string() {
    return primitive('string', 'Expected string');
  },

  number() {
    return primitive('number', 'Expected number');
  },

  boolean() {
    return primitive('boolean', 'Expected boolean');
  },

  object(shape) {
    return {
      safeParse(value) {
        if (value === null || typeof value !== 'object' || Array.isArray(value)) {
          return failure([{ path: [], message: 'Expected object' }]);
        }

        const errors = [];

        for (const key of Object.keys(shape)) {
          if (value[key] === undefined) {
            errors.push({ path: [key], message: 'Required' });
            continue;
          }

          const result = shape[key].safeParse(value[key]);

          if (!result.success) {
            errors.push(...prefixErrors(key, result.errors));
          }
        }

        return errors.length > 0 ? failure(errors) : success(value);
      },
    };
  },
};
