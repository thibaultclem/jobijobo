import { LOGIN_FAILURE, SIGNUP_FAILURE, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAILURE, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_FAILURE, DELETE_ACCOUNT_SUCCESS } from '../actions/auth'
import { CLEAR_MESSAGES } from '../actions/message';
import { CONTACT_FORM_SUCCESS, CONTACT_FORM_FAILURE } from '../actions/contact';
import { OAUTH_FAILURE, LINK_FAILURE, UNLINK_SUCCESS , UNLINK_FAILURE }  from '../actions/oauth';

export default function messages(state = {}, action) {
  switch (action.type) {
    case LOGIN_FAILURE:
    case SIGNUP_FAILURE:
    case UPDATE_PROFILE_FAILURE:
    case CHANGE_PASSWORD_FAILURE:
    case FORGOT_PASSWORD_FAILURE:
    case RESET_PASSWORD_FAILURE:
    case CONTACT_FORM_FAILURE:
    case OAUTH_FAILURE:
    case UNLINK_FAILURE:
    case LINK_FAILURE:
      return {
        error: action.messages
      };
    case UPDATE_PROFILE_SUCCESS:
    case CHANGE_PASSWORD_SUCCESS:
    case RESET_PASSWORD_SUCCESS:
    case CONTACT_FORM_SUCCESS:
      return {
        success: action.messages
      };
    case FORGOT_PASSWORD_SUCCESS:
    case DELETE_ACCOUNT_SUCCESS:
    case UNLINK_SUCCESS:
      return {
        info: action.messages
      };
    case CLEAR_MESSAGES:
      return {};
    default:
      return state;
  }
}
