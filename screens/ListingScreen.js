import React, { useEffect } from "react";
import { FlatList, ActivityIndicator } from "react-native";

import Screen from "../components/Screen";
import Card from "../components/Card";
import listingsApi from "../app/api/listings";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import useApi from "../hooks/useApi";

function ListingScreen({ navigation }) {
  const {
    data,
    error,
    loading,
    request: loadListings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={{ marginRight: 10, marginLeft: 10, paddingTop: 0 }}>
      {error && (
        <>
          <AppText style={{ textAlign: "center" }}>
            Couldn't retrive the listings
          </AppText>
          <AppButton title="retry" onPress={loadListings} />
        </>
      )}
      {/* Problem with loading icon */}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={data}
        keyExtractor={(listings) => listings.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate("ListingDetails", item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
  );
}

export default ListingScreen;
