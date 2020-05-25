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
  },
  container: {
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'grey',
    width: '90%',
    minHeight: 200,
    margin: 'auto',
    backgroundColor: 'white',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'grey',
    shadowOpacity: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginLeft: 10,
    marginTop: 4,
  },
  textInput: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    marginRight: 10,
    borderRadius: 5,
  }
});
