import { all } from 'redux-saga/effects';
import { watchAuthRequest } from './auth';
import { watchGoalsRequest } from './goals';

export default function* rootSaga() {
  yield all([
    watchAuthRequest(),
    watchGoalsRequest(),
  ]);
}
