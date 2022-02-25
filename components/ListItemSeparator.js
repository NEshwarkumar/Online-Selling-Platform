import React from "react";
import { View, StyleSheet } from "react-native";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}
const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 10,
    backgroundColor: "white",
  },
});

export default ListItemSeparator;
