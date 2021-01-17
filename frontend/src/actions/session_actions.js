import * as APIUTIL from '../util/session_api_util'
import jwt_decode from "jwt-decode"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";
export const RECEIVE_USER_SIGNUP = "RECEIVE_USER_SIGNUP";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const ERASE_SESSION_ERRORS = "ERASE_SESSION_ERRORS";


const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})
export const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

const eraseErrors = () => ({
  type: RECEIVE_SESSION_ERRORS
})

export const signup = user => dispatch => (
  APIUTIL.signup(user)
    .then(
      res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUTIL.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
      }
    )
    .cathch(err => dispatch(receiveErrors(err.response.data)))
)

export const login = user => dispatch => (
  APIUTIL.login(user)
    .then(
      res => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        APIUTIL.setAuthToken(token);
        const decoded = jwt_decode(token);
        dispatch(receiveCurrentUser(decoded))
      }
    )
    .catch(err => dispatch(receiveErrors(err.response.data)))
)

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken');
  APIUTIL.setAuthToken(false)
  dispatch(logoutUser())
};