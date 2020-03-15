import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet } 
from 'react-native';
import { COLORS } from '../../styles/vars';


export const UIButton = (props) => {
  const { title, onPress, style = {}, textStyle = {} } = props;
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={[styles.btnText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    borderRadius: 5,
    height: 40,
  },

  btnText: {
    color: COLORS.white,
    fontSize: 16,
    alignContent: "center",
    textAlign: "center"
  }
});
