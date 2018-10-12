export const AUTH = 'AUTH';
export const auth = () => ({ type: AUTH });

export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const authSuccess = data => ({ type: AUTH_SUCCESS, data });

export const AUTH_FAILURE = 'AUTH_FAILURE';
export const authFailure = error => ({ type: AUTH_FAILURE, error });
