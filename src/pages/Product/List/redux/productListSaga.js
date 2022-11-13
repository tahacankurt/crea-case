import {fork, all, takeEvery, call, put, delay} from 'redux-saga/effects'
import {getProductsApiRequest} from "./api";
import {getProductsFail, getProductsSuccess} from "./productListState";

function* workGetProductsRequest() {
    try {
        // TODO: Delete delay
        yield delay(700);
        const response = yield  call(getProductsApiRequest);
        yield put(getProductsSuccess(response))
    } catch (error) {
        // TODO: Err messages can show with toast message
        yield put(getProductsFail(error))
    }
}

function* watchGetProductsRequest() {
    yield takeEvery('productList/getProductsRequest', workGetProductsRequest)
}

export default function* productListRootSaga() {
    // TODO: Terminate loops/async tasks when component destroyed
    yield all([
        fork(watchGetProductsRequest),
    ])
}
