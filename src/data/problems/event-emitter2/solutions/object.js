export default class EventEmitter {
  constructor() {
    this.events = Object.create(null);
  }

  subscribe(eventName, callback) {
    if (!Object.hasOwn(this.events, eventName)) {
      this.events[eventName] = [];
    }

    const callbacks = this.events[eventName];
    callbacks.push(callback);

    return {
      unsubscribe: () => {
        // Remove only the callback registered by this subscription object.
        const index = callbacks.indexOf(callback);

        if (index !== -1) {
          callbacks.splice(index, 1);
        }
      },
    };
  }

  emit(eventName, args = []) {
    if (!Object.hasOwn(this.events, eventName)) {
      return [];
    }

    return this.events[eventName].map((callback) => callback(...args));
  }
}
