import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';

export default function configureStore(history, initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(routerMiddleware(history)),
  );
  const syncHistory = syncHistoryWithStore(history, store);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default);
    });
  }

  return { store, syncHistory };
}
