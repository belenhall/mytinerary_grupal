import {
  FETCH_CITIES_PENDING,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR
} from '../Actions/constants'

const initialState = {
  pending: false,
  cities: [],
  error: "Error",
  message: "AAAAAA",
  input: ""
}

export function citiesReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case FETCH_CITIES_PENDING:
      return {
        ...state,
        pending: true,
        message: "HOLA"
      }
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        pending: false,
        cities: action.cities,
        message: "SUCCESS",
      }
    case FETCH_CITIES_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}

export const getCities = state => state.cities;
export const getCitiesPending = state => state.pending;
export const getCitiesError = state => state.error;

export default citiesReducer;