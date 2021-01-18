import * as JobsApiUtil from '../util/Jobs';
export const RECEIVE_JOBS = 'RECEIVE_JOBS';

export const receiveJobs = (payload) => ({
  type: RECEIVE_JOBS,
  payload,
});

export const fetchJobs = () => (dispatch) =>
  JobsApiUtil.fetchJobs().then((jobs) => {
    const res = [];
    const data = jobs.data[0];
    ['backend', 'frontend', 'fullstack'].forEach((stack) => {
      if (data[stack]) {
        res.push(
          ...Object.values(data[stack]).map((record) => {
            record.category = stack;
            record.time = new Date(record.createdAt).getTime();
            return record;
          })
        );
      }
    });
    dispatch(receiveJobs(res.sort((a, b) => b.time - a.time)));
  });
