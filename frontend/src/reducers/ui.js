import { LOADING, LOADED } from '../actions/UiActions';
const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { status: 'loading' };
    case LOADED:
      return { status: 'loaded' };
    default:
      return state;
  }
};
