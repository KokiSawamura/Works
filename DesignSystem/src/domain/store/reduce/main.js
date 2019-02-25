import { defaultState } from 'domain/store/state/main';
import { Action } from 'domain/store/actions/main';
import { fromJS } from 'immutable';

export function reduceApp(state = defaultState, action) {
  if (typeof Action[action.type] !== 'undefined') {
    try {
		  const reducer = require(`domain/store/reduce/${action.reducer.context}`);
      const newState = reducer[action.reducer.module](state, action.data);

      return newState;
    } catch (e) {
			// if (ENV_TYPE !== 'production') {//eslint-disable-line
				console.error('Module not found');//eslint-disable-line
				console.log(e);//eslint-disable-line
			// }

      return state;
    }
  } else {
    return state;
  }
}

export function setIn(state, key, data) {
  return fromJS(state).setIn(key, data).toJS();
}
