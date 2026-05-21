type RectangleElement = {
  id: string
  x: number
  y: number
  width: number
  height: number
}

export default function readingOrder(elements: RectangleElement[]): string[] {
  return [...elements]
    .sort((elementA, elementB) => {
      if (elementA.y !== elementB.y) {
        return elementA.y - elementB.y;
      }

      return elementA.x - elementB.x;
    })
    .map((element) => element.id);
}
