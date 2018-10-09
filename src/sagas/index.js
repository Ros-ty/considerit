import { all } from 'redux-saga/effects';
import giphy from './giphy';
import search from './search';

export default function* sagas() {
  yield all([
    search(),
    giphy(),
  ]);
}
