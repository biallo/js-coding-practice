type Listener = (...args: unknown[]) => void

export default class EventEmitter {
  private _events: Record<string, Listener[]> = Object.create(null);

  on(eventName: string, listener: Listener): this {
    if (!Object.hasOwn(this._events, eventName)) {
      this._events[eventName] = [];
    }

    this._events[eventName].push(listener);
    return this;
  }

  off(eventName: string, listener: Listener): this {
    if (!Object.hasOwn(this._events, eventName)) {
      return this;
    }

    const listeners = this._events[eventName];
    // Remove only the first matching listener, preserving duplicate registrations.
    const index = listeners.findIndex((listenerItem) => listenerItem === listener);

    if (index !== -1) {
      listeners.splice(index, 1);
    }

    return this;
  }

  emit(eventName: string, ...args: unknown[]): boolean {
    if (
      !Object.hasOwn(this._events, eventName) ||
      this._events[eventName].length === 0
    ) {
      return false;
    }

    // Clone so listener mutations during emit do not affect this dispatch.
    const listeners = this._events[eventName].slice();

    for (const listener of listeners) {
      listener.apply(null, args);
    }

    return true;
  }
}
