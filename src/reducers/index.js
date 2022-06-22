import { combineReducers } from 'redux';
import errorReducer from './error';
import advertReducer from './advert';
import authReducer from './authR';

export default combineReducers({
  errorReducer,
  advertReducer,
  authReducer,
});
