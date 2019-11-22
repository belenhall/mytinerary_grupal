import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import citiesReducer from './Reducers/citiesReducer';

const store = createStore(
    citiesReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default store