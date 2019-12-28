import { createStore, combineReducers } from 'redux'

let reducers = {}
export const store = createStore(s => s)

store.injectReducer = (key, reducer) => {
  reducers[key] = reducer
  store.replaceReducer(combineReducers(reducers))
}
