function createMatcher(actual, notCount = 0) {
  return {
    get not() {
      return createMatcher(actual, notCount + 1);
    },
    toBe(expected) {
      const isNot = notCount % 2 === 1;
      const isEqual = Object.is(actual, expected);

      if ((isNot && isEqual) || (!isNot && !isEqual)) {
        throw new Error(
          isNot
            ? `Expected ${String(actual)} not to be ${String(expected)}`
            : `Expected ${String(actual)} to be ${String(expected)}`,
        );
      }
    },
  };
}

function getErrorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

export default function createTestRunner() {
  const specs = [];

  function spec(name, fn) {
    specs.push({ name, fn });
  }

  function check(actual) {
    return createMatcher(actual);
  }

  function run() {
    const results = [];
    let passed = 0;
    let failed = 0;

    for (const { name, fn } of specs) {
      try {
        fn();
        passed += 1;
        results.push({ name, status: 'passed' });
      } catch (error) {
        failed += 1;
        results.push({ name, status: 'failed', error: getErrorMessage(error) });
      }
    }

    return { total: specs.length, passed, failed, results };
  }

  return { spec, check, run };
}
