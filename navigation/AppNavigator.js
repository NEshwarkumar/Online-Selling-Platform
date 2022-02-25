import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";
import React, { useEffect } from "react";
import FeedNavigator from "./FeedNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import NewListingButton from "./NewListingButton";
import * as Notifications from "expo-notifications";
import expoPushToken from "../app/api/expoPushToken";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationResponseReceivedListener((notification) =>
      console.log(notification)
    );
  }, []);

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
  const registerForPushNotifications = async () => {
    try {
      const permission = await Notifications.requestPermissionsAsync();
      if (!permission.granted) return;

      const token = (await Notifications.getExpoPushTokenAsync()).data;
      expoPushToken.register(token);
    } catch (error) {
      console.log("Error getting push notifications", error);
    }
  };
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate("ListingEdit")}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-open"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigator;
