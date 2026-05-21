function normalizeError(error) {
  return error instanceof Error ? error.message : String(error);
}

function createCheck(actual, isNot = false) {
  return {
    get not() {
      return createCheck(actual, !isNot);
    },
    toBe(expected) {
      const isEqual = Object.is(actual, expected);
      const passed = isNot ? !isEqual : isEqual;

      if (!passed) {
        throw new Error(
          isNot
            ? `Expected ${String(actual)} not to be ${String(expected)}`
            : `Expected ${String(actual)} to be ${String(expected)}`,
        );
      }
    },
  };
}

export default function createTestRunner() {
  const specs = [];

  return {
    spec(name, fn) {
      specs.push({ name, fn });
    },
    check(actual) {
      return createCheck(actual);
    },
    run() {
      const results = [];

      for (const spec of specs) {
        try {
          spec.fn();
          results.push({ name: spec.name, status: 'passed' });
        } catch (error) {
          results.push({
            name: spec.name,
            status: 'failed',
            error: normalizeError(error),
          });
        }
      }

      const failed = results.filter((result) => result.status === 'failed').length;

      return {
        total: results.length,
        passed: results.length - failed,
        failed,
        results,
      };
    },
  };
}
