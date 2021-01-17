import {
  RECEIVE_USER_LOGOUT,
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_SIGN_IN,
} from '../actions/SessionActions';
import { RECEIVE_USER } from '../actions/UserActions';
import { currentUserDetails } from '../util/UserApiUtil';

const initialState = {
  isAuthenticated: false,
  user: undefined,
  notifications: {},
};

export default (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_USER:
      const { user } = action.payload;
      if (state.user && state.user.id === user._id) {
        return {
          ...state,
          user: currentUserDetails(user),
        };
      }
      return state;

    case RECEIVE_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !!action.currentUser,
        user: action.currentUser,
        notifications: action.currentUser.notifications,
      };

    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
        notifications: {},
      };

    case RECEIVE_USER_SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
      };

    default:
      return state;
  }
};
