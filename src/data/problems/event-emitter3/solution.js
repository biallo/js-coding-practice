export default class EventEmitter {
  constructor() {
    this.listeners = new Map();
  }

  on(eventName, listener) {
    return this.addListener(eventName, listener, false);
  }

  once(eventName, listener) {
    return this.addListener(eventName, listener, true);
  }

  off(eventName, listener) {
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

  emit(eventName, ...args) {
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

  addListener(eventName, listener, once) {
    const entries = this.listeners.get(eventName) ?? [];
    entries.push({ listener, once });
    this.listeners.set(eventName, entries);
    return this;
  }
}
