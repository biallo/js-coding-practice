type Callback = (...args: unknown[]) => unknown

type Subscription = {
  unsubscribe: () => void
}

export default class EventEmitter {
  private events: Record<string, Callback[]> = Object.create(null);

  subscribe(eventName: string, callback: Callback): Subscription {
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

  emit(eventName: string, args: unknown[] = []): unknown[] {
    if (!Object.hasOwn(this.events, eventName)) {
      return [];
    }

    return this.events[eventName].map((callback) => callback(...args));
  }
}
