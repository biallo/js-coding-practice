type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

export default function createCounter(init: number): Counter {
  let value = init;

  return {
    increment() {
      value += 1;
      return value;
    },
    decrement() {
      value -= 1;
      return value;
    },
    reset() {
      value = init;
      return value;
    },
  };
}
