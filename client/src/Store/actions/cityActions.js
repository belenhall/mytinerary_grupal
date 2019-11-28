import {REQUEST_DATA, REQUEST_DATA_SUCCESS, REQUEST_DATA_FAILURE} from './ActionTypes'
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



export function fetchCities(url) {
  return dispatch => {
    dispatch(requestData());
    fetch(url)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error;
        }
        dispatch(requestDataSuccess(res));
        return res;
      });
  };
}

export function reduxFetch(url) {
  console.log("FETCHIN' TIME");
  return dispatch => {
    dispatch(requestData());
    getData(url, null, data => dispatch(requestDataSuccess(data)));
  };
}

export function thunk(num) {
  const numero = 2;
  return dispatch => {
    const resultado = numero + num;
    dispatch(requestDataSuccess(resultado));
  };
}

const getData = async (url, init, callback) => {
  const response = await fetch(url, init);
  const data = await response.json();
  const call = await callback(data);

  return call;
};


