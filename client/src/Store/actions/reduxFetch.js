  
  export function reduxFetch(url, request, requestSuccess) {
    console.log("FETCHIN' TIME");
    return dispatch => {
      dispatch(request());
      getData(url, null, data => dispatch(requestSuccess(data)));
    };
  }

   export const getData = async (url, init, callback) => {
    const response = await fetch(url, init);
    const data = await response.json();
    const call = await callback(data);
  
    return call;
  };

  /*fetch(url, {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
  .catch(error => console.error('Error:', error))
  .then(response => console.log('Success:', response));*/

