import { createStore } from 'redux';
import { reduceApp } from 'domain/store/reduce/main';

import type { State } from 'domain/store/state/main';

// Create the store and make it an importable constant
let storeApp = null;

if (ENV_TYPE === 'development') {
	storeApp = createStore(reduceApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
} else {
	storeApp = createStore(reduceApp);
}

export const store = storeApp;

// We use this wrapper function so that we can have type checking
export function state() : State {
  return store.getState();
}
