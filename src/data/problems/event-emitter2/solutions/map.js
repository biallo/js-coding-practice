export default class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const callbacks = this.events.get(eventName);
    callbacks.push(callback);

    return {
      unsubscribe: () => {
        // Remove only this subscription, leaving other callbacks intact.
        const index = callbacks.indexOf(callback);

        if (index !== -1) {
          callbacks.splice(index, 1);
        }
      },
    };
  }

  emit(eventName, args = []) {
    const callbacks = this.events.get(eventName) ?? [];
    // Return every callback result in subscription order.
    return callbacks.map((callback) => callback(...args));
  }
}
