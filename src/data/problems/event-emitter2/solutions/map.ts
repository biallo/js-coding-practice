type Callback = (...args: unknown[]) => unknown

type Subscription = {
  unsubscribe: () => void
}

export default class EventEmitter {
  private events = new Map<string, Callback[]>();

  subscribe(eventName: string, callback: Callback): Subscription {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }

    const callbacks = this.events.get(eventName) as Callback[];
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

  emit(eventName: string, args: unknown[] = []): unknown[] {
    const callbacks = this.events.get(eventName) ?? [];
    // Return every callback result in subscription order.
    return callbacks.map((callback) => callback(...args));
  }
}
