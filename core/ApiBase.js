import { API_HOST } from '../config';

export class ApiBase {
  static getPath(path) {
    return `${API_HOST}${path}`
  }
}