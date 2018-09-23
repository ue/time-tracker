import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './pages/Root';
import { configureStore, history } from './store/configureStore';
// import rendererStore from './store/rendererStore';
// Main Style
import './assets/styles/app.global.scss';

const store = configureStore();

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./pages/Root', () => {
    /* eslint-disable-next-line */
    const NextRoot = require('./pages/Root');

    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
