var apiURL = '/api/v1/job'

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
          type: 'FETCH_JOB_OFFER',
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
            type: 'ADD_JOB_OFFER',
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
    return fetch(apiURL, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        id: id,
        company: company,
        position: position,
        link: link,
        description: description
      })
    }).then((response) => {
      if (response.ok) {
        return response.json().then((job) => {
          dispatch({
            type: 'UPDATE_JOB_OFFER',
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
