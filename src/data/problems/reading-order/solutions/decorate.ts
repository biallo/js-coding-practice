type RectangleElement = {
  id: string
  x: number
  y: number
  width: number
  height: number
}

export default function readingOrder(elements: RectangleElement[]): string[] {
  return elements
    .map((element) => ({
      id: element.id,
      row: element.y,
      column: element.x,
    }))
    .sort((elementA, elementB) => {
      if (elementA.row !== elementB.row) {
        return elementA.row - elementB.row;
      }

      return elementA.column - elementB.column;
    })
    .map((element) => element.id);
}
