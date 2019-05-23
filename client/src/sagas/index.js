import { all } from 'redux-saga/effects';
import AuthSaga from './AuthSaga';

export default function* sagas() {
	yield all([ AuthSaga() ]);
}
