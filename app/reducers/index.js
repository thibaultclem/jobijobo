import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import jobs from './jobs';
import i18n from './i18n';

export default combineReducers({
  messages,
  auth,
  jobs,
  i18n
});
