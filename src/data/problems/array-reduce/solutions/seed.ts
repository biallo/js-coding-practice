export {};

declare global {
  interface Array<T> {
    myReduce(callbackFn: (accumulator: T, currentValue: T, index: number, array: T[]) => T): T
    myReduce<U>(
      callbackFn: (accumulator: U, currentValue: T, index: number, array: T[]) => U,
      initialValue: U,
    ): U
  }
}

Array.prototype.myReduce = function <T, U>(
  this: T[],
  callbackFn: (accumulator: T | U, currentValue: T, index: number, array: T[]) => T | U,
  initialValue?: U,
): T | U {
  const hasInitialValue = arguments.length > 1;
  let accumulator: T | U;

  if (hasInitialValue) {
    accumulator = initialValue as U;
  } else {
    const firstIndex = this.findIndex((_, index) => index in this);

    if (firstIndex === -1) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    accumulator = this[firstIndex];

    for (let index = firstIndex + 1; index < this.length; index += 1) {
      if (index in this) {
        accumulator = callbackFn(accumulator, this[index], index, this);
      }
    }

    return accumulator;
  }

  for (let index = 0; index < this.length; index += 1) {
    if (index in this) {
      accumulator = callbackFn(accumulator, this[index], index, this);
    }
  }

  return accumulator;
};
