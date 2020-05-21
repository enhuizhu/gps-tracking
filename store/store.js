import React from 'react';
import reducers from '../reducers';

export const Store = React.createContext();

export function StoreProvider(props) {
  const [ state, dispatch ] = React.useReducer(reducers, {});

  return <Store.Provider value={{state, dispatch}}>
    {props.children}
  </Store.Provider>
}
