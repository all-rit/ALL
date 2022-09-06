/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import {all} from 'redux-saga/effects';
import AuthSaga from './AuthSaga';

export default function* sagas() {
  yield all([AuthSaga()]);
}
