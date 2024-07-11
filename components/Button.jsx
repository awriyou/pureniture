import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../constants";

const Button = ({onPress, title, isValid}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnWrapper(
        isValid === false ? COLORS.gray : COLORS.primary
      )}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnText: {
    fontFamily: 'Bold',
    color: COLORS.white,
    fontSize: 18,
  },
  btnWrapper: (backgroundColor) => ({
    height: 50,
    width: '100%',
    backgroundColor: backgroundColor,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  }),
});
