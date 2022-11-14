import createSagaMiddleware from 'redux-saga'

import {configureStore} from "@reduxjs/toolkit";
import LocalStorage from "./utils/localStorage";

import rootReducer from "./redux/reducer";
import rootSaga from "./redux/saga";

const lStorage = new LocalStorage({key: 'auth'});
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    persistedState: lStorage.item
})

// Pair redux auth state with localstorage
store.subscribe(() => lStorage.item = store.getState().auth.payload);

sagaMiddleware.run(rootSaga);

export default store;
