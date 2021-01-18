import { combineReducers } from 'redux';
import entities from './EntitiesReducer';
import session from './SessionReducer';
import errors from './ErrorsReducer';

export default combineReducers({
  entities,
  session,
  errors,
});
