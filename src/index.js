/* eslint-disable */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Novel from './components/Novel';

const rootElement = document.getElementById('root');

let app;

if (module.hot) {
  app = (
    <AppContainer>
      <Novel />
    </AppContainer>
  );

  module.hot.accept('./components/Novel', () => {
    const NewRoot = require('./components/Novel').default;

    render(
      <AppContainer>
        <NewRoot />
      </AppContainer>,
      rootElement
    );
  });
} else {
  app = <Novel />;
}

render(app, rootElement);
