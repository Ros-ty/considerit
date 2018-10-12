import { all } from 'redux-saga/effects';
import giphy from './giphy';
import search from './search';
import logOut from './logOut';
// import auth from './auth';

export default function* sagas() {
  yield all([
    // auth(),
    logOut(),
    search(),
    giphy(),
  ]);
}
