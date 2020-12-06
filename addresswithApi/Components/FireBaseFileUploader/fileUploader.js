import React, { Component } from 'react';
import {View, Text, StyleSheet, Image,Alert} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import * as firebase from 'firebase/app';
// import 'firebase/storage';
import { userUpdate } from "../../Servises/ApiServices";
import Button from '../PrimaryButton/primaryButton';

//
// Don't forget to initialize firebase!!!
//

const styles = StyleSheet.create({ 
  button: { 
    padding: 10, 
    borderWidth: 1, 
    borderColor: "white", 
    textAlign: "center", 
    maxWidth: 150,
    backgroundColor:"white"
  }
});

class FirebaseStorageUploader extends Component {
  storing=(url)=>{
    if(props.task=='profileImage'){
      var body={photoURL:url}
      userUpdate(body)
    }
  }

  onChooseImagePress = async () => {

    // let result = await ImagePicker.launchCameraAsync();
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      // uploadImage(result.uri, "test-image")
      const response = await fetch(result.uri);
      const blob = await response.blob();
  
      var ref = firebase.storage().ref().child("images/" + response)
         return ref.put(blob)
        .then(async(res) => {
       firebase.storage().ref().child("images/" + response).getDownloadURL()
  .then((url) => {
    console.log("URL",url)
      var body={photoURL:url}
      userUpdate(body)
  }).catch((err)=>{
    console.log(err)
  })
          // Alert.alert("Success");
          console.log(res)
        })
        .catch((error) => {
          // Alert.alert(error);
          console.log(error)
        });
    }
  }

  uploadImage = async (uri, imageName) => {

  }


  render () {
    return (
    <View>
      <Button 
      style={[styles.button]}
      onPress={this.onChooseImagePress}
      text="Choose Photo">
    </Button> 
    </View>);  
  }

}

export default FirebaseStorageUploader;




