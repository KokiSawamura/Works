import { Routes } from 'domain/middleware/routes';
import { MenuList } from './menu';
import { ColorSelect } from './colorSelect';
import { Localization } from './localization';
import { Tabs } from './tabs';
import { Search } from './search';
import { Footer } from './footer';
import { getCookie } from 'domain/middleware/cookie';


getCookie();

export const defaultState = {
  router: {
    current: null,
  },
  content: {
    route: {
      url: Routes.SITE_INDEX,
      contentSource: [],
    },
    menu: MenuList,
    tabs: Tabs,
    colorSelect: ColorSelect,
    localization: Localization,
    search: Search,
    footer: Footer,
  },
};
