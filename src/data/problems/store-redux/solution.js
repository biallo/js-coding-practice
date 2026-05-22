export function createStore(reducer, preloadedState, enhancer) {
  if (typeof enhancer === 'function') {
    return enhancer(createStore)(reducer, preloadedState);
  }

  let state = preloadedState;
  let listeners = [];

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.push(listener);

    return function unsubscribe() {
      listeners = listeners.filter((current) => current !== listener);
    };
  }

  function dispatch(action) {
    state = reducer(state, action);

    for (const listener of [...listeners]) {
      listener();
    }

    return action;
  }

  dispatch({ type: '@@store/INIT' });

  return { getState, dispatch, subscribe };
}

export function applyMiddleware(...middlewares) {
  return function enhancer(createStoreFn) {
    return function enhancedCreateStore(reducer, preloadedState) {
      const store = createStoreFn(reducer, preloadedState);
      let dispatch = (action) => store.dispatch(action);
      const middlewareApi = {
        getState: store.getState,
        dispatch: (action) => dispatch(action),
      };
      const chain = middlewares.map((middleware) => middleware(middlewareApi));
      dispatch = chain.reduceRight((next, middleware) => middleware(next), store.dispatch);

      return { ...store, dispatch };
    };
  };
}
