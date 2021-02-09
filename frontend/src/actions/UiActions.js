export const LOADING = 'LOADING';
export const LOADED = 'LOADED';

export const receiveLoading = () => ({
  type: LOADING,
});
export const receiveLoaded = () => ({
  type: LOADED,
});

export const loading = () => (dispatch) => dispatch(receiveLoading());
export const loaded = () => (dispatch) => dispatch(receiveLoaded());
