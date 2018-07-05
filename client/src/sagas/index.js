import { all } from 'redux-saga/effects';
import { watchAuthRequest } from './auth';
import { watchGoalsRequest } from './goals';
import { watchUserRequest } from './user';

export default function* rootSaga() {
  yield all([
    watchAuthRequest(),
    watchUserRequest(),
    watchGoalsRequest(),
  ]);
}
