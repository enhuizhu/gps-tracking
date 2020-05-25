import { HttpService } from './HttpService';
import store from '../store/store';

export class ApiService {
  
  
  static getPath(path) {
    return `${process.env.REACT_APP_API_PATH}${path}`;
  }
}