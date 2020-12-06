  import firebase from 'firebase/app';
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCzIjWBwZBWCpdzgYWsBGtAfMBCmzCQQQY",
  authDomain: "yellofie-cb0b5.firebaseapp.com",
  databaseURL: "https://yellofie-cb0b5.firebaseio.com",
  projectId: "yellofie-cb0b5",
  storageBucket: "yellofie-cb0b5.appspot.com",
  messagingSenderId: "754067299875",
  appId: "1:754067299875:web:70cc1c2154ece08c4a9b96",
  measurementId: "G-7F1JJSJ806"
};
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export {storage,firebase as default};