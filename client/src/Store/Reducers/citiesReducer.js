import {
  REQUEST_DATA,
  REQUEST_DATA_SUCCESS,
} from "../actions/ActionTypes";

 
const initialState = {
  items: [],
  message: "THIS IS REDUX!!!"
};

export default function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        items: [],
        message: action.message || 'ESTO NO ES UN MENSAJE'
      });
    case REQUEST_DATA_SUCCESS:
      return Object.assign({}, state, {
        items: action.items,
        message: action.message
      });
    default:
      return state;
  }
}



