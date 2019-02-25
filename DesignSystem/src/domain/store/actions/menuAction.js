import { store } from 'domain/store/main';
import { Action, newAction } from 'domain/store/actions/main';

export function setMenuActiveAction(id) {
  store.dispatch(newAction(
		Action.MENU_ACTIVE_UPDATE,
		id,
	));
}

