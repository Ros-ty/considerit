import { combineReducers } from 'redux';
import nav from './nav';
import giphy from './giphy';
import search from './search';

export default combineReducers({
  giphy,
  search,
  nav,
});
