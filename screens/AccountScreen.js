import React from "react";
import { StyleSheet, FlatList, View } from "react-native";

import Screen from "../components/Screen";
import ListItems from "../components/ListItems";
import Icon from "../components/Icon";
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import useAuth from "../app/auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "view-list",
      backgroundColor: "red",
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: "yellow",
    },
  },
];

function AccountScreen(props) {
  const { user, logOut } = useAuth();

  return (
    <Screen style={styles.screen}>
      <View styles={styles.container}>
        <ListItems
          title={user.name}
          subTitle={user.email}
          image={require("../assets/tree.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <ListItems
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItems
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="dodgerblue" />}
        onPress={() => logOut()}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: "white",
  },
});
export default AccountScreen;
