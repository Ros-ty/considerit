import { put, takeLatest } from 'redux-saga/effects';
import { AsyncStorage } from 'react-native';
import {
  LOG_OUT, logOutSuccess, logOutFailure,
} from '../actions/logOut';

function* logOut() {
  try {
    yield AsyncStorage.removeItem('setToken');
    yield put(logOutSuccess());
  } catch (error) {
    yield put(logOutFailure(error));
  }
}

export default function* logOutSaga() {
  yield takeLatest(LOG_OUT, logOut);
}
