import {
  fork, all, takeEvery, call, put, delay,
} from 'redux-saga/effects';
// eslint-disable-next-line import/no-cycle
import { getProductsApiRequest } from './api';
import { getProductsFail, getProductsSuccess } from './productListState';

function* workGetProductsRequest() {
  try {
    // TODO: Delete delay
    yield delay(700);
    const response = yield call(getProductsApiRequest);
    yield put(getProductsSuccess(response));
  } catch (error) {
    // TODO: Err messages can show in toast message
    yield put(getProductsFail(error));
  }
}

function* watchGetProductsRequest() {
  yield takeEvery('product/list/getProductsRequest', workGetProductsRequest);
}

export default function* productListRootSaga() {
  yield all([
    fork(watchGetProductsRequest),
  ]);
}
