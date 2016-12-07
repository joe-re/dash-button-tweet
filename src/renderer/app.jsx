// @flow

import React from 'react';
import Container from './Container';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
window.React = React;

const store = createStore(reducers);

render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('app')
);
