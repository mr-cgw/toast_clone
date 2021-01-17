import { combineReducers } from 'redux';
import entities from './EntitiesReducer';
import session from './SessionReducer';
import errors from './Errors';

export default combineReducers({
  entities,
  session,
  errors,
});
