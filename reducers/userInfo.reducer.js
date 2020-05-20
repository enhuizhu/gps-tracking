const InitialState = {};

export default userInfo = (state = InitialState, action)  => {
  switch(action.type) {
    case 'RECEIVE_USER_INFO':
      return {
          ...action.payload,
      }
    
    default:
      return state;
  }
}
