import axios from 'axios';

export const createApplication = (applicationData) =>
  axios.post('/api/applications/', applicationData);

export const fetchApplications = (userId) =>
  axios.get('/api/applications/user/' + userId);

export const deleteApplication = (applicationId) => {
  return axios.delete(`/api/applications/${applicationId}`);
};

export const updateApplication = (applicationData) => {
  return axios.patch(
    `/api/applications/${applicationData.id}`,
    applicationData
  );
};
