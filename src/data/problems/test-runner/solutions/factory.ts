type Spec = {
  name: string
  fn: () => void
}

type TestResult =
  | { name: string; status: 'passed' }
  | { name: string; status: 'failed'; error: string }

type Check = {
  readonly not: Check
  toBe(expected: unknown): void
}

function normalizeError(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

function createCheck(actual: unknown, isNot: boolean = false): Check {
  return {
    get not() {
      return createCheck(actual, !isNot);
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

export default function createTestRunner() {
  const specs: Spec[] = [];

  return {
    spec(name: string, fn: () => void) {
      specs.push({ name, fn });
    },
    check(actual: unknown) {
      return createCheck(actual);
    },
    run() {
      const results: TestResult[] = [];

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
