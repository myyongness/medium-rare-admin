/* eslint-disable no-undef */
require('es6-promise').polyfill();
require('isomorphic-fetch');

export default function(req, method, endpoint, params) {
  // init options
  const options = {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };

  // post body
  if (method.toUpperCase() === 'POST') {
    options.body = JSON.stringify(params);
  }

  return fetch(`http://localhost:3000/${endpoint}`, options)
    .then(response => {
      if (response.status === 200) {
        return response.text();
      }
      throw new Error(
        `code ${response.status} (${
          response.statusText
        }), ${`http://localhost:3000/${endpoint}`}`,
      );
    })
    .then(response => {
      if (response) {
        console.info('response', response);
        return JSON.parse(response);
      }

      return null;
    })
    .catch(error => console.error('http error: ', error));
}
