import * as SessionApiUtil from '../ApiUtils/SessionApiUtil';
import jwt_decode from 'jwt-decode';
export const RECEIVE_USER = 'RECEIVE_USER';
export const RECEIVE_USER_SIGNOUT = 'RECEIVE_USER_SIGNOUT';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_USER_ERRORS = 'CLEAR_USER_ERRORS';

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  payload: errors,
});

export const clearErrors = () => ({
  type: CLEAR_USER_ERRORS,
});

export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  payload: user,
});

export const receiveUserSignOut = () => ({
  type: RECEIVE_USER_SIGNOUT,
});

export const signoutUserAction = () => (dispatch) => {
  localStorage.removeItem('jwtToken');
  dispatch(receiveUserSignOut());
};

export const signin = (user) => (dispatch) => {
  SessionApiUtil.backendSigninUser(user)
    .then((user) => {
      console.log('user', user);
      const { token } = user.data;
      localStorage.setItem('jwtToken', token);
      SessionApiUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveUser(user.data.user));
    })
    .catch((err) => {
      console.log('err', err);
      dispatch(receiveSessionErrors(err.response.data));
    });
};
export const signup = (user) => (dispatch) => {
  SessionApiUtil.backendSignupUser(user)
    .then((res) => {
      console.log(res);
      dispatch(signin(user));
    })
    .catch((err) => dispatch(receiveSessionErrors(err.response.data)));
};
export const getUser = (userId) => (dispatch) => {
  SessionApiUtil.backendGetUser(userId)
    .then((res) => {
      console.log(res);
      dispatch(receiveUser(res.data));
    })
    .catch((err) => dispatch(receiveSessionErrors(err.response.data)));
};
