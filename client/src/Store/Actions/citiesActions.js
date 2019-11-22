import {
    FETCH_CITIES_PENDING, 
    FETCH_CITIES_SUCCESS,
    FETCH_CITIES_ERROR
  } from './constants';
  
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