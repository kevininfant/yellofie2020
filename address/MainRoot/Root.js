import React from "react";
import { StyleSheet, Text, View } from "react-native";
import FeedScreen from "../Screens/FeedScreen";
import Address from "../Screens/Addressdetail";
import CreateFeed from "../Screens/CreateFeed";
import Feed from "../Screens/feed";
export default function Root() {
  return (
    <View>
      {/* <FeedScreen/> */}
      <Address />
      {/* <CreateFeed/> */}
      {/* <Feed/> */}
    </View>
  );
}

const styles = StyleSheet.create({});
