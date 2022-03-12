import { initialState } from '../state';
import { SET_USER } from '../actions/type';

const userReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export { userReducer };
