// import { put, takeLatest } from 'redux-saga/effects';
// import { AsyncStorage } from 'react-native';
// import {
//   AUTH, authSuccess, authFailure,
// } from '../actions/auth';

// function* auth(token) {
//   try {
//     yield AsyncStorage.setItem('setToken', token.access_token);
//     yield put(authSuccess(token));
//     console.log('=========');
//   } catch (error) {
//     yield put(authFailure(error));
//   }
// }

// export default function* authSaga() {
//   yield takeLatest(AUTH, auth);
// }
