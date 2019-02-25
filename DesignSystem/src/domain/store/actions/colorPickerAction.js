import { store } from 'domain/store/main';
import { Action, newAction } from 'domain/store/actions/main';

export function toggleColorPickerAction(isOpen) {
  store.dispatch(newAction(
		Action.TOGGLE_COLOR_PICKER,
		isOpen,
	));
}

export function updateCurrentColorAction(color) {
  store.dispatch(newAction(
		Action.UPDATE_CURRENT_COLOR,
		color,
	));
}

export function updatePreviewColorAction(color) {
  store.dispatch(newAction(
		Action.UPDATE_PREVIEW_COLOR,
		color,
	));
}
