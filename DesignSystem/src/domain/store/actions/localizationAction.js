import { store } from 'domain/store/main';
import { Action, newAction } from 'domain/store/actions/main';

export function toggleLocalizationAction(isOpen) {
  store.dispatch(newAction(
    Action.TOGGLE_LOCALIZATION,
    isOpen,
  ));
}

export function toggleLanguagePickerAction(isOpen) {
  store.dispatch(newAction(
    Action.TOGGLE_LANG_PICKER,
    isOpen,
  ));
}

export function updateCurrentLangAction(lang) {
  store.dispatch(newAction(
    Action.UPDATE_CURRENT_LANG,
    lang,
  ));
}

export function updatePreviewLangAction(lang) {
  store.dispatch(newAction(
    Action.UPDATE_PREVIEW_LANG,
    lang,
  ));
}
