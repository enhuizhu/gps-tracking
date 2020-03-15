import { StyleSheet } from 'react-native';
import { COLORS } from './vars';

export const formStyles = StyleSheet.create({
  formControlGroup: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "row",
    // flex: 1,
  },
  primaryBg: {
    backgroundColor: 'red',
  },
  btn: {
    borderRadius: 5,
    width: '90%',
  }
});
