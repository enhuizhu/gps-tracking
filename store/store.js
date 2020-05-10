import React from 'react';

export const Store = React.createContext();

const InitialState = {
  userInfo: {},
  countries: [],
};

function reducer(state, action) {
  console.log('action is:', action);
  switch(action.type) {
    case 'RECEIVE_USER_INFO':
      return {
        ...state,
        userInfo: action.payload,
      }
    case 'RECEIVE_COUNTRIES':
      return {
        ...state,
        countries: action.payload,
      }
    default:
      return state;
  }

}

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, InitialState);
  const value = { state, dispatch };
  
  return <Store.Provider value={value}>
    {props.children}
  </Store.Provider>
}
