import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import Header from "../Components/Header/Header";
import TextBox from "../Components/textbox/textbox";
import MainStore from "../Components/imageadd/addimage";
import Buttons from "../Components/Button/primaryButton";
const Store = () => {
  return (
    <View>
      <ScrollView>
        <Header name="Create post" />
        <MainStore />
        <TextBox name="Description" title="Add Description" />
        <View style={{ paddingTop: 31 }}>
          <Buttons text="Post" />
        </View>
      </ScrollView>
    </View>
  );
};
export default Store;
