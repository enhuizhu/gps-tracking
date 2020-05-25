import { store } from '../store/store';
import { showLoader, hideLoader } from '../actions/loader.action';

export class LoaderService {
  static show() {
    store.dispatch(showLoader());
  }

  static hide() {
    store.dispatch(hideLoader());
  }
}
