import { useState, useLayoutEffect } from "react"
import { createStore, combineReducers } from 'redux'

let reducers = {}
export const store = createStore(s => s)

store.injectReducer = (key, reducer) => {
  reducers[key] = reducer
  store.replaceReducer(combineReducers(reducers))
}

export const useRedux = (storeKey, initialState, reducers) => {
  store.injectReducer(storeKey, (state = initialState, { type, payload }) =>
    reducers[type] ? reducers[type](state, payload) : state
  );

  const useSlice = () => {
    const [state, setState] = useState(() => getState());
    useLayoutEffect(() => subscribe(v => setState(() => v)), [setState]);
    return state;
  };

  const dispatchers = {};
  for (let type in reducers)
    dispatchers[type] = payload => store.dispatch({ type, payload });

  const getState = () => store.getState()[storeKey];

  const subscribe = f => {
    let lastState = getState();
    return store.subscribe(
      () => lastState !== getState() && f((lastState = getState()))
    );
  };

  return [useSlice, dispatchers, { getState, subscribe }];
}
