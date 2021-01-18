import applications from './ApplicationReducer';
import jobs from './JobsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  applications,
  jobs,
});
