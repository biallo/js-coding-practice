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
    const input = this.cells.get(cellId);

    if (input === undefined) {
      return 0;
    }

    if (typeof input === 'number') {
      return input;
    }

    return input
      .slice(1)
      .split('+')
      .reduce((total, token) => {
        const operand = token.trim();
        const value = isCellReference(operand) ? this.getCell(operand) : Number(operand);
        return total + value;
      }, 0);
  }
}
