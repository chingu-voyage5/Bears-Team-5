import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import { getUser, GET_USER } from '../actions/user';


/** *****************************************************************
 * GET authed user
 */

const getUserFromAPI = () => axios.get('/api/auth/user');

export function* getUserProcess() {
  try {
    const payload = yield call(getUserFromAPI);
    // User data
    yield put(getUser.success(payload.data));
  } catch (e) {
    yield put(getUser.failure({
      request: e.message,
    }));
  }
}


/** *****************************************************************
 * Watcher
 */

export function* watchUserRequest() {
  yield all([
    takeEvery(
      GET_USER.REQUEST,
      getUserProcess,
    ),
  ]);
}
