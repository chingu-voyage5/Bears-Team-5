import { all } from 'redux-saga/effects';
import { watchAuthRequest } from './auth';

export default function* rootSaga() {
  yield all([
    watchAuthRequest(),
  ]);
}
