type Fn = (x: number) => number;

export default function compose(functions: Fn[]): Fn {
  return function composed(x: number): number {
    let result = x;

    for (let index = functions.length - 1; index >= 0; index -= 1) {
      result = functions[index](result);
    }

    return result;
  };
}
