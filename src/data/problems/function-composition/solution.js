export default function compose(functions) {
  return function composed(x) {
    let result = x;

    for (let index = functions.length - 1; index >= 0; index -= 1) {
      result = functions[index](result);
    }

    return result;
  };
}
