import { setIn } from 'domain/store/reduce/main';

export function setCurrentRoute(state, RouteCurrent) {
  return setIn(state, ['router', 'current'], RouteCurrent);
}
