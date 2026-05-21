export default function minBy(array, iteratee) {
  return array.reduce(
    (state, element) => {
      const value = iteratee(element);

      if (value == null) {
        return state;
      }

      if (state.value === undefined || value < state.value) {
        return { element, value };
      }

      return state;
    },
    { element: undefined, value: undefined },
  ).element;
}
