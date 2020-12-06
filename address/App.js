import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './MainRoot/Root'

export default function App() {
  return (
    <Root/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
// // 

// import React,{Component}from 'react';
// import { StyleSheet, Text, View, FlatList, Dimensions,Image} from 'react-native';


// const data = [
//   { key: 'https://bit.ly/36nAlLg' }, 
//   { key: 'https://bit.ly/33p6dgz' }, 
//   { key: 'https://bit.ly/2KSqEMt' }, 
//   { key: 'https://bit.ly/33p6dgz' }, 
//    { key: 'https://bit.ly/33p6dgz' },
//    { key: 'https://bit.ly/36luLcd' },
//    { key: 'https://bit.ly/2KSqEMt' },
//    { key: 'https://bit.ly/33p6dgz' },
//    { key: 'https://bit.ly/33p6dgz' },
//    { key: 'https://bit.ly/33p6dgz' },
//    { key: 'https://bit.ly/2HViVMy' },
//    { key: 'https://bit.ly/33p6dgz' },
//    { key: 'https://bit.ly/33p6dgz' },
//    { key: 'https://bit.ly/33p6dgz' },
//    { key: 'https://bit.ly/33p6dgz' },
//    { key: 'https://bit.ly/36nAlLg' },  
//    { key: 'https://bit.ly/2KSqEMt' },
//    { key: 'https://bit.ly/36luLcd' },
   
   

// ];


// const formatData = (data, numColumns) => {
//   const numberOfFullRows = Math.floor(data.length / numColumns);
// let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
//   while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
//     data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
//     numberOfElementsLastRow++;
//   }

//   return data;
// };

// const numColumns = 4;
// export default class App extends React.Component {
//   renderItem = ({ item, index }) => {
//     if (item.empty === true) {
//       return <View style={[styles.item, styles.itemInvisible]} />;
//     }
//     return (
//       <View style={styles.item}>
     
//         {/* <Text style={styles.itemText}>{item.key}</Text> */}
//         {/* <Image style={{width:50,height:50}} source={{uri:item.key}} > </Image>   */}

//         <Image source = {{uri:item.key}}
//    style = {{ width: "100%", height: "100%" }}></Image>
//             </View>
//     );
//   };

//   render() {
//     return (
//       <FlatList
//         data={formatData(data, numColumns)}
//         style={styles.container}
//         renderItem={this.renderItem}
//         numColumns={numColumns}
//       />
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginVertical: 20,
//   },
//   item: {
//     backgroundColor: '#4D243D',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     margin: 1,
//     height: Dimensions.get('window').width / numColumns, // approximate a square
//   },
//   itemInvisible: {
//     backgroundColor: 'transparent',
//   },
//   itemText: {
//     color: '#fff',
//   },
// });