import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const TextSmall = (props) => {
  return (
    <View style={styles.storeMain}>
      <Text style={styles.storeName}>{props.name}</Text>
      <TextInput
        style={styles.TextBox}
        maxLength={300}
        placeholder={props.title}
        placeholderTextColor="grey"
        style={{
          height: 50,
          width: "93%",
          margin: 12,
          borderColor: "#D3D3D3",
          borderWidth: 1,
          paddingLeft: 20,
        }}
      />
    </View>
  );
};

export default TextSmall;

const styles = StyleSheet.create({
  storeName: {
    paddingLeft: 13,
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
