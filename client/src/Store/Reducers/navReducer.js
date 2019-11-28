import {SEND_NAV_DATA} from '../actions/ActionTypes';

const initialState = {
    navData: 'NAV DATA'
  };

export default function navReducer(state = initialState, action) {
    switch(action.type) {
        case SEND_NAV_DATA:
            return Object.assign({}, state, {
                navData: action.navData || 'NAV DATA MISSING'
              });
        default:
            return state;
    }

}