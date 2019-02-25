import { setIn } from 'domain/store/reduce/main';
import { OVERVIEW, VISUAL_CONCEPTS, LOGO, DOWNLOADS, MOTION, ICON_REGULATIONS, SITE_INDEX, Routes } from 'domain/middleware/routes';


export function setTabsActiveReducer(state, cookieValue) {
  const TabsList = state.content.tabs;

  if (cookieValue == 'designer') {
    TabsList.list[0].active = true;
    TabsList.list[1].active = false;
  } else if (cookieValue == 'developer') {
    TabsList.list[0].active = false;
    TabsList.list[1].active = true;
  }

  return setIn(state, ['content', 'tabs'], TabsList);
}

export function updateTabsVisible(state, route) {
  const TabsList = state.content.tabs;
  if (
   route === SITE_INDEX ||
   route.indexOf(OVERVIEW) > -1 ||
   route.indexOf(VISUAL_CONCEPTS) > -1 ||
   route.indexOf(LOGO) > -1 ||
   route.indexOf(DOWNLOADS) > -1 ||
   route.indexOf(Routes.TYPOGRAPHY) > -1 ||
   route.indexOf(Routes.GRID) > -1 ||
   route.indexOf(Routes.BREAK_POINTS) > -1 ||
   route.indexOf(Routes.TABLES) > -1 ||
   route.indexOf(Routes.FORMS) > -1 ||
   route.indexOf(Routes.BUTTONS_STATES) > -1 ||
   route.indexOf(Routes.RESPONSIVE_IMAGES) > -1 ||
   route.indexOf(Routes.SWATCHES) > -1 ||
   route.indexOf(Routes.REX_MOTION) > -1 ||
   route.indexOf(Routes.DURATION_EASING) > -1 ||
   route.indexOf(Routes.TRANSFORMATION) > -1 ||
   route.indexOf(Routes.VERTICAL_FORM) > -1 ||
   route.indexOf(Routes.INLINE_FORM) > -1 ||
   route.indexOf(Routes.COLORS) > -1 ||
   route.indexOf(Routes.ICON_REGULATIONS) > -1
  ) {
    TabsList.enabled = false;
    TabsList.list[0].active = true;
    TabsList.list[1].active = false;
  } else {
    TabsList.enabled = true;
  }
  return setIn(state, ['content', 'tabs'], TabsList);
}
