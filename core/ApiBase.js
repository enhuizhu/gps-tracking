import { API_HOST } from '../config';

export class ApiBase {
  static getPath(path) {
    console.log('api host:', API_HOST);
    return `${API_HOST}${path}`
  }
}