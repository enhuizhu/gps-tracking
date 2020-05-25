import { Alert } from 'react-native';
import { isObject } from 'lodash';

export const ApiErrorHandler = (err) => {
  const msg = isObject(err) ? JSON.stringify(err) : err;
  Alert.alert(msg);
}
