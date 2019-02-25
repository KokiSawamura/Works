import { setIn } from 'domain/store/reduce/main';
import { Routes } from 'domain/middleware/routes';

const DataSource = require.context('assets/json', true, /\.json$/);

export function setContentRoute(state, route) {
  let jsonSource = route;
  let contentSource = '';
  if (route == Routes.SITE_INDEX || route == Routes.SITE_ROOT) {
    jsonSource = Routes.WHATS_REX;
  }

  let jsonFile = `.${jsonSource}.json`;
  jsonFile = jsonFile.replace('/.json', '.json');

  try {
    contentSource = DataSource(jsonFile);
  } catch (e) {
    contentSource = DataSource('./error.json');
  }

  const routeNew = {
    url: route,
    contentSource,
  };

  return setIn(state, ['content', 'route'], routeNew);
}
