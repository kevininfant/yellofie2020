import React, { useState } from "react";
import {
  CheckBox,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
// import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards'
//  import { CheckBox } from 'react-native-elements'
import Checkbox from "react-native-custom-checkbox";
export const Address = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.add}>
        <View style={styles.text}>
          <Text style={styles.checkbox}>
            <Checkbox
              checked={true}
              style={{
                backgroundColor: "#f2f2f2",
                color: "black",
                borderRadius: 15,
              }}
            />
          </Text>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: -25 }}>
            {" "}
            {props.Value.name.firstName} {props.Value.name.lastName}{" "}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 8 }}>
            {" "}
            {props.Value.doorNo}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 5 }}>
            {" "}
            {props.Value.street}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 5 }}>
            {" "}
            {props.Value.landMark}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 5 }}>
            {" "}
            {props.Value.city} {props.Value.pincode}
          </Text>
          <Text style={{ fontSize: 16, fontWeight: "500", marginTop: 5 }}>
            {" "}
            {props.Value.state}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginLeft: 250,
              marginTop: -20,
              marginBottom: 20,
            }}
          >
            666000
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  add: {
    width: 350,
    marginTop: 20,
    marginLeft: 18,
    borderWidth: 1.5,
    borderColor: "gray",
  },
  text: {
    marginLeft: 5,
  },
  checkbox: {
    alignSelf: "flex-end",
    marginRight: 30,
    borderRadius: 1,
    marginTop: 10,
  },
});
