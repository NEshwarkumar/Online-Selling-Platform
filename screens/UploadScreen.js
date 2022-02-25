import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import LottieView from "lottie-react-native";
import * as Progress from "react-native-progress";

function UploadScreen({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar color={"dodgerblue"} progress={progress} width={200} />
        ) : (
          <View>
            <LottieView
              autoPlay
              loop={false}
              onAnimationFinish={onDone}
              source={require("../assets/animations/done.json")}
              style={styles.animation}
            />
          </View>
        )}
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  animation: {
    width: 150,
  },
});
export default UploadScreen;
