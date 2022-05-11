import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";

import Icon from "../components/Icon";


function AppButton({ title, onPress, color = "dark" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
   
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark,
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
    width: "45%",
    height: 120
    // marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    marginTop: 7,
    fontWeight: "bold",
    color: "ghostwhite"
  },
});

export default AppButton;
