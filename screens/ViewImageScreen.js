import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <Ionicons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <Ionicons name="trash-bin-outline" color="white" size={35} />
      </View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/tree.jpg")}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
export default ViewImageScreen;
