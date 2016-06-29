import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import jobs from './jobs';

export default combineReducers({
  messages,
  auth,
  jobs
});
