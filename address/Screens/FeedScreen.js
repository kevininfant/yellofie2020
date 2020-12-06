import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Header from "../Components/Header/Header";
import Title from "../Components/Title/title";
import FeedImage from "../Components/FeedImage/Image";

export default function FeedScreen() {
  return (
    <View style={styles.MainContainer}>
      <Header name="Feed!" />

      <ScrollView>
        <Title
          title={require("../assets/mainLogo.png")}
          name="Amazing Boutique"
          Location="Location, City"
        />
        <FeedImage image={require("../assets/img1.png")} like="5" />
        <Title
          title={require("../assets/mainLogo.png")}
          name="Amazing Boutique"
          Location="Location, City"
        />
        <FeedImage image={require("../assets/img1.png")} like="3" />
        <Title
          title={require("../assets/mainLogo.png")}
          name="Amazing Boutique"
          Location="Location, City"
        />
        <FeedImage image={require("../assets/img1.png")} like="10" />
        <Title
          title={require("../assets/mainLogo.png")}
          name="Amazing Boutique"
          Location="Location, City"
        />
        <FeedImage image={require("../assets/img1.png")} like="1" />
        <Title
          title={require("../assets/mainLogo.png")}
          name="Amazing Boutique"
          Location="Location, City"
        />
        <FeedImage image={require("../assets/img1.png")} like="100" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 60,
    width: 50,
    marginLeft: 10,
    marginTop: 20,
  },
});
