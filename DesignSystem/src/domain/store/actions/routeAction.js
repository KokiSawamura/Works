import {
  store,
} from 'domain/store/main';
import {
  Action,
  newAction,
} from 'domain/store/actions/main';

export function setContentRouteAction(route) {
  // Transition of the content, remove all content
  store.dispatch(newAction(
    Action.CONTENT_ROUTE_UPDATE,
    '/transition',
  ));

  // Load new content
  store.dispatch(newAction(
    Action.CONTENT_ROUTE_UPDATE,
    route,
  ));

  // Select menu based on the current route
  store.dispatch(newAction(
    Action.MENU_SELECTED_UPDATE,
    route,
  ));

  // Select tab for contentcl
  store.dispatch(newAction(
    Action.TABS_VISABLE,
    route,
  ));

  // Set pagination
  store.dispatch(newAction(
    Action.UPDATE_PAGINATION,
    route,
  ));
}
