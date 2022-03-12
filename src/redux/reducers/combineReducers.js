import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { viewReducer } from './viewReducer';
import { errorReducer } from './errorReducer'

const reducer = combineReducers({
  user: userReducer,
  view: viewReducer,
  error: errorReducer,
});

export { reducer };
