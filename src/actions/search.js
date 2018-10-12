export const GET_SEARCH = 'GET_SEARCH';
export const getSearch = search => ({ type: GET_SEARCH, search });

export const GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS';
export const getSearchSuccess = data => ({ type: GET_SEARCH_SUCCESS, data });

export const GET_SEARCH_FAILURE = 'GET_SEARCH_FAILURE';
export const getSearchFailure = error => ({ type: GET_SEARCH_FAILURE, error });
