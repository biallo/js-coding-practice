type Spec = {
  name: string
  fn: () => void
}

type TestResult =
  | { name: string; status: 'passed' }
  | { name: string; status: 'failed'; error: string }

function createMatcher(actual: unknown, notCount: number = 0) {
  return {
    get not() {
      return createMatcher(actual, notCount + 1);
    },
    toBe(expected: unknown) {
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

function getErrorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

export default function createTestRunner() {
  const specs: Spec[] = [];
  const suiteStack: string[] = [];

  function suite(name: string, fn: () => void): void {
    suiteStack.push(name);

    try {
      fn();
    } finally {
      suiteStack.pop();
    }
  }

  function spec(name: string, fn: () => void): void {
    const fullName = [...suiteStack, name].join(' > ');
    specs.push({ name: fullName, fn });
  }

  function check(actual: unknown) {
    return createMatcher(actual);
  }

  function run() {
    const results: TestResult[] = [];
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

  return { suite, spec, check, run };
}
