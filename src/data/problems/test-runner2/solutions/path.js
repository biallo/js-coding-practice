function makeCheck(actual, isNot = false) {
  return {
    get not() {
      return makeCheck(actual, !isNot);
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

function normalizeError(error) {
  return error instanceof Error ? error.message : String(error);
}

export default function createTestRunner() {
  const specs = [];
  let currentPath = [];

  function suite(name, fn) {
    const previousPath = currentPath;
    currentPath = [...currentPath, name];

    try {
      fn();
    } finally {
      currentPath = previousPath;
    }
  }

  function spec(name, fn) {
    specs.push({
      name: [...currentPath, name].join(' > '),
      fn,
    });
  }

  function run() {
    const results = [];

    for (const { name, fn } of specs) {
      try {
        fn();
        results.push({ name, status: 'passed' });
      } catch (error) {
        results.push({ name, status: 'failed', error: normalizeError(error) });
      }
    }

    const failed = results.filter((result) => result.status === 'failed').length;

    return {
      total: results.length,
      passed: results.length - failed,
      failed,
      results,
    };
  }

  return {
    suite,
    spec,
    check: makeCheck,
    run,
  };
}
