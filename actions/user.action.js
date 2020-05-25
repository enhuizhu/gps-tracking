export const RECEIVE_USER_INFO = 'RECEIVE_USER_INFO';
export const RECEIVE_USER_TOKEN = 'RECEIVE_USER_TOKEN';

export const receiveUserInfo = (payload) => ({
  type: RECEIVE_USER_INFO,
  payload
});

export const receiveUserToken = (payload) => ({
  type: RECEIVE_USER_TOKEN,
  payload
});
