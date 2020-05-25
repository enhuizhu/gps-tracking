import _ from 'lodash';
import { store } from '../store/store';
import { ApiBase } from '../core/ApiBase';
import { HttpService } from './HttpService';


export class AuthorizationService extends ApiBase {
  static async isAuthorized() {
    // const token = await PersistService.getToken();
    const state = store.getState();
    return state.userInfo && state.userInfo.token;
  }

  static login(email, password) {
    return HttpService.post(this.getPath('user/login'), {
      email,
      password
    });
  }

  static logout() {
    return HttpService.withToken().post(this.getPath('user/logout'))
  }
}
