import { call, put, takeLatest } from 'redux-saga/effects';
import { types } from '../reducers/AppReducer';
import AuthService from '../services/AuthService';

function authApi() {
	return AuthService.getUser();
}

function* authFlow() {
	try {
		const user = yield call(authApi);

		yield put({ type: types.UPDATE_USER, user });
	} catch (e) {
		return null;
	}
}

function* authSaga() {
	yield takeLatest(types.LOGIN, authFlow);
}

export default authSaga;
