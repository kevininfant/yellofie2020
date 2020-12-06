import React, { useState, useEffect } from "react";
import {
  View,
  ViewStyle,
  Text,
  StyleSheet,
  CheckBox,
  ScrollView,
} from "react-native";
import { Address } from "../Components/addresscard/card";
import { getAllAddress } from "../service/ApiService";
import Header from "../Components/Header/Header";
import Button from "../Components/Button/Button";
export default function Addressdetails() {
  const [values, setValue] = useState([]);
  useEffect(() => {
    getAllAddress()
      .then((result) => {
        console.log("ADDS", result.address.address);
        setValue(result.address.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(values);
  // const [isSelected, setSelection] = useState(false);
  const Value = () => {
    return values.map((data) => {
      return (
        <View>
          <Text> {data.firstName} </Text>
          <Text> {data.lastName} </Text>
          <Text> {data.doorNo}</Text>
          <Text> {data.street}</Text>
          <Text> {data.landMark}</Text>
          <Text> {data.city}</Text>
          <Text> {data.pincode}</Text>
          <Text> {data.state}</Text>
        </View>
      );
    });
  };

  return (
    <View>
      <Header name="Confirm order" />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Text style={{ marginTop: 25, marginLeft: 10, fontSize: 15 }}>
            Order Total (Including Text)
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginLeft: 320,
              fontWeight: "bold",
              marginTop: -20,
            }}
          >
            ₹4050
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 16,
              marginTop: 30,
              marginLeft: 135,
            }}
          >
            Credits Avaliable
          </Text>
          <Text
            style={{
              marginLeft: 175,
              fontWeight: "bold",
              marginTop: 10,
              fontSize: 16,
            }}
          >
            5000
          </Text>
          <Text style={{ marginLeft: 185, marginTop: 10 }}>Or</Text>

          <Button name="Add Credits" />
          <Text
            style={{
              fontSize: 15,
              fontWeight: "700",
              marginLeft: 10,
              marginTop: 10,
            }}
          >
            Select Delivery address
          </Text>
          <View style={{ flex: 1 }}>
            {values.map((Value, index) => (
              <Address Value={Value} />
            ))}
          </View>
          <Text></Text>
          <Button name="Place Trial Order" />
          <Text
            style={{
              marginLeft: 160,
              fontWeight: "bold",
              marginTop: 10,
              fontSize: 20,
            }}
          >
            Cancel
          </Text>
          <Text></Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
