// @flow
import render from './renderer';
import { store } from 'domain/store/main';
import startRouters from 'domain/middleware/router';

// Subscribe to the store and to ensure it will re-render your app
store.subscribe(render);

// Start routing
// @see domain/middleware/router.js
startRouters();

// //DEBUG
// if(ENV_TYPE == 'development') {
// 	require('debug/sitemapTable');
// }
