import * as ApplicationApiUtil from '../util/ApplicationApiUtil';
export const RECEIVE_APPLICATIONS = 'RECEIVE_APPLICATIONS';
export const RECEIVE_APPLICATION = 'RECEIVE_APPLICATION';
export const RECEIVE_APPLICATION_ERRORS = 'RECEIVE_APPLICATION_ERRORS';
export const CLEAR_APPLICATION_ERRORS = 'CLEAR_APPLICATION_ERRORS';
export const DELETE_APPLICATION = 'DELETE_APPLICATION';

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

export const deleteApplication = (applicationId) => ({
  type: DELETE_APPLICATION,
  payload: applicationId,
});

export const fetchApplications = (userId) => (dispatch) => {
  return ApplicationApiUtil.fetchApplications(userId)
    .then((applications) => {
      const { data } = applications;
      const payload = {};
      data.forEach((application) => {
        payload[application._id] = application;
      });
      dispatch(receiveApplications(payload));
    })
    .catch((errors) =>
      dispatch(receiveApplicationErrors(errors.response.data))
    );
};

export const postApplication = (applicationData) => (dispatch) => {
  return ApplicationApiUtil.createApplication(
    applicationData
  ).then((applicationData) => dispatch(receiveApplication(applicationData)));
};

export const fetchApplication = (applicationId) => (dispatch) => {
  return ApplicationApiUtil.fetchApplication(applicationId)
    .then((application) => {
      dispatch(receiveApplication(application));
    })
    .catch((errors) =>
      dispatch(receiveApplicationErrors(errors.response.data))
    );
};

export const updateApplication = (applicationData) => (dispatch) => {
  return ApplicationApiUtil.updateApplication(applicationData)
    .then((application) => {
      dispatch(receiveApplication(application));
    })
    .catch((errors) =>
      dispatch(receiveApplicationErrors(errors.response.data))
    );
};

export const removeApplication = (applicationId) => (dispatch) => {
  return ApplicationApiUtil.deleteApplication(applicationId)
    .then(() => {
      dispatch(deleteApplication(applicationId));
    })
    .catch((errors) =>
      dispatch(receiveApplicationErrors(errors.response.data))
    );
};
