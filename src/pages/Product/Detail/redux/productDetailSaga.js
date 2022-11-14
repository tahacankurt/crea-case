import {fork, all, takeEvery, call, put, delay} from 'redux-saga/effects'
import {createCommentApiRequest, getProductApiRequest, getProductCommentsApiRequest} from "./api";
import {
    createCommentFail,
    createCommentSuccess,
    getCommentsFail,
    getCommentsSuccess,
    getProductFail,
    getProductSuccess
} from "./productDetailState";

function* workGetProductRequest({payload}) {
    try {
        // TODO: Delete delay
        yield delay(700);
        const response = yield  call(getProductApiRequest, payload.productId);
        yield put(getProductSuccess(response))
    } catch (error) {
        // TODO: Err messages can show with toast message
        alert(error);
        yield put(getProductFail(error))
    }
}

function* workGetCommentsRequest({payload}) {
    try {
        // TODO: Delete delay
        yield delay(700);
        const response = yield  call(getProductCommentsApiRequest, payload.productId);
        yield put(getCommentsSuccess(response))
    } catch (error) {
        // TODO: Err messages can show with toast message
        alert(error);
        yield put(getCommentsFail(error))
    }
}

function* workCreateCommentRequest({payload}) {
    try {
        // TODO: Delete delay
        yield delay(700);
        const response = yield  call(createCommentApiRequest, {body: payload.body, productId: payload.productId});
        yield put(createCommentSuccess(response))
    } catch (error) {
        // TODO: Err messages can show with toast message
        // yield put(createCommentFail(error))
    }
}


function* watchGetProductRequest() {
    yield takeEvery('product/detail/getProductRequest', workGetProductRequest)
}

function* watchGetCommentsRequest() {
    yield takeEvery('product/detail/getCommentsRequest', workGetCommentsRequest)
}

function* watchCreateCommentRequest() {
    yield takeEvery('product/detail/createCommentRequest', workCreateCommentRequest)
}


export default function* productDetailRootSaga() {
    // TODO: Destroy async tasks
    yield all([
        fork(watchGetProductRequest),
        fork(watchGetCommentsRequest),
        fork(watchCreateCommentRequest),
    ])
}
