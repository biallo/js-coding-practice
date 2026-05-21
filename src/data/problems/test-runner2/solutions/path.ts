type Spec = {
  name: string
  fn: () => void
}

type TestResult =
  | { name: string; status: 'passed' }
  | { name: string; status: 'failed'; error: string }

function makeCheck(actual: unknown, isNot: boolean = false) {
  return {
    get not() {
      return makeCheck(actual, !isNot);
    },
    toBe(expected: unknown) {
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

function normalizeError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export default function createTestRunner() {
  const specs: Spec[] = [];
  let currentPath: string[] = [];

  function suite(name: string, fn: () => void): void {
    const previousPath = currentPath;
    currentPath = [...currentPath, name];

    try {
      fn();
    } finally {
      currentPath = previousPath;
    }
  }

  function spec(name: string, fn: () => void): void {
    specs.push({
      name: [...currentPath, name].join(' > '),
      fn,
    });
  }

  function run() {
    const results: TestResult[] = [];

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
