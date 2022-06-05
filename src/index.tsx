import ReactDOM from 'react-dom';
import './reset.scss';
import './index.scss';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AppContainer />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
