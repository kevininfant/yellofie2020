import React,{useState} from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {PickImage,firebaseImageUpload} from '../../service/imageUpload';

const MainStore = (props) => {
    const [image, setImage] = useState(null)
    const getImg = async () =>{
        let res;
  
        res = await PickImage("Storage");
        if(res !== null){
            console.log('res',res);
            let result;
            result =firebaseImageUpload(res.uri)
            console.log('result',result);
            setImage(res)
        }
    }
  return (
    <View style={styles.Boxs}>
      <View style={styles.PlusIcon}>
        <Text>
          <AntDesign onPress={() => getImg()} name="plus" size={80} color="black"  />
        </Text>
        <Text style={{ fontSize: 18 }}>Store Image</Text>
      </View>
    </View>
  );
};
export default MainStore;
const styles = StyleSheet.create({
  Boxs: {
    margin: 15,
    height: 350,
    width: "91%",

    borderWidth: 1,
    borderColor: "#D3D3D3",
  },
  PlusIcon: {
    paddingTop: 93,
    paddingLeft: 130,
  },
});
