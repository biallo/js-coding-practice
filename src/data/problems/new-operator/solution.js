export default function myNew(Constructor, ...args) {
  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);

  if ((typeof result === 'object' && result !== null) || typeof result === 'function') {
    return result;
  }

  return instance;
}
