import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_GIPHY, getGiphySuccess, getGiphyFailure,
} from '../actions/giphy';
import { getGiphy as getGiphyAPI } from '../APIs/giphy';

function* getGiphy() {
  try {
    const response = yield call(getGiphyAPI);
    // console.log('response', response);
    yield put(getGiphySuccess(response));
  } catch (error) {
    yield put(getGiphyFailure(error));
  }
}

export default function* getGiphySaga() {
  yield takeLatest(GET_GIPHY, getGiphy);
}
