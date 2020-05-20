import { combineReducers } from './reducer.util';
import userInfo from '../reducers/userInfo.reducer';
import { clearUpdateCacheExperimentalAsync } from 'expo/build/Updates/Updates';

describe('test combine reducers', () => {
  it('user info',  () => {
    console.log('user info', userInfo);
    allReducers = combineReducers({userInfo})
    state = allReducers({}, {type: 'RECEIVE_USER_INFO', payload: {test: 'hello'}});
    console.log('state', state);
    expect(state.userInfo.test).toEqual('hello');
  })
})

