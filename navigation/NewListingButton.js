import React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function NewListingButton({ onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" color={"white"} size={40} />
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "tomato",
    height: 80,
    width: 80,
    borderRadius: 40,
    bottom: 32,
    borderColor: "white",
    borderWidth: 10,
  },
});
export default NewListingButton;
