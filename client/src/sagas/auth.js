import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import * as authActions from '../actions/auth';
import * as userActions from '../actions/user';


/** *****************************************************************
 * Login
 */

const postSigninToAPI = data => axios.post('/api/auth/login', {
  email: data.email,
  password: data.password,
});

export function* signinProcess(action) {
  try {
    const payload = yield call(
      postSigninToAPI,
      action.signinData,
    );
    // User data
    yield put(userActions.userLogin(payload.data));
    yield put(authActions.signin.success());
  } catch (e) {
    yield put(authActions.signin.failure({
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
      authActions.SIGNIN.REQUEST,
      signinProcess,
    ),
    takeEvery(
      authActions.SIGNUP.REQUEST,
      signupProcess,
    ),
  ]);
}
