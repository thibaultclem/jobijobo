import moment from 'moment';
import cookie from 'react-cookie';
import { browserHistory } from 'react-router';

/**
* Actions type
**/

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILURE = 'RESET_PASSWORD_FAILURE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS';
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
import { CLEAR_MESSAGES } from './message';

/**
* Actions Creator
**/

export function login(email, password) {
  return (dispatch) => {
    dispatch({
      type: CLEAR_MESSAGES
    });
    return fetch('/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: LOGIN_SUCCESS,
            token: json.token,
            user: json.user
          });
          cookie.save('token', json.token, { expires: moment().add(90, 'days').toDate() });
          browserHistory.push('/jobDashboard');
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: LOGIN_FAILURE,
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

export function signup(name, email, password) {
  return (dispatch) => {
    dispatch({
      type: CLEAR_MESSAGES
    });
    return fetch('/signup', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, email: email, password: password })
    }).then((response) => {
      return response.json().then((json) => {
        if (response.ok) {
          dispatch({
            type: SIGNUP_SUCCESS,
            token: json.token,
            user: json.user
          });
          browserHistory.push('/jobDashboard');
          cookie.save('token', json.token, { expires: moment().add(90, 'days').toDate() });
        } else {
          dispatch({
            type: SIGNUP_FAILURE,
            messages: Array.isArray(json) ? json : [json]
          });
        }
      });
    });
  };
}

export function logout() {
  cookie.remove('token');
  browserHistory.push('/');
  return {
    type: LOGOUT_SUCCESS
  };
}

export function forgotPassword(email) {
  return (dispatch) => {
    dispatch({
      type: CLEAR_MESSAGES
    });
    return fetch('/forgot', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
            messages: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: FORGOT_PASSWORD_FAILURE,
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

export function resetPassword(password, confirm, pathToken) {
  return (dispatch) => {
    dispatch({
      type: CLEAR_MESSAGES
    });
    return fetch(`/reset/${pathToken}`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        password: password,
        confirm: confirm
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          browserHistory.push('/login');
          dispatch({
            type: RESET_PASSWORD_SUCCESS,
            messages: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: RESET_PASSWORD_FAILURE,
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

export function updateProfile(state, token) {
  return (dispatch) => {
    dispatch({
      type: CLEAR_MESSAGES
    });
    return fetch('/account', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        email: state.email,
        name: state.name,
        gender: state.gender,
        location: state.location
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: UPDATE_PROFILE_SUCCESS,
            messages: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: UPDATE_PROFILE_FAILURE,
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

export function changePassword(password, confirm, token) {
  return (dispatch) => {
    dispatch({
      type: CLEAR_MESSAGES
    });
    return fetch('/account', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        password: password,
        confirm: confirm
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch({
            type: CHANGE_PASSWORD_SUCCESS,
            messages: [json]
          });
        });
      } else {
        return response.json().then((json) => {
          dispatch({
            type: CHANGE_PASSWORD_FAILURE,
            messages: Array.isArray(json) ? json : [json]
          });
        });
      }
    });
  };
}

export function deleteAccount(token) {
  return (dispatch) => {
    dispatch({
      type: CLEAR_MESSAGES
    });
    return fetch('/account', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          dispatch(logout());
          dispatch({
            type: DELETE_ACCOUNT_SUCCESS,
            messages: [json]
          });
        });
      }
    });
  };
}
