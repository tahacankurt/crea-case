import createSagaMiddleware from 'redux-saga'
import {configureStore} from "@reduxjs/toolkit";
import {all, fork} from 'redux-saga/effects';

import LocalStorage from "./utils/localStorage";

// Reducers could combine in another file
import authRootSaga from "./pages/Auth/redux/authSaga";
import authReducer from './pages/Auth/redux/authState';

import productListRootSaga from "./pages/Product/List/redux/productListSaga";
import productListReducer from "./pages/Product/List/redux/productListState";

const lStorega = new LocalStorage({key: 'auth'});

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    reducer: {
        auth: authReducer,
        productList: productListReducer,
    },
    middleware: [sagaMiddleware],
    persistedState: lStorega.item
})

// Pair redux auth state with localstorage
store.subscribe(() => lStorega.item = store.getState().auth.payload);

function* rootSaga() {
    yield all([
        fork(authRootSaga),
        fork(productListRootSaga),

    ]);
}

sagaMiddleware.run(rootSaga);

export default store;
