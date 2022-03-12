import { initialState } from '../state';
import { SET_ERROR } from '../actions/type';

const errorReducer = (state = initialState.error, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export { errorReducer };
