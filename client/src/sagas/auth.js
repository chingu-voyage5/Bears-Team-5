import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import * as authActions from '../actions/auth';
import * as userActions from '../actions/user';


/** *****************************************************************
 * Login
 */

const postLoginToAPI = data => axios.post('/api/auth/login', {
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
 * Signup
 */

const postSignupToAPI = data => axios.post('/api/auth/signup', {
  email: data.email,
  password: data.password,
});

export function* signupProcess(action) {
  try {
    const payload = yield call(
      postSignupToAPI,
      action.signupData,
    );
    // User data
    yield put(userActions.userLogin(payload.data));
    yield put(authActions.signup.success());
  } catch (e) {
    yield put(authActions.signup.failure({
      request: e.message,
    }));
  }
}


/** *****************************************************************
 * Watcher
 */

export function* watchAuthRequest() {
  yield all([
    takeEvery(
      authActions.LOGIN.REQUEST,
      loginProcess,
    ),
    takeEvery(
      authActions.SIGNUP.REQUEST,
      signupProcess,
    ),
  ]);
}
