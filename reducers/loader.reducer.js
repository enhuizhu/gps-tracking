import { SHOW_LOADER, HIDE_LOADER } from '../actions/loader.action';

const initialState = false;

export const loader = (state = initialState, {type}) => {
  switch(type) {
    case SHOW_LOADER:
      return true;
    case HIDE_LOADER:
      return false;
    default:
      return state;
  }
}