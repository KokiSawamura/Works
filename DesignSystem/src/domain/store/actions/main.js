export function newAction(action, data) {
  return {
    data,
    type: action.type,
    reducer: action.reducer,
  };
}

export const Action = {
  ROUTER_CURRENT: {
    type: 'ROUTER_CURRENT',
    reducer: {
      context: 'routerReducer',
      module: 'setCurrentRoute',
    },
  },
  CONTENT_ROUTE_UPDATE: {
    type: 'CONTENT_ROUTE_UPDATE',
    reducer: {
      context: 'routeReducer',
      module: 'setContentRoute',
    },
  },
  MENU_ACTIVE_UPDATE: {
    type: 'MENU_ACTIVE_UPDATE',
    reducer: {
      context: 'menuReducer',
      module: 'setMenuActiveReducer',
    },
  },
  TABS_ACTIVE_UPDATE: {
    type: 'TABS_ACTIVE_UPDATE',
    reducer: {
      context: 'tabsReducer',
      module: 'setTabsActiveReducer',
    },
  },
  MENU_SELECTED_UPDATE: {
    type: 'MENU_SELECTED_UPDATE',
    reducer: {
      context: 'menuReducer',
      module: 'setMenuSelectedReducer',
    },
  },
  TOGGLE_COLOR_PICKER: {
    type: 'TOGGLE_COLOR_PICKER',
    reducer: {
      context: 'colorPickerReducer',
      module: 'toggleColorPicker',
    },
  },
  UPDATE_CURRENT_COLOR: {
    type: 'UPDATE_CURRENT_COLOR',
    reducer: {
      context: 'colorPickerReducer',
      module: 'updateCurrentColor',
    },
  },
  UPDATE_PREVIEW_COLOR: {
    type: 'UPDATE_PREVIEW_COLOR',
    reducer: {
      context: 'colorPickerReducer',
      module: 'updatePreviewColor',
    },
  },
  TOGGLE_LOCALIZATION: {
    type: 'TOGGLE_LOCALIZATION',
    reducer: {
      context: 'localizationReducer',
      module: 'toggleLocalization',
    },
  },
  TOGGLE_LANG_PICKER: {
    type: 'TOGGLE_LANG_PICKER',
    reducer: {
      context: 'localizationReducer',
      module: 'toggleLangPicker',
    },
  },
  UPDATE_CURRENT_LANG: {
    type: 'UPDATE_CURRENT_LANG',
    reducer: {
      context: 'localizationReducer',
      module: 'updateCurrentLang',
    },
  },
  UPDATE_PREVIEW_LANG: {
    type: 'UPDATE_PREVIEW_COLOR',
    reducer: {
      context: 'localizationReducer',
      module: 'updatePreviewLang',
    },
  },
  TABS_VISABLE: {
    type: 'TABS_VISABLE',
    reducer: {
      context: 'tabsReducer',
      module: 'updateTabsVisible',
    },
  },
  SET_SEARCH_TEXT: {
    type: 'SET_SEARCH_TEXT',
    reducer: {
      context: 'searchReducer',
      module: 'updateSearchText',
    },
  },
  GET_SEARCH_RESULTS: {
    type: 'GET_SEARCH_RESULTS',
    reducer: {
      context: 'searchReducer',
      module: 'updateSearchResults',
    },
  },
  CLEAR_SEARCH: {
    type: 'CLEAR_SEARCH',
    reducer: {
      context: 'searchReducer',
      module: 'clearSearch',
    },
  },
  UPDATE_PAGINATION: {
    type: 'UPDATE_PAGINATION',
    reducer: {
      context: 'paginationReducer',
      module: 'updatePagination',
    },
  },
};
