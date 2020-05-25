import { isObject } from 'lodash';
import { store } from '../store/store';

export class HttpService {
  static get(path) {
    return this.send('GET', path);
  }

  static withToken() {
    this.withT = true;
    return this;
  }

  static post(path, data = null) {
    return this.send('POST', path, data);
  }

  static put(path, data = null) {
    return this.send('PUT', path, data)
  }

  static delete(path) {
    return this.send('DELETE', path);    
  }

  static send(method, path, data = null) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    if (this.withT) {
      const state = store.getState();
      const token = state.userInfo.token && state.userInfo.token.access_token || ''
      
      if (token) {
        headers.append('token', `bear ${token}`);
      }

      this.withT = false;
    }
    
    const request = new Request(path, {
      method,
      headers,
      body: isObject(data) ? JSON.stringify(data) : data,
    });
    
    return fetch(request).then(response => {
      return response.json();
    });
  }
}