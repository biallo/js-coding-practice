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
  const hasInitialValue = arguments.length >= 2;
  let accumulator: T | U = initialValue as U;
  let startIndex = 0;

  if (!hasInitialValue) {
    while (startIndex < this.length && !(startIndex in this)) {
      startIndex += 1;
    }

    if (startIndex === this.length) {
      throw new TypeError('Reduce of empty array with no initial value');
    }

    accumulator = this[startIndex];
    startIndex += 1;
  }

  for (let index = startIndex; index < this.length; index += 1) {
    if (index in this) {
      accumulator = callbackFn(accumulator, this[index], index, this);
    }
  }

  return accumulator;
};
