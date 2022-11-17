import {
  fork, all, takeEvery, call, put, delay,
} from 'redux-saga/effects';

import loginApiRequest from './api';
import {
  loginFail, loginSuccess, logOutFail, logOutSuccess,
} from './authState';

function* workLoginRequest({ payload }) {
  const { email, password } = payload.formData;
  const { navigate } = payload;

  try {
    // TODO: Delete delay
    yield delay(500);
    const response = yield call(loginApiRequest, { email, password });
    yield put(loginSuccess(response));
    yield put(navigate('/'));
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* workLogoutRequest() {
  try {
    yield put(logOutSuccess());
    // There is no logout endpoint on fake json server,
    // but in real life the backend needs to terminate auth token || call api
  } catch (error) {
    yield put(logOutFail(error));
  }
}

function* watchLoginRequest() {
  yield takeEvery('auth/loginRequest', workLoginRequest);
}

function* watchLogOutRequest() {
  yield takeEvery('auth/logOutRequest', workLogoutRequest);
}

export default function* authRootSaga() {
  // TODO: Terminate loops/async tasks when component destroyed
  yield all([
    fork(watchLoginRequest),
    fork(watchLogOutRequest),
  ]);
}
