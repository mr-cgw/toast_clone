import { RECEIVE_SESSION_ERRORS } from '../actions/SessionActions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.payload;
    default:
      return state;
  }
};
