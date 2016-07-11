var apiURL = '/api/v1/i18n'

//Fetch all job offer for connected user
export function fetchLanguage(lang, token) {
return (dispatch) => {
  return fetch(apiURL+'/'+lang, {
    method: 'get',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then((response) => {
    if (response.ok) {
      return response.json().then((labels) => {
        dispatch({
          type: 'FETCH_LANGUAGE',
          lang,
          labels
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
