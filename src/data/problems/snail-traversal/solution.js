Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) {
    return [];
  }

  const result = Array.from({ length: rowsCount }, () => Array(colsCount));
  let index = 0;

  for (let col = 0; col < colsCount; col += 1) {
    if (col % 2 === 0) {
      for (let row = 0; row < rowsCount; row += 1) {
        result[row][col] = this[index];
        index += 1;
      }
    } else {
      for (let row = rowsCount - 1; row >= 0; row -= 1) {
        result[row][col] = this[index];
        index += 1;
      }
    }
  }

  return result;
};
