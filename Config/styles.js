import { Platform } from "react-native";

export default {
  text: {
    color: "grey",
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
};
