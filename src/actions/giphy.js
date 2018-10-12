export const GET_GIPHY = 'GET_GIPHY';
export const getGiphy = () => ({ type: GET_GIPHY });

export const GET_GIPHY_SUCCESS = 'GET_GIPHY_SUCCESS';
export const getGiphySuccess = data => ({ type: GET_GIPHY_SUCCESS, data });

export const GET_GIPHY_FAILURE = 'GET_GIPHY_FAILURE';
export const getGiphyFailure = error => ({ type: GET_GIPHY_FAILURE, error });
