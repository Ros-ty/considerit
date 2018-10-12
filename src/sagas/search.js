import { put, call, takeLatest } from 'redux-saga/effects';
import {
  GET_SEARCH, getSearchSuccess, getSearchFailure,
} from '../actions/search';
import { getSearch as getSearchAPI } from '../APIs/search';

function* getSearch(props) {
  try {
    const response = yield call(getSearchAPI, props.search);
    yield put(getSearchSuccess(response.data));
  } catch (error) {
    yield put(getSearchFailure(error));
  }
}

export default function* getSearchSaga() {
  yield takeLatest(GET_SEARCH, getSearch);
}
