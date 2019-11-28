import {SEND_NAV_DATA} from './ActionTypes';

export function sendNavData(arg) {
  return {
    type: SEND_NAV_DATA,
    navData: arg
  };
}
