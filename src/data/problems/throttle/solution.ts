export default function throttle(
  func: Function,
  wait: number = 0
): Function {
  let timeoutID: ReturnType<typeof setTimeout> | null = null;

  return function (this: any, ...args: any[]) {
    const context = this;
    if (timeoutID !== null) {
      return;
    }

    func.apply(context, args);

    timeoutID = setTimeout(() => {
      timeoutID = null;
    }, wait);
  };
}