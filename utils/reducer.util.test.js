import { CombineReducers, ConnectStore } from './reducer.util';
import userInfo from '../reducers/userInfo.reducer';
import { Store, StoreProvider } from '../store/store';
import TestRenderer from 'react-test-renderer';
import React from 'react';

describe('test combine reducers', () => {
  it('user info',  () => {
    console.log('combineReducers', CombineReducers);
    allReducers = CombineReducers({userInfo})
    state = allReducers({}, {type: 'RECEIVE_USER_INFO', payload: {test: 'hello'}});
    expect(state.userInfo.test).toEqual('hello');
  });

  it('test connectStore', () => {
      const Test = () => {
        return <div></div>
      }

      const TestContainer = ConnectStore(Test, Store);

      const testRenderer = TestRenderer.create(<StoreProvider><TestContainer></TestContainer></StoreProvider>)
      const instance = testRenderer.getInstance();

      console.log('instance', testRenderer.toJSON());
  });
});



