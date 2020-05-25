import { store } from './store';
import { showLoader, hideLoader} from '../actions/loader.action';
import { LoaderService } from '../services/LoaderService';
import { receiveUserInfo, receiveUserToken } from '../actions/user.action';

describe('test store', () => {
  
  it('test default state', () => {
    let state = store.getState();
    expect(state.userInfo).toEqual({email: '', token: {}});
    expect(state.loader).toBe(false);
  });

  it('test loader state', () => {
    let state;
    store.dispatch(showLoader());
    state = store.getState();
    expect(state.loader).toBe(true);
    store.dispatch(hideLoader());
    state = store.getState();
    expect(state.loader).toBe(false);
  });

  it('test loader service', () => {
    let state;
    LoaderService.show();
    state = store.getState();
    expect(state.loader).toBe(true);
    LoaderService.hide();
    state = store.getState();
    expect(state.loader).toBe(false);
  });

  it('test user reducer', () => {
    let state;
    store.dispatch(receiveUserInfo('test@test.com'));
    state = store.getState();
    expect(state.userInfo.email).toBe('test@test.com');
    store.dispatch(receiveUserToken({access_token: 'fdafa'}));
    state = store.getState();
    expect(state.userInfo.token.access_token).toBe('fdafa');
  }); 
});
