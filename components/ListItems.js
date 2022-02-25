import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import {
  GestureHandlerRootView,
  Swipeable,
} from "react-native-gesture-handler";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={"grey"} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailContainer}>
              <AppText style={styles.title} numberOfLines={1}>
                {title}
              </AppText>
              {subTitle && (
                <AppText style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </AppText>
              )}
            </View>
            <MaterialCommunityIcons
              style={styles.icons}
              name="chevron-right"
              size={25}
            />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 15,
    backgroundColor: "white",
  },
  detailContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 35,
    // marginRight: 10,
    // marginLeft: 10,
  },
  icons: {
    color: "slategrey",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: "grey",
  },
});

export default ListItem;
