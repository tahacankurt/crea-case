import createSagaMiddleware from 'redux-saga'
import {configureStore} from "@reduxjs/toolkit";
import {all, fork} from 'redux-saga/effects';

// Reducers could combine in another file
import authReducer from './pages/Auth/redux/authState';
import authRootSaga from "./pages/Auth/redux/authSaga";
import LocalStorage from "./utils/localStorage";

const lStorega = new LocalStorage({key: 'auth'});

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: [sagaMiddleware],
    persistedState: lStorega.item
})

// Pair redux auth state with localstorage
store.subscribe(() => lStorega.item = store.getState().auth.payload);

function* rootSaga() {
    yield all([
        fork(authRootSaga)
    ]);
}

sagaMiddleware.run(rootSaga);

export default store;
