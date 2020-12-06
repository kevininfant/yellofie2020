import * as ImagePicker from 'expo-image-picker';
import {storage} from './firebaseconfig'
export const PickImage = async(type) =>{
  switch (type) {
    case 'Camera':
     let resultCam = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      });
      if (!resultCam.cancelled) {
       return resultCam;
      }
    
      case 'Storage':
       let resultStr = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      // console.log(result);
        if (!resultStr.cancelled) {
        return resultStr;
      }
    default:
      break;
  }
}

export const firebaseImageUpload = async(uri) =>{
  let data  = await fetch(uri);
  let image = await data.blob();
  let imageName = 'sampleImg';
  let upload = await storage().ref().child("images/"+ imageName);
  return upload.put(image);
  
}