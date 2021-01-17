import axios from 'axios';

export const currentUserDetails = (user) => ({
  ...user,
  id: user._id,
  name: user.name,
  avatarUrl: user.avatarUrl,
});

export const fetchUsers = () => axios.get('/api/users');

export const fetchUser = (userId) => {
  return axios.get(`/api/users/${userId}`);
};

export const updateUser = (userData) => {
  return axios.patch(`/api/users/${userData.id}`, userData);
};
