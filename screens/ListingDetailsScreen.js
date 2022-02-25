import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItems from "../components/ListItems";
import { Image } from "react-native-expo-image-cache";

function ListingDetailsScreen({ route }) {
  const listing = route.params;
  return (
    <View>
      <Image
        style={styles.image}
        tint="dark"
        preview={{ uri: listing.images[0].thumbnailUrl }}
        uri={listing.images[0].url}
      />
      <View style={styles.container}>
        <AppText style={styles.title}>{listing.title}</AppText>
        <AppText style={styles.price}>{"$ " + listing.price}</AppText>
        <View style={styles.userContainer}>
          <ListItems
            image={require("../assets/tree.jpg")}
            title="Eshwar"
            subTitle="5 Listing"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: "skyblue",
    fontWeight: "bold",
    fontSize: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
