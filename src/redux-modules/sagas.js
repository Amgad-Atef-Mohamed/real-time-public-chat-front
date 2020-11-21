import { all, fork } from 'redux-saga/effects';
import userSaga from './user/sagas';
import chatSaga from './chat/sagas';

const sagas = [userSaga, chatSaga];

export default function* rootSaga() {
  yield all(sagas.map(saga => fork(saga)));
}
