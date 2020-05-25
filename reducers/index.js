import { userInfo } from './userInfo.reducer';
import { loader } from './loader.reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  userInfo,
  loader,
});
