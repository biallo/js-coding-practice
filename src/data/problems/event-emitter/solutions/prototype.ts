type Listener = (...args: unknown[]) => void

type Events = Record<string, Listener[]>

export default function EventEmitter(this: { _events: Events }) {
  // Avoid prototype keys like toString colliding with event names.
  this._events = Object.create(null);
}

EventEmitter.prototype.on = function on(
  this: { _events: Events },
  eventName: string,
  listener: Listener
) {
  if (!Object.hasOwn(this._events, eventName)) {
    this._events[eventName] = [];
  }

  this._events[eventName].push(listener);
  return this;
};

EventEmitter.prototype.off = function off(
  this: { _events: Events },
  eventName: string,
  listener: Listener
) {
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
};

EventEmitter.prototype.emit = function emit(
  this: { _events: Events },
  eventName: string,
  ...args: unknown[]
) {
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
};
