import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const Header = (props) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.head}>
        <View>
          <AntDesign
            name="arrowleft"
            size={24}
            style={{ marginLeft: -110, marginTop: 3 }}
            color="black"
          />
        </View>
        <Text style={styles.headerText}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  Arrowa: {
    marginLeft: -330,
  },
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    flexDirection: "row",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "black",
  },
  head: {
    flexDirection: "row",
  },
});
