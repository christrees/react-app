import { combineReducers } from 'redux';
import authReducer from './simpleAuthButton';
import reposReducer from './repoFetchData';

export default combineReducers({
  //- put reducer key: functioncalls here
  repos: reposReducer,
  auth: authReducer
});
