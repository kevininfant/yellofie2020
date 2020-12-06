import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";
const FeedImage = (props) => {
  const [like, setLike] = useState(props.like);
  const likeIncrease = () => {
    setLike((prevCount) => parseInt(prevCount) + 1);
  };
  return (
    <View>
      <Image source={props.image} style={{ margin: 10, width: 370 }} />
      <TouchableOpacity onPress={likeIncrease}>
        <Icon
          name="heart"
          style={{ margin: 7, width: 375 }}
          size={27}
          color="black"
        />
      </TouchableOpacity>
      <Text style={{ marginLeft: 15 }}>{like}</Text>

      <MaterialCommunityIcons
        name="comment-text-outline"
        style={{ marginLeft: 50, marginTop: -55 }}
        size={27}
        color="black"
      />

      <Foundation
        name="bookmark"
        style={{ marginLeft: 350, marginTop: -35 }}
        size={35}
        color="black"
      />
      <Text style={{ marginLeft: 10, marginTop: 35, fontWeight: "bold" }}>
        Amazing Boutique
      </Text>
      <Text style={{ marginLeft: 10, marginTop: 15 }}>View Comments</Text>

      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginTop: 20,
          width: 370,
          marginLeft: 10,
        }}
        placeholder="  Add to comments"
      />

      {/* </TouchableOpacity> */}
    </View>
  );
};

export default FeedImage;
