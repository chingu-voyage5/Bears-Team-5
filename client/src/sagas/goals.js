import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import * as goalsActions from '../actions/goals';


/** *****************************************************************
 * Login
 */

const getDailyGoalsToAPI = () => axios.get('/api/goals/daily');

export function* dailyGoalsProcess() {
  try {
    const payload = yield call(getDailyGoalsToAPI);
    console.log('PAYLOAD: ', payload.data);
    // User data
    yield put(goalsActions.dailyGoals.success(payload.data));
  } catch (e) {
    yield put(goalsActions.dailyGoals.failure({
      request: e.message,
    }));
  }
}


/** *****************************************************************
 * Watcher
 */

export function* watchGoalsRequest() {
  yield all([
    takeEvery(
      goalsActions.DAILY_GOALS.REQUEST,
      dailyGoalsProcess,
    ),
  ]);
}
