import { store } from 'domain/store/main';
import { Action, newAction } from 'domain/store/actions/main';

export function setTabsActiveAction(visibleSection) {
  store.dispatch(newAction(
		Action.TABS_ACTIVE_UPDATE,
		visibleSection,
	));
}
