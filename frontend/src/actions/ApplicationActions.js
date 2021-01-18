import * as ApplicationApiUtil from '../util/ApplicationApiUtil';
export const RECEIVE_APPLICATIONS = 'RECEIVE_APPLICATIONS';
export const RECEIVE_APPLICATION = 'RECEIVE_APPLICATION';
export const RECEIVE_APPLICATION_ERRORS = 'RECEIVE_APPLICATION_ERRORS';
export const CLEAR_APPLICATION_ERRORS = 'CLEAR_APPLICATION_ERRORS';

export const receiveApplication = (payload) => ({
  type: RECEIVE_APPLICATION,
  payload,
});

export const receiveApplications = (payload) => ({
  type: RECEIVE_APPLICATIONS,
  payload,
});

export const receiveApplicationErrors = (errors) => ({
  type: RECEIVE_APPLICATION_ERRORS,
  errors,
});

export const clearApplicationErrors = () => ({
  type: CLEAR_APPLICATION_ERRORS,
});

export const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users,
});

export const fetchUsers = () => (dispatch) => {
  return UserAPI.fetchUsers()
    .then((users) => {
      dispatch(clearUserErrors());
      dispatch(receiveUsers(users.data));
    })
    .catch((errors) => dispatch(receiveUserErrors(errors.response.data)));
};

export const fetchUser = (userId) => (dispatch) => {
  return UserAPI.fetchUser(userId)
    .then((res) => {
      dispatch(clearUserErrors());
      dispatch(receiveUser(res.data));
      return res.data;
    })
    .catch((errors) => dispatch(receiveUserErrors(errors.response.data)));
};

export const updateUser = (user) => (dispatch) => {
  return UserAPI.updateUser(user)
    .then((res) => dispatch(receiveUser(res.data)))
    .catch((errors) => dispatch(receiveUserErrors(errors.response.data)));
};
