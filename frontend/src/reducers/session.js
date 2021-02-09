import { RECEIVE_USER, RECEIVE_USER_SIGNOUT } from '../actions/SessionActions';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return action.payload;
    case RECEIVE_USER_SIGNOUT:
      return initialState;
    default:
      return state;
  }
};
