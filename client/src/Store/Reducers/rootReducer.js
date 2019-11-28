import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import navReducer from "./navReducer";
import itineraryReducer from "./ItineraryReducer";

const rootReducer = combineReducers({
  cities: citiesReducer,
  nav: navReducer,
  itineraries: itineraryReducer
});
export default rootReducer;
