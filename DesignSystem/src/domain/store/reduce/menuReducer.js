import { setIn } from 'domain/store/reduce/main';
import { Routes } from 'domain/middleware/routes';

export function setMenuActiveReducer(state, id) {
  const MenuList = state.content.menu;
  let menu = null,
    menuId = null,
    subMenu = null,
    isOpen = false,
    active = false;

  for (const x in MenuList) {
    menu = MenuList[x].menu;

    for (const i in menu) {
      menuId = menu[i].id;
      subMenu = menu[i].subMenu;
      isOpen = menu[i].isOpen;

      if (menuId == id) {
        if (isOpen) {
          isOpen = false;
        } else {
          isOpen = true;
        }
      }

      menu[i].isOpen = isOpen;
    }

    MenuList[x].menu = menu;
  }

  return setIn(state, ['content', 'menu'], MenuList);
}

export function setMenuSelectedReducer(state, route) {
  const MenuList = state.content.menu;
  let menu = null,
    menuId = null,
    subMenu = null,
    isOpen = false,
    isSelected = false,
    active = false;

	// Set default content/route
  if (route == Routes.SITE_INDEX) {
    route = Routes.WHATS_REX;
  }

  for (const x in MenuList) {
    menu = MenuList[x].menu;

    for (const i in menu) {
      active = false;
      isOpen = menu[i].isOpen;
      subMenu = menu[i].subMenu;

      for (const z in subMenu) {
        if (subMenu[z].link == route) {
          isSelected = true;
          active = true;
          isOpen = true;
        } else {
          isSelected = false;
        }

        subMenu[z].isSelected = isSelected;
      }

      menu[i].subMenu = subMenu;
      menu[i].active = active;
      menu[i].isOpen = isOpen;
    }

    MenuList[x].menu = menu;
  }

  return setIn(state, ['content', 'menu'], MenuList);
}
