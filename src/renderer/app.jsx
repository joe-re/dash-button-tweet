// @flow

import React from 'react';
import Container from './Container';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
window.React = React;

const store = createStore(reducers, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.getElementById('app')
);
