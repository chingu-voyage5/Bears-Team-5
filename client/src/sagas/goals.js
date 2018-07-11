import { call, put, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

import * as goalsActions from '../actions/goals';


/** *****************************************************************
 * Login
 */

// const getDailyGoalsToAPI = () => axios.get('/api/goals/daily');

// export function* dailyGoalsProcess() {
//   try {
//     const payload = yield call(getDailyGoalsToAPI);
//     // User data
//     yield put(goalsActions.dailyGoals.success(payload.data));
//   } catch (e) {
//     yield put(goalsActions.dailyGoals.failure({
//       request: e.message,
//     }));
//   }
// }


const postGoalToAPI = data => axios.post('/api/goals/longterm', {
  description: data.description,
});

export function* saveGoalProcess(action) {
  try {
    const payload = yield call(
      postGoalToAPI,
      action.goalData,
    );
    console.log('SAGA GOAL SAVING DATA', payload);

    // User data
    // yield put(userActions.userLogin(payload.data));
    yield put(goalsActions.save.success(payload.data));
  } catch (e) {
    yield put(goalsActions.save.failure({
      request: e.message,
    }));
  }
}

/** *****************************************************************
 * Watcher
 */

export function* watchGoalsRequest() {
  yield all([
    // takeEvery(
    //   goalsActions.DAILY_GOALS.REQUEST,
    //   dailyGoalsProcess,
    // ),
    takeEvery(
      goalsActions.SAVE_GOAL.REQUEST,
      saveGoalProcess,
    ),
  ]);
}
