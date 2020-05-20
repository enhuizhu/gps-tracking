export const combineReducers = (reducers) => {
    return (state, action) => {
        Object.keys(reducers).forEach(key => {
            state[key] = reducers[key](state[key], action);
        });

        return {...state};
    }
}
