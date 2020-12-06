import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const TextBox = (props) => {
  return (
    <View style={styles.storeMain}>
      <Text style={styles.storeName}>{props.name}</Text>
      <TextInput
        style={styles.TextBox}
        maxLength={300}
        placeholder={props.title}
        placeholderTextColor="grey"
        style={{
          height: 150,
          paddingBottom: 100,
          width: "93%",
          margin: 12,
          borderColor: "#D3D3D3",
          borderWidth: 1,
          paddingLeft: 10,
        }}
      />
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  storeName: {
    paddingLeft: 15,
    fontWeight: "bold",
    fontSize: 15,
  },
  storeMain: {
    paddingTop: 10,
  },

  TextBox: {
    width: 100,
  },
});
