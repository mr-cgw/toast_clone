import * as JobsApiUtil from '../util/Jobs';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';

export const receiveJobs = (payload) => ({
  type: RECEIVE_JOBS,
  payload,
});

export const fetchJobs = () => (dispatch) =>
  JobsApiUtil.fetchJobs().then((jobs) => {
    // console.log('jobs', jobs);
    const backend = jobs.data[0].backend;
    for (const key in backend) {
      backend[key].category = 'backend';
      backend[key].time = new Date(backend[key].createdAt).getTime();
    }
    const frontend = jobs.data[0].frontend;
    for (const key in frontend) {
      frontend[key].category = 'frontend';
      frontend[key].time = new Date(frontend[key].createdAt).getTime();
    }
    const fullstack = jobs.data[0].fullstack;
    for (const key in fullstack) {
      fullstack[key].category = 'fullstack';
      fullstack[key].time = new Date(fullstack[key].createdAt).getTime();
    }
    const payload = [
      ...Object.values(backend),
      ...Object.values(frontend),
      ...Object.values(fullstack),
    ].sort((a, b) => b.time - a.time);

    dispatch(receiveJobs(payload));
  });
