import { setIn } from 'domain/store/reduce/main';

export function toggleColorPicker(state, isOpen) {
  const colorSelect = state.content.colorSelect;

  if (isOpen == true) {
    isOpen = false;
    colorSelect.animation = '';
  } else {
    isOpen = true;
    colorSelect.animation = '';
  }

  colorSelect.isOpen = isOpen;
  return setIn(state, ['content', 'colorSelect'], colorSelect);
}


export function updateCurrentColor(state, color) {
  const colorSelect = state.content.colorSelect;
  colorSelect.currentColor = color;
  return setIn(state, ['content', 'colorSelect'], colorSelect);
}


export function updatePreviewColor(state, color) {
  const colorSelect = state.content.colorSelect;

  colorSelect.previewColor = color;
  return setIn(state, ['content', 'colorSelect'], colorSelect);
}
