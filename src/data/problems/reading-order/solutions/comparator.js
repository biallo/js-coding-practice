export default function readingOrder(elements) {
  return [...elements]
    .sort((elementA, elementB) => {
      if (elementA.y !== elementB.y) {
        return elementA.y - elementB.y;
      }

      return elementA.x - elementB.x;
    })
    .map((element) => element.id);
}
