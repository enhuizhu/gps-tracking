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

const [state, dispatch] = React.useReducer(reducer, InitialState);
export const store = { state, dispatch };

export function StoreProvider(props) {
  return <Store.Provider value={props.store}>
    {props.children}
  </Store.Provider>
}
