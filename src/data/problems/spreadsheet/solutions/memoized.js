function isCellReference(token) {
  return /^[A-Z]+[0-9]+$/.test(token);
}

export default class Spreadsheet {
  constructor() {
    this.cells = new Map();
  }

  setCell(cellId, input) {
    this.cells.set(cellId, input);
  }

  getCell(cellId) {
    const memo = new Map();

    const evaluateCell = (id) => {
      if (memo.has(id)) {
        return memo.get(id);
      }

      const input = this.cells.get(id);

      if (input === undefined) {
        return 0;
      }

      if (typeof input === 'number') {
        memo.set(id, input);
        return input;
      }

      const value = input
        .slice(1)
        .split('+')
        .reduce((total, token) => {
          const operand = token.trim();
          return total + (isCellReference(operand) ? evaluateCell(operand) : Number(operand));
        }, 0);

      memo.set(id, value);
      return value;
    };

    return evaluateCell(cellId);
  }
}
