import React from 'react';
import ReactDOM from 'react-dom';
import './reset.scss';
import { Provider } from 'react-redux';
import store from './redux/redux-store';
import AppContainer from './AppContainer';


ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);
