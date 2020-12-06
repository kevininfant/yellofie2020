import React from "react";
import { View, Text, TextInput, ScrollView } from "react-native";
import Header from "../Components/Header/Header";
import TextBox from "../Components/textbox/textbox";
import TextSmall from "../Components/textbox/TextSmall";
import MainStore from "../Components/imageadd/addimage";
import Buttons from "../Components/Button/primaryButton";
const Store = () => {
  return (
    <View>
        <Header name="Create post" />
        <ScrollView>
        <MainStore />
        <View style={{ }} >
        <TextSmall name="Store Name" title="Store Name"  />
        </View>
        <View>
        <TextSmall name=" Location" title=" Location" />
        </View>
        <View>
        <TextBox name="Description" title=" Description" />
        </View>
        <View style={{ paddingTop: 31,}}>
        <Buttons text="Post" />
      </View>
      <View style={{ paddingTop: 10, marginBottom:200}}>
        <Buttons text="Cancel" />
      </View>
     
      
       
      </ScrollView>
    </View>
  );
};
export default Store;
