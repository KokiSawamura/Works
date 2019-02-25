// @flow
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { state } from 'domain/store/main';

// This function is responsible for rendering the application
export default function render() : void {
  const App = require('components/app').App;

  // Pass all props to the App component, and render to the target DOM element.
  ReactDOM.render(
    <App state={state()} />,
    document.getElementById('rex-web')
  );
}

// Start hot module
if (module.hot) {
  module.hot.accept('components/app', () => {
    render();
  });
}
