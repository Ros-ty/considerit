import * as ACTIONS from '../actions/giphy';

const initialState = {
  giphy: [],
  error: null,
  isLoading: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.GET_GIPHY:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.GET_GIPHY_SUCCESS:
      console.log('action GET_GIPHY', action.data.data);
      return {
        ...state,
        giphy: action.data.data,
        isLoading: false,
      };
    case ACTIONS.GET_GIPHY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case ACTIONS.GET_SEARCH:
      return {
        ...state,
        isLoading: true,
      };
    case ACTIONS.GET_SEARCH_SUCCESS:
      console.log('action GET_SEARCH', action.data);
      return {
        ...state,
        giphy: action.data,
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
