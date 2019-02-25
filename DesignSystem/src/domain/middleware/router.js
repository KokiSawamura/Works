import page from 'page';
import { store } from 'domain/store/main';
import { newAction, Action } from 'domain/store/actions/main';
import { Routes } from './routes';
import { setContentRouteAction } from 'domain/store/actions/routeAction';

// Router
function setCurrentRoute(newModule) {
  const current = {
    module: newModule,
  };

  store.dispatch(newAction(
    Action.ROUTER_CURRENT,
    current,
  ));
}

/**
* props PageJS object
*/
function LoadContent(props) {
  const pageRoute = props.pathname;

	// Check valid route
	// RouteList
  let isValidRoute = false;
  let newRoute = Routes.SITE_INDEX;

  for (const route in Routes) {
    if (Routes[route] == pageRoute) {
      isValidRoute = true;
      newRoute = Routes[route];
    }
  }

  if (isValidRoute) {
		// Set current route to state
    setCurrentRoute(
			require('components/site').Site,
		);

		// Set data (content and Sitemap)
    setContentRouteAction(newRoute);
  } else {
    setCurrentRoute(
			require('components/errorPage').ErrorPage,
		);
  }
}

function ErrorPage(props) {
	// Set current route to state
  setCurrentRoute(
		require('components/errorPage').ErrorPage,
	);
}

// Default route
export default function startRouters() {
	// Register valid routes
  for (const route in Routes) {
    page(Routes[route], LoadContent);
  }

  page('*', ErrorPage);
  page();
}
