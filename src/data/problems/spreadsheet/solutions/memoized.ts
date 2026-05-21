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
    const memo = new Map<string, number>();

    const evaluateCell = (id: string): number => {
      if (memo.has(id)) {
        return memo.get(id) as number;
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
