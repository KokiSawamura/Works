import { getCurrentColorCookie } from 'domain/middleware/cookie';

const COLOR = {
  RED: 'red',
  YELLOW: 'yellow',
  GREEN: 'green',
  BLUE: 'blue',
  DARKBLUE: 'dark-blue',
  PURPLE: 'purple',
  PINK: 'pink',
};

const ColorSelectData = {
  currentColor: 'default',
  previewColor: 'default',
  isOpen: false,
  animation: '',
  colors: [
    COLOR.RED,
    COLOR.YELLOW,
    COLOR.GREEN,
    COLOR.BLUE,
    COLOR.DARKBLUE,
    COLOR.PURPLE,
    COLOR.PINK,
  ],
};
ColorSelectData.currentColor = getCurrentColorCookie();

export const ColorSelect = ColorSelectData;
