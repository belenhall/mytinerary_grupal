export const REQUEST_DATA = "REQUEST_DATA";
export const REQUEST_DATA_SUCCESS = "REQUEST_DATA_SUCCESS";
export const REQUEST_DATA_FAILURE = "REQUEST_DATA_FAILURE";

export function requestData() {
  return {
    type: REQUEST_DATA,
    message: "DAME LA DATA ESTAS RE FETCHEADO"
  };
}

export function requestDataSuccess(data) {
  return {
    type: REQUEST_DATA_SUCCESS,
    message: "SUCCES MOTHERFUCKER!",
    items: data
  };
}

/*export function fetchData(uri, func) {
  return function(dispatch) {
    dispatch(requestData(api));
    return fetch(api)
      .then(
        response => response.json(),
        error => console.log("OUCH!", error)
      )
      .then(json => dispatch(requestDataSuccess(api, json)));
  };
}
*/

export function fetchCities(url) {
  return dispatch => {
      dispatch(requestData());
      fetch(url)
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(requestDataSuccess(res));
          return res;
      })
    
  }
}


export function reduxFetch(url) {
  console.log("FETCHIN' TIME")
  return () => {
      requestData();
      getData(url, null, data => requestDataSuccess(data))
  }
}






const getData = async (url, init, callback) => {
  const response = await fetch(url, init);
  const data = await response.json();
  const call = await callback(data);

  return call;
};

/*export function thunkMessage() {
  return function() {
    return console.log("WATCHA THUNKIN'?")
  }
}*/