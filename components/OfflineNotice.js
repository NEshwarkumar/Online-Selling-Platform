import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "./AppText";
import Constants from "expo-constants";
// import { Alert } from "react-native";
import { useNetInfo } from "@react-native-community/netinfo";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <AppText style={styles.text}>No Internet Connection</AppText>
      </View>
    );
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "tomato",
    height: 50,
    top: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  text: {
    color: "white",
  },
});
export default OfflineNotice;

//   return Alert.alert("No Internet Connection");
