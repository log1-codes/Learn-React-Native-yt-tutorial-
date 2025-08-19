// import {
//   Alert,
//   Button,
//   Image,
//   Pressable,
//   StyleSheet,
//   Text,
//   Touchable,
//   TouchableHighlight,
//   TouchableOpacity,
//   View,
// } from 'react-native';
// import React from 'react';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import { ScrollView, StyleSheet, View } from 'react-native';

// const App = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text style={styles.text}>Hello ji</Text>
//       <Image
//         style={{
//           width: 200,
//           height: 200,
//         }}
//         source={{
//           uri: 'https://images.unsplash.com/photo-1755096731687-d0b6efac246d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//         }}
//       />

//       {/* <Button title="click here"></Button>
//       <TouchableOpacity
//         style={{
//           padding: 10,
//           backgroundColor: 'green',
//           marginTop: 20,
//           width: 200,
//           borderRadius: 20,
//         }}
//         onPress={() => {
//           Alert.alert('You just pressed this button');
//         }}
//       >
//         <Text>hello,This is Touchable button</Text>
//       </TouchableOpacity>

//       <TouchableHighlight
//         style={{
//           padding: 10,
//           backgroundColor: 'green',
//           marginTop: 20,
//           width: 200,
//           borderRadius: 20,
//         }}
//         onPress={() => {
//           Alert.alert('You just pressed this button');
//         }}
//       >
//         <Text>Touchablle highlight button</Text>
//       </TouchableHighlight> */}

//       <Pressable style={styles.button}>
//         <Text style={styles.btnText}>Press me</Text>
//       </Pressable>
//     </SafeAreaView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container:{
//     width:"100%",
//     height:"100%",
//     backgroundColor:"#ffffff",
//     padding:20,
//     gap:10,
//   },

//   text:{
//     fontSize:20,
//     color:"black",
//     fontWeight:"bold"
//   }
//   ,
//   button :{
//     width:120,
//     padding:10,
//     // paddingVertical:7,
//     // paddingHorizontal:10,
//     backgroundColor:"#666",
//     justifyContent:"center",
//     alignItems:"center",
//     borderRadius:50,
//     marginTop:10,
//     // borderWidth:3,
//     // borderColor:"black"
//   }
//   ,
//   btnText : {
//     color:"white",
//     fontWeight:"500",
//     fontSize:18,
// }
// });

// theme styling

// import { StyleSheet, Text, useColorScheme, View } from 'react-native/';

// const App = () => {
// const theme =  useColorScheme()
// const isDarkMode = theme === "dark"
//   const backgroundColor = isDarkMode ?"black" :"white";
//   const textColor = isDarkMode?"white":"black"

//   return (
//     <View style={[styles.container, {backgroundColor:backgroundColor}]}>
//       <Text style={[styles.text , {color:textColor}]}>App </Text>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     justifyContent:"center",
//     alignItems:"center"
//   },
//   text:{
//     fontSize:20,
//     fontWeight:"bold",
//     color:"black"
//   }

// });

/// explaining css units with the cause which to use when

// import { Text, View } from 'react-native/';
// import { StyleSheet } from 'react-native';

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View
//         style={{ width: '50%', height: 200, backgroundColor: 'red' }}
//       ></View>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#dadada',
//   },
// });

// import { Text, View } from 'react-native/';
// import { StyleSheet } from 'react-native';
// const App = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box2} />
//       <View style={[styles.box3 , {backgroundColor:"orange"}]} />
//     </View>
//   );
// };

// export default App;
// //1+2+3 =6
// //1/6 2/6 3/6
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     flexDirection: 'column',
//     // justifyContent: 'center',
//     alignItems: 'center',
//     alignContent:'center',
//     flexWrap:"wrap"
//   },
//   box1: {
//     width: 80,
//     height: 80,
//     backgroundColor: 'red',
//   },
//   box2: {
//     width: 80,
//     height: 80,
//     backgroundColor: 'yellow',
//   },
//   box3: {
//     width: 80,
//     height: 80,
//     backgroundColor: 'green',
//   },
// });\

//scrollable

// const App = () => {
//   return (
//     <ScrollView
//       contentContainerStyle={{ gap: 10 }}
//       horizontal
//       style={styles.container}
//     >
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//       <View style={styles.box1} />
//       <View style={styles.box2} />
//       <View style={styles.box3} />
//     </ScrollView>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     padding: 10,
//   },
//   box1: {
//     width: 80,
//     height: 80,
//     backgroundColor: 'red',
//     borderRadius: 50,
//   },
//   box2: {
//     width: 80,
//     height: 80,
//     backgroundColor: 'yellow',
//     borderRadius: 50,
//   },
//   box3: {
//     width: 80,
//     height: 80,
//     backgroundColor: 'green',
//     borderRadius: 50,
//   },
// });

//FLATLIST

// import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
// const dummy = [
//   {
//     id: 1,
//     name: 'Anurag Sharma',
//     email: 'anurag.sharma@example.com',
//     image: 'https://randomuser.me/api/portraits/men/1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Priya Mehta',
//     email: 'priya.mehta@example.com',
//     image: 'https://randomuser.me/api/portraits/women/2.jpg',
//   },
//   {
//     id: 3,
//     name: 'Rohit Verma',
//     email: 'rohit.verma@example.com',
//     image: 'https://randomuser.me/api/portraits/men/3.jpg',
//   },
//   {
//     id: 4,
//     name: 'Sneha Kapoor',
//     email: 'sneha.kapoor@example.com',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//   },
//   {
//     id: 5,
//     name: 'Arjun Singh',
//     email: 'arjun.singh@example.com',
//     image: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//     id: 6,
//     name: 'Neha Joshi',
//     email: 'neha.joshi@example.com',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//   },
//   {
//     id: 7,
//     name: 'Karan Patel',
//     email: 'karan.patel@example.com',
//     image: 'https://randomuser.me/api/portraits/men/7.jpg',
//   },
//   {
//     id: 8,
//     name: 'Aditi Nair',
//     email: 'aditi.nair@example.com',
//     image: 'https://randomuser.me/api/portraits/women/8.jpg',
//   },
//   {
//     id: 9,
//     name: 'Vikram Rao',
//     email: 'vikram.rao@example.com',
//     image: 'https://randomuser.me/api/portraits/men/9.jpg',
//   },
//   {
//     id: 10,
//     name: 'Meera Iyer',
//     email: 'meera.iyer@example.com',
//     image: 'https://randomuser.me/api/portraits/women/10.jpg',
//   },
//   {
//     id: 11,
//     name: 'Siddharth Khanna',
//     email: 'siddharth.khanna@example.com',
//     image: 'https://randomuser.me/api/portraits/men/11.jpg',
//   },
//   {
//     id: 12,
//     name: 'Riya Malhotra',
//     email: 'riya.malhotra@example.com',
//     image: 'https://randomuser.me/api/portraits/women/12.jpg',
//   },
//   {
//     id: 13,
//     name: 'Aditya Bansal',
//     email: 'aditya.bansal@example.com',
//     image: 'https://randomuser.me/api/portraits/men/13.jpg',
//   },
//   {
//     id: 14,
//     name: 'Tanvi Desai',
//     email: 'tanvi.desai@example.com',
//     image: 'https://randomuser.me/api/portraits/women/14.jpg',
//   },
//   {
//     id: 15,
//     name: 'Manish Chauhan',
//     email: 'manish.chauhan@example.com',
//     image: 'https://randomuser.me/api/portraits/men/15.jpg',
//   },
//   {
//     id: 16,
//     name: 'Ishita Gupta',
//     email: 'ishita.gupta@example.com',
//     image: 'https://randomuser.me/api/portraits/women/16.jpg',
//   },
//   {
//     id: 17,
//     name: 'Rahul Reddy',
//     email: 'rahul.reddy@example.com',
//     image: 'https://randomuser.me/api/portraits/men/17.jpg',
//   },
//   {
//     id: 18,
//     name: 'Kavya Menon',
//     email: 'kavya.menon@example.com',
//     image: 'https://randomuser.me/api/portraits/women/18.jpg',
//   },
//   {
//     id: 19,
//     name: 'Harsh Vardhan',
//     email: 'harsh.vardhan@example.com',
//     image: 'https://randomuser.me/api/portraits/men/19.jpg',
//   },
//   {
//     id: 20,
//     name: 'Simran Kaur',
//     email: 'simran.kaur@example.com',
//     image: 'https://randomuser.me/api/portraits/women/20.jpg',
//   },
// ];

// const App = () => {
//   return (
//     <View style={styles.container}>

//     {/* //flatlist  */}

//     <FlatList
//     data={dummy}
//     renderItem={({item})=>(
//        <View style={styles.card}>
//         <Image
//           style={{
//             width: 40,
//             height: 40,
//             borderRadius: 50,
//             borderWidth: 1,
//             borderColor: 'black',
//           }}
//           source={{
//             uri: 'https://cdn.pixabay.com/photo/2025/02/13/09/00/girl-9403330_1280.jpg',
//           }}
//         />

//           <Text>{item.name}</Text>
//           <Text>{item.email}</Text>

//       </View>
//     )}
//     keyExtractor={item=>item.id}
//     ItemSeparatorComponent={<View style={{height:10}}/>}
//     numColumns={2}
//     columnWrapperStyle={{gap:10}}
//     // extraData={} // here those things are passed which are responsible for rendering if they change
//     />

//     </View>
//   );
// };
// export default App;

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//     height: '100%',
//     backgroundColor: '#dadada',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   card: {
//     width: 150,
//     height: 100,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     padding: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

//Handeling User INPUT

// import { useState } from 'react';
// import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
// const App = () => {
//   const [text, setText] = useState('');
//   const [submittedText, setSubmittedText] = useState('');
//   const handleSubmit = () => {
//     setSubmittedText(text);
//     setText(' ');
//   };
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Input Tutorial in React Native</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter the text here please "
//         value={text}
//         onChangeText={text => setText(text)}
//         multiline
//         numberOfLines={1}
//       />
//       <Button onPress={handleSubmit} title="Submit" />
//       {submittedText ? <Text>Result : {submittedText}</Text> : null}
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     gap: 10,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 50,
//   },
//   input: {
//     width: '100%',
//     padding: 5,
//     paddingVertical: 10,
//     borderWidth: 1,
//     borderRadius: 5,
//   },
// });

//navigation
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Search from './src/screens/Search';
import Icon from 'react-native-vector-icons/AntDesign';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: 'yellow',
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home Screen',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Search" component={Search} />
    </Stack.Navigator>
  );
};

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          height: 80,
          paddingBottom: 10,
          paddingTop: 5,
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="home" size={size || 24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="user" size={size || 24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color, size }) => (
            <Icon name="search1" size={size || 24} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  // Add your styles here
});