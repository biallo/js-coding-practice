type Comparable = string | number | bigint | boolean | Date

type MinState<T> = {
  element: T | undefined
  value: Comparable | undefined
}

export default function minBy<T>(
  array: T[],
  iteratee: (value: T) => Comparable | null | undefined,
): T | undefined {
  return array.reduce<MinState<T>>(
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
