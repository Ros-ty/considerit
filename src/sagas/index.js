import { all } from 'redux-saga/effects';
import giphy from './giphy';

export default function* sagas() {
  yield all([
    giphy(),
  ]);
}
