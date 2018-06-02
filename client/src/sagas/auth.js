import { call, put, takeEvery, fork } from 'redux-saga/effects';
import axios from 'axios';

import * as authActions from '../actions/auth';
import * as userActions from '../actions/user';


/** *****************************************************************
 * Login
 */

const postLoginToAPI = data => axios.post('/api/login', {
  email: data.email,
  password: data.password,
});

export function* loginProcess(action) {
  try {
    const payload = yield call(
      postLoginToAPI,
      action.loginData,
    );
    // User data
    yield put(userActions.userLogin(payload.data));
    yield put(authActions.login.success());
  } catch (e) {
    yield put(authActions.login.failure({
      request: e.message,
    }));
  }
}


/** *****************************************************************
 * Watcher
 */

export function* watchAuthRequest() {
  yield fork(
    takeEvery,
    authActions.LOGIN.REQUEST,
    loginProcess,
  );
}
