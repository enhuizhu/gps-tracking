import { RECEIVE_USER_INFO, RECEIVE_USER_TOKEN} from '../actions/user.action';

const InitialState = {
  email: '',
  token: {},
};

export const userInfo = (state = InitialState, {type, payload})  => {
  switch(type) {
    case RECEIVE_USER_INFO:
      return {
        ...state,
        email: payload,
      }
    case RECEIVE_USER_TOKEN:
      return {
        ...state,
        token: payload,
      }
    default:
      return state;
  }
}
