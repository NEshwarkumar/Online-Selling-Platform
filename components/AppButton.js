import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function AppButton({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    borderRadius: 25,
    // justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 15,
    width: "100%",
    margin: 20,
  },
  text: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",

    // textWeight:'bold'
  },
});

export default AppButton;
