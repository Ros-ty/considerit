import * as ACTIONS from '../actions/search';

const initialState = {
  search: [],
  error: null,
  isLoading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.GET_SEARCH:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.GET_SEARCH_SUCCESS:
      console.log('action GET_SEARCH', action.data);
      return {
        ...state,
        search: action.data,
        isLoading: false,
      };
    case ACTIONS.GET_SEARCH_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
