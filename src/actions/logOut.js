export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({ type: LOG_OUT });

export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const logOutSuccess = () => ({ type: LOG_OUT_SUCCESS });

export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
export const logOutFailure = error => ({ type: LOG_OUT_FAILURE, error });
