type Action = { type: string; [key: string]: unknown };
type Reducer<S> = (state: S | undefined, action: Action) => S;
type Listener = () => void;
type Dispatch = (action: Action) => Action;

type Store<S> = {
  getState: () => S
  dispatch: Dispatch
  subscribe: (listener: Listener) => () => void
};

type MiddlewareApi<S> = {
  getState: () => S
  dispatch: Dispatch
};

type Middleware<S> = (api: MiddlewareApi<S>) => (next: Dispatch) => Dispatch;

type Enhancer<S> = (
  createStoreFn: typeof createStore<S>,
) => (reducer: Reducer<S>, preloadedState: S) => Store<S>;

export function createStore<S>(
  reducer: Reducer<S>,
  preloadedState: S,
  enhancer?: Enhancer<S>,
): Store<S> {
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, preloadedState);
  }

  let state = preloadedState;
  let listeners: Listener[] = [];

  function getState() {
    return state;
  }

  function subscribe(listener: Listener) {
    listeners.push(listener);

    return function unsubscribe() {
      listeners = listeners.filter((current) => current !== listener);
    };
  }

  function dispatch(action: Action) {
    state = reducer(state, action);

    for (const listener of [...listeners]) {
      listener();
    }

    return action;
  }

  dispatch({ type: '@@store/INIT' });

  return { getState, dispatch, subscribe };
}

export function applyMiddleware<S>(...middlewares: Array<Middleware<S>>) {
  return function enhancer(createStoreFn: typeof createStore<S>) {
    return function enhancedCreateStore(
      reducer: Reducer<S>,
      preloadedState: S,
    ): Store<S> {
      const store = createStoreFn(reducer, preloadedState);
      let dispatch: Dispatch = (action) => store.dispatch(action);
      const middlewareApi: MiddlewareApi<S> = {
        getState: store.getState,
        dispatch: (action) => dispatch(action),
      };
      const chain = middlewares.map((middleware) => middleware(middlewareApi));
      dispatch = chain.reduceRight((next, middleware) => middleware(next), store.dispatch);

      return { ...store, dispatch };
    };
  };
}
