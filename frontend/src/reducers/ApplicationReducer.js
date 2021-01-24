import {
  RECEIVE_APPLICATION,
  RECEIVE_APPLICATIONS,
  RECEIVE_APPLICATION_ERRORS,
  CLEAR_APPLICATION_ERRORS,
  DELETE_APPLICATION,
} from '../actions/ApplicationActions';
const _initState = {};
export default (oldState = _initState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_APPLICATIONS:
      return { ...action.payload };
    case RECEIVE_APPLICATION:
      return { ...oldState, [action.payload.data._id]: action.payload.data };
    case DELETE_APPLICATION:
      const newApps = { ...oldState };
      delete newApps[action.payload._id];
      return { ...newApps };
    default:
      return oldState;
  }
};
