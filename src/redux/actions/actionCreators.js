import { SET_ERROR, SET_USER, SET_VIEW } from './type';

const setUserAction = (payload) => ({
  type: SET_USER,
  payload,
});
const setViewAction = (payload) => ({
  type: SET_VIEW,
  payload,
});
const setErrorAction = (payload) => ({
  type: SET_ERROR,
  payload,
});

export { setUserAction, setViewAction, setErrorAction };
