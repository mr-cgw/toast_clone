import axios from 'axios';

export const setAuthToken = (token) => {
  token
    ? (axios.defaults.headers.common['Authorization'] = token)
    : delete axios.defaults.headers.common['Authorization'];
};

export const backendSignupUser = (user) =>
  axios.post('/api/users/register', user);

export const backendSigninUser = (user) => {
  console.log(user);
  return axios.post('/api/users/signin', user);
};
export const backendGetUser = (userId) => {
  console.log(userId);
  return axios.get('/api/users/' + userId);
};
