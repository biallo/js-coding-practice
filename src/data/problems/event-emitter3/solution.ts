type Listener = (...args: unknown[]) => void;

type ListenerEntry = {
  listener: Listener
  once: boolean
};

export default class EventEmitter {
  private readonly listeners = new Map<string, ListenerEntry[]>();

  on(eventName: string, listener: Listener): this {
    return this.addListener(eventName, listener, false);
  }

  once(eventName: string, listener: Listener): this {
    return this.addListener(eventName, listener, true);
  }

  off(eventName: string, listener: Listener): this {
    const entries = this.listeners.get(eventName);

    if (!entries) {
      return this;
    }

    const index = entries.findIndex((entry) => entry.listener === listener);

    if (index !== -1) {
      entries.splice(index, 1);
    }

    if (entries.length === 0) {
      this.listeners.delete(eventName);
    }

    return this;
  }

  emit(eventName: string, ...args: unknown[]): boolean {
    const entries = this.listeners.get(eventName);

    if (!entries || entries.length === 0) {
      return false;
    }

    for (const entry of [...entries]) {
      if (entry.once) {
        this.off(eventName, entry.listener);
      }

      entry.listener(...args);
    }

    return true;
  }

  private addListener(eventName: string, listener: Listener, once: boolean): this {
    const entries = this.listeners.get(eventName) ?? [];
    entries.push({ listener, once });
    this.listeners.set(eventName, entries);
    return this;
  }
}
