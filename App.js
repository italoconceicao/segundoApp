// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, TextInput } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text> Um Texto </Text>
//       <Text> Outro Texto </Text>
//       <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }}
//         style={{ width: 100, height: 100 }}
//       />
//       <TextInput style={{ height: 30, borderColor: 'grey', borderWidth: 1, padding: 5 }} defaultValue='Digite seu texto aqui' />
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react'
import { View, Text, TextInput } from 'react-native'

const Cat = () => {
  const name = 'Maru'
  return (
    <View>
      <Text>Hello, I'm {name}, your cat</Text>
      <Text>and your name is...</Text>
      <TextInput style={{ height: 40, width: '50%', textAlign: 'center', borderWidth: 2, borderColor: 'gray' }} defaultValue='your name here' />
    </View>
  )
};

const Cafe = () => {
  return (
    <View>
      <Text>Welcome</Text>
      <Cat />
      <Cat />
      <Cat />
    </View>
  )
}

export default Cafe