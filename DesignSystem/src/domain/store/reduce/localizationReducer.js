import { setIn } from 'domain/store/reduce/main';

export function toggleLocalization(state, isOpen) {
  const localization = state.content.localization;

  if (isOpen == true) {
    isOpen = false;
    localization.animation = '';
  } else {
    isOpen = true;
    localization.animation = '';
  }

  localization.isOpen = isOpen;
  return setIn(state, ['content', 'localization'], localization);
}

export function toggleLangPicker(state, isOpen) {
  const localization = state.content.localization;

  if (isOpen == true) {
    isOpen = false;
    localization.animation = '';
  } else {
    isOpen = true;
    localization.animation = '';
  }

  localization.isSelectOpen = isOpen;
  return setIn(state, ['content', 'localization'], localization);
}

export function updateCurrentLang(state, lang) {
  const localization = state.content.localization;
  localization.currentLang = lang;
  return setIn(state, ['content', 'localization'], localization);
}

export function updatePreviewLang(state, lang) {
  const localization = state.content.localization;
  localization.previewLang = lang;
  return setIn(state, ['content', 'localization'], localization);
}
