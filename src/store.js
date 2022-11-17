import createSagaMiddleware from 'redux-saga';

import { configureStore } from '@reduxjs/toolkit';
import LocalStorage from './utils/localStorage';

import rootReducer from './redux/reducer';
import rootSaga from './redux/saga';

const lStorage = new LocalStorage({ key: 'auth' });
const sagaMiddleware = createSagaMiddleware();

const storeOptions = {
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  persistedState: lStorage.item,
};

export function setupStore(preloadedState) {
  return configureStore({
    ...storeOptions,
    preloadedState,
  });
}
const store = setupStore();
// Pair redux auth state with localstorage
// eslint-disable-next-line no-return-assign
store.subscribe(() => lStorage.item = store.getState().auth.payload);

sagaMiddleware.run(rootSaga);

export default store;
