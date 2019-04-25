import { combineReducers } from 'redux';
import authReducer from './simpleAuthButton';

export default combineReducers({
  //- put reducer key: functioncalls here
  auth: authReducer
});
