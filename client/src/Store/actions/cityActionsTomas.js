export const REQUEST_DATA = "REQUEST_DATA";
export const REQUEST_DATA_SUCCESS = "REQUEST_DATA_SUCCESS";

export const FETCH_CITIES_ERROR = 'FETCH_CITIES_ERROR'
export const FETCH_CITIES_SUCCESS = 'FETCH_CITIES_SUCCESS'
export const FETCH_CITIES_PENDING = 'FETCH_CITIES_PENDING'

export function fetchCitiesPending() {
    return {
        type: FETCH_CITIES_PENDING
    }
}

export function fetchCitiesSuccess(cities) {
    return {
        type: FETCH_CITIES_SUCCESS,
        cities: cities
    }
}

export function fetchCitiesError(error) {
    return {
        type: FETCH_CITIES_ERROR,
        error: error
    }
}

export function fetchCities() {
  return dispatch => {
      dispatch(fetchCitiesPending());
      fetch("/api/cities")
      .then(res => res.json())
      .then(res => {
          if(res.error) {
              throw(res.error);
          }
          dispatch(fetchCitiesSuccess(res));
          return res;
      })
      .catch(error => {
          dispatch(fetchCitiesError(error));
      })
  }
}

export default fetchCities;