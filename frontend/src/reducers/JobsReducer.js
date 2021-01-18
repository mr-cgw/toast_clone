import { RECEIVE_JOBS } from '../actions/JobActions';
const _initState = {};
export default (oldState = _initState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_JOBS:
      return { ...action.payload };
    default:
      return oldState;
  }
};
