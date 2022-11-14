import {fork, all} from 'redux-saga/effects'

import authRootSaga from "../pages/Auth/redux/authSaga";
import productDetailRootSaga from "../pages/Product/Detail/redux/productDetailSaga";
import productListRootSaga from "../pages/Product/List/redux/productListSaga";

export default function* rootSaga() {
    yield all([
        fork(productDetailRootSaga),
        fork(productListRootSaga),
        fork(authRootSaga)
    ]);
}
