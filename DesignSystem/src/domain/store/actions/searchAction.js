import { store } from 'domain/store/main';
import { Action, newAction } from 'domain/store/actions/main';

export function updateSearchTextAction(text) {
  store.dispatch(newAction(
		Action.SET_SEARCH_TEXT,
		text,
	));
}
export function updateSearchResultsAction() {
  store.dispatch(newAction(
		Action.GET_SEARCH_RESULTS,
	));
}

export function clearSearchAction() {
  store.dispatch(newAction(
		Action.CLEAR_SEARCH,
	));
}
