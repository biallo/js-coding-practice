Array.prototype.myReduce = function (callbackFn, initialValue) {
  const hasInitialValue = arguments.length > 1;
  let accumulator;

  if (hasInitialValue) {
    accumulator = initialValue;
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
