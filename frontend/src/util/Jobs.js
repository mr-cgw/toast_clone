import axios from 'axios';

export const fetchJobs = () => axios.get('/api/jobs/');
