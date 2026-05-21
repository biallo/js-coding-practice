Array.prototype.myReduce = function (callbackFn, initialValue) {
  const hasInitialValue = arguments.length >= 2;
  let accumulator = initialValue;
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
