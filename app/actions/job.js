var apiURL = '/api/v1/jobs'

/**
* Actions type
**/

export const FETCH_JOB_OFFER = 'FETCH_JOB_OFFER';
export const ADD_JOB_OFFER = 'ADD_JOB_OFFER';
export const UPDATE_JOB_OFFER = 'UPDATE_JOB_OFFER';
export const DELETE_JOB_OFFER = 'DELETE_JOB_OFFER';
import { CLEAR_MESSAGES } from './message';

/**
* Actions Creator
**/

//Fetch all job offer for connected user
export function fetchJobOffer(token) {
return (dispatch) => {
  return fetch(apiURL, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then((response) => {
    if (response.ok) {
      return response.json().then((jobs) => {
        dispatch({
          type: FETCH_JOB_OFFER,
          jobs
        });
      });
    } else {
      return response.json().then((json) => {
        //TODO:
      });
    }
  });
};
};

//Add new job offer
export function addJobOffer(company, position, link, description, token) {
  return (dispatch) => {
    return fetch(apiURL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        company: company,
        position: position,
        link: link,
        description: description
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((job) => {
          dispatch({
            type: ADD_JOB_OFFER,
            job
          });
        });
      } else {
        return response.json().then((json) => {
          //TODO:
        });
      }
    });
  };
};

//Update job offer
export function updateJobOffer(id, company, position, link, description, token) {
  return (dispatch) => {
    return fetch(apiURL+'/'+id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        company: company,
        position: position,
        link: link,
        description: description
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((job) => {
          dispatch({
            type: UPDATE_JOB_OFFER,
            job
          });
        });
      } else {
        return response.json().then((json) => {
          //TODO:
        });
      }
    });
  };
};


//Delete job offer
export function deleteJobOffer(id, token) {
  return (dispatch) => {
    return fetch(apiURL+'/'+id, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        return response.json().then((jobId) => {
          dispatch({
            type: DELETE_JOB_OFFER,
            jobId
          });
        });
      } else {
        return response.json().then((json) => {
          //TODO:
        });
      }
    });
  };
};

//Add new note to job offer
export function addNoteToJobOffer(body, id, token) {
  return (dispatch) => {
    return fetch(apiURL+'/'+id+'/notes', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        body: body
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((job) => {
          dispatch({
            type: CLEAR_MESSAGES
          });
          dispatch({
            type: UPDATE_JOB_OFFER,
            job
          });
        });
      } else {
        return response.json().then((json) => {
          //TODO:
        });
      }
    });
  };
};

//Update note
export function updateNote(jobId, id, body, token) {
  return (dispatch) => {
    return fetch(apiURL+'/'+jobId+'/notes/'+id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        body: body
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((job) => {
          dispatch({
            type: UPDATE_JOB_OFFER,
            job
          });
        });
      } else {
        return response.json().then((json) => {
          //TODO:
        });
      }
    });
  };
};


//Delete note
export function deleteNote(jobId, id, token) {
  return (dispatch) => {
    return fetch(apiURL+'/'+jobId+'/notes/'+id, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    }).then((response) => {
      if (response.ok) {
        return response.json().then((job) => {
          dispatch({
            type: UPDATE_JOB_OFFER,
            job
          });
        });
      } else {
        return response.json().then((json) => {
          //TODO:
        });
      }
    });
  };
};

//Add new status to job offer
export function addStatusToJobOffer(type, id, token) {
  return (dispatch) => {
    return fetch(apiURL+'/'+id+'/status', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        type: type
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((job) => {
          dispatch({
            type: CLEAR_MESSAGES
          });
          dispatch({
            type: UPDATE_JOB_OFFER,
            job
          });
        });
      } else {
        return response.json().then((json) => {
          //TODO:
        });
      }
    });
  };
};
