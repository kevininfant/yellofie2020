import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Title = (props) => {
  return (
    <View style={styles.textview}>
      <Image source={props.title} style={styles.img} />
      <View style={styles.imgtext}>
        <Text style={{ fontSize: 16, fontWeight: "400" }}>{props.name}</Text>
        <Text style={{ fontSize: 16, fontWeight: "700" }}>
          {props.Location}
        </Text>
      </View>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  textview: {
    flexDirection: "row",
  },
  img: {
    height: 60,
    width: 50,
    marginLeft: 10,
    marginTop: 20,
  },
  imgtext: {
    marginLeft: 20,
    marginTop: 28,
  },
});
