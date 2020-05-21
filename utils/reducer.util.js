import React, { useContext } from 'react';

export const CombineReducers = (reducers) => {
    return (state, action) => {
        Object.keys(reducers).forEach(key => {
            state[key] = reducers[key](state[key], action);
        });

        return {...state};
    }
}

export const ConnectStore = (Component, Store) => {    
    return (props) => {
        const {state, dispatch} = useContext(Store);
        return <Component store={{state, dispatch}} {...props}></Component>
    }
}