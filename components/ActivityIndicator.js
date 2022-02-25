import React from "react";
import LottieView from "lottie-react-native";

function ActivityIndicator({ visible }) {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      souce={require("../assets/animations/loader.json")}
    />
  );
}

export default ActivityIndicator;
