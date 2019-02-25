import * as React from 'react';
import { getCurrentColorCookie } from 'domain/middleware/cookie';
import { root } from 'domain/middleware/routes';

require('style/app');
require('rex-css-framework/build/themes/rex-red.css');
require('rex-css-framework/build/themes/rex-yellow.css');
require('rex-css-framework/build/themes/rex-green.css');
require('rex-css-framework/build/themes/rex-blue.css');
require('rex-css-framework/build/themes/rex-dark-blue.css');
require('rex-css-framework/build/themes/rex-purple.css');
require('rex-css-framework/build/themes/rex-pink.css');


export function App(props) {
  const state = props.state;
  const content = state.content;
  const DynamicModule = state.router.current.module;
  const colorSelect = props.state.content.colorSelect;
  let theme;
  if (typeof colorSelect.currentColor !== 'undefined') {
    theme = colorSelect.currentColor;
  } else {
    theme = getCurrentColorCookie();
  }
  const currentTheme = `${root}themes/${theme}.css`;

  return (
    <div id="app" className="container-fluid">
      <link rel="stylesheet" href={currentTheme} />
      {DynamicModule(content)}
    </div>
  );
}
