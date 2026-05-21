type CellInput = number | string

function isCellReference(token: string): boolean {
  return /^[A-Z]+[0-9]+$/.test(token);
}

export default class Spreadsheet {
  private cells = new Map<string, CellInput>();

  setCell(cellId: string, input: CellInput): void {
    this.cells.set(cellId, input);
  }

  getCell(cellId: string): number {
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
