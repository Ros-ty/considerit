import { combineReducers } from 'redux';
import nav from './nav';
import giphy from './giphy';

export default combineReducers({
  giphy,
  nav,
});
