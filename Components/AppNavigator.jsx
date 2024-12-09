// Siddik bhai

import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Entypo from 'react-native-vector-icons/Entypo';
import CustomDrawer from './CustomDrawer';
import HideMobileSafe01 from './Screens/HideMobileSafe01';
import About from './Screens/About';
import AppGuide from './Screens/AppGuide';
import ContactBackup from './Screens/ContactBackup';
import EmergencyMode from './Screens/EmergencyMode';
import HelpLine from './Screens/HelpLine';
import CustomHeader from './Screens/CustomHeader';
import BottomTabNavigator from './BottomTabNavigator';

import Permission from './Permission/Permission';
import CallLogScreen from './Permission/CallLogScreen';
import MediaGalleryScreen from './Permission/MediaGalleryScreen ';
import IMEINumberScreen from './Permission/IMEINumberScreen';

const Drawer = createDrawerNavigator();
const AppNavigator = () => {
  return (
    <Drawer.Navigator
     drawerContent={(props) => <CustomDrawer {...props} />}
     screenOptions={{
      drawerStyle: {
        backgroundColor: 'rgba(36, 27, 27, 0.9)',  // Same background as CustomDrawer
      },
    }}
     >
        <Drawer.Screen
        name="Mobile Safe"
        component={BottomTabNavigator} // Har screen par BottomTabs visible honge
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="Mobile Safe" />,
        }}
       
      />
      {/* <Drawer.Screen
        name="Mobile Safe"
        component={Home}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="Mobile Safe" />,
        }}
      /> */}
      <Drawer.Screen
        name="HideMobileSafe01"
        component={HideMobileSafe01}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="Hide Mobile Safe" />,
        }}
      />
      <Drawer.Screen
        name="EmergencyMode"
        component={EmergencyMode}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="Emergency Mode" />,
        }}
      />
      <Drawer.Screen
        name="AppGuide"
        component={AppGuide}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="App Guide" />,
        }}
      />
      <Drawer.Screen
        name="ContactBackup"
        component={ContactBackup}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="Contact Backup" />,
        }}
      />
      <Drawer.Screen
        name="HelpLine"
        component={HelpLine}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="Help Line" />,
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
        }}
      />



      {/* Dummy */}
      {/* permission */}
      <Drawer.Screen
        name="Permission"
        component={Permission}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
        }}
      />
      {/* CallLogScreen */}
      <Drawer.Screen
        name="CallLogScreen"
        component={CallLogScreen}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
        }}
      />
      {/* MediaGalleryScreen */}
      <Drawer.Screen
        name="MediaGalleryScreen"
        component={MediaGalleryScreen}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
        }}
      />
      {/* IMEINumberScreen */}
      <Drawer.Screen
        name="IMEINumberScreen"
        component={IMEINumberScreen}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
        }}
      />

    </Drawer.Navigator>
  );
};

export default AppNavigator

const styles = StyleSheet.create({
  customHeader: {
    height: 70,
    backgroundColor: '#111e11',
    borderBottomWidth: 1,
    borderBottomColor: '#ECD974',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  }
  ,
  headerTitle: {
    fontSize: 24,
    color: '#ECD974',
    marginLeft: 8,
    fontWeight: '500'
  },
  headerLeftSection: {
    width: '55%',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    paddingLeft: 10,
    paddingTop: 10

  },
  headerRightSection: {
    width: '45%',
    height: '100%'
  },
  headerImg: {
    width: 100,
    height: 105,
    marginLeft: 70,
    marginTop: 1
  }
})














// 2

// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './Home';
// import CustomDrawer from './CustomDrawer';
// import HideMobileSafe01 from './Screens/HideMobileSafe01';
// import EmergencyMode from './Screens/EmergencyMode';
// import ContactBackup from './Screens/ContactBackup';
// import AppGuide from './Screens/AppGuide';
// import HelpLine from './Screens/HelpLine';
// import About from './Screens/About';
// import { StyleSheet, Text, View } from 'react-native';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// // TabScreen

// import Remote from './TabScreen/Remote';
// import DontTouch from './TabScreen/DontTouch';
// import WomenChild from './TabScreen/WomenChild';

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// // Bottom Tab Navigator
// const TabNavigator = () => (
//   <Tab.Navigator
//   screenOptions={{
//     headerShown: false,
//     tabBarStyle: {
//       position: 'absolute',
//       backgroundColor: 'rgba(45, 54, 20, 0.9)',
//       borderTopWidth: 0,
//       elevation: 0,
//       zIndex: 999, // Increase z-index here
//       height: 81, // Set height to 81px
//       borderTopLeftRadius: 14, // Set top-left border radius
//       borderTopRightRadius: 14, // Set top-right border radius
//     },
//   }}

//   >
//     <Tab.Screen name="Home" component={Home} />
//     <Tab.Screen name="Remote" component={Remote} />
//     <Tab.Screen name="DontTouch" component={DontTouch} />
//     <Tab.Screen name="WomenChild" component={WomenChild} />
//   </Tab.Navigator>

// );

// // Stack Navigator for Drawer Screens with Tabs
// const DrawerStackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
//     <Stack.Screen name="HideMobileSafe01" component={HideMobileSafe01} />
//     <Stack.Screen name="EmergencyMode" component={EmergencyMode} />
//     <Stack.Screen name="ContactBackup" component={ContactBackup} />
//     <Stack.Screen name="AppGuide" component={AppGuide} />
//     <Stack.Screen name="HelpLine" component={HelpLine} />
//     <Stack.Screen name="About" component={About} />
//   </Stack.Navigator>
// );

// // Drawer Navigator with Stack and Tab Navigators Inside
// const AppNavigator = () => {
//   return (
//     <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
//       <Drawer.Screen
//         name="DrawerStack"
//         component={DrawerStackNavigator}
//         options={{
//           header: ({ navigation }) => (
//             <View style={styles.customHeader}>
//               <View style={styles.headerLeftSection}>
//                 <Text onPress={() => navigation.openDrawer()}>
//                   <Entypo name="menu" size={35} color="#ECD974" />
//                 </Text>
//                 <Text style={styles.headerTitle}>Mobile Safe</Text>
//               </View>
//             </View>
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   customHeader: {
//     height: 70,
//     backgroundColor: '#111e11',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ECD974',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   headerTitle: {
//     fontSize: 24,
//     color: '#ECD974',
//     marginLeft: 8,
//     fontWeight: '500',
//   },
//   headerLeftSection: {
//     width: '55%',
//     flexDirection: 'row',
//     height: '100%',
//     paddingLeft: 10,
//     paddingTop: 10,
//   },
// });

// export default AppNavigator;

// 3

// import React from 'react';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './Home';
// import CustomDrawer from './CustomDrawer';
// import HideMobileSafe01 from './Screens/HideMobileSafe01';
// import EmergencyMode from './Screens/EmergencyMode';
// import ContactBackup from './Screens/ContactBackup';
// import AppGuide from './Screens/AppGuide';
// import HelpLine from './Screens/HelpLine';
// import About from './Screens/About';
// import { StyleSheet, Text, View, Image } from 'react-native';
// import Entypo from 'react-native-vector-icons/Entypo';
// import Ionicons from 'react-native-vector-icons/Ionicons';

// // TabScreen
// import Remote from './TabScreen/Remote';
// import DontTouch from './TabScreen/DontTouch';
// import WomenChild from './TabScreen/WomenChild';

// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

//  Custom Tab Icon Component
// const CustomTabIcon = ({ source, label, customStyle, iconStyle }) => (
//   <View style={[{ alignItems: 'center', marginTop: 10 }, customStyle]}>
//     <Image source={source} style={[{ width: 24, height: 24 }, iconStyle]} />
//     <Text style={{ color: '#fff', fontSize: 12, width: '100%' }}>{label}</Text>
//   </View>
// );


// const TabNavigator = () => (
//   <Tab.Navigator
//     screenOptions={{
//       headerShown: false,
//       tabBarStyle: {
//         position: 'absolute',
//         backgroundColor: 'rgba(45, 54, 20, 0.9)',
//         borderTopWidth: 0,
//         elevation: 0,
//         zIndex: 999,
//         height: 81,
//         borderTopLeftRadius: 14,
//         borderTopRightRadius: 14,
//       },
//     }}
//   >
//     <Tab.Screen
//       name="Home"
//       component={Home}
//       options={{
//         tabBarIcon: () => (
//           <CustomTabIcon
//             source={require('../image/Mobile_Safe/HomeBottomNav.png')}
//             label="Home"
//             customStyle={{ marginTop: 5, backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 10 }}
//             iconStyle={{ width: 28, height: 28 }} // Home icon size
//           />
//         ),
//         tabBarLabel: () => null,
//       }}
//     />
//     <Tab.Screen
//       name="Remote"
//       component={Remote}
//       options={{
//         tabBarIcon: () => (
//           <CustomTabIcon
//             source={require('../image/Mobile_Safe/remoteBottomNav.png')}
//             label="Remote"
//             customStyle={{ marginTop: 8, backgroundColor: 'rgba(0, 0, 255, 0.1)', borderRadius: 10 }}
//             iconStyle={{ width: 32, height: 32 }} // Remote icon size
//           />
//         ),
//         tabBarLabel: () => null,
//       }}
//     />
    // <Tab.Screen
    //   name="DontTouch"
    //   component={DontTouch}
    //   options={{
    //     tabBarIcon: () => (
    //       <CustomTabIcon
    //         source={require('../image/Mobile_Safe/donttouchBottomNav.png')}
    //         label="DontTouch"
    //         customStyle={{ marginTop: 10, backgroundColor: 'rgba(255, 0, 0, 0.1)', borderRadius: 10 }}
    //         iconStyle={{ width: 32, height: 34 }} // DontTouch icon size
    //       />
    //     ),
    //     tabBarLabel: () => null,
    //   }}
    // />
    // <Tab.Screen
    //   name="WomenChild"
    //   component={WomenChild}
    //   options={{
    //     tabBarIcon: () => (
    //       <CustomTabIcon
    //         source={require('../image/Mobile_Safe/WomenBottomNav.png')}
    //         label="WomenChild"
    //         customStyle={{ marginTop: 7, backgroundColor: 'rgba(0, 255, 0, 0.1)', borderRadius: 10 }}
    //         iconStyle={{ width: 36, height: 36 }} // WomenChild icon size
    //       />
    //     ),
    //     tabBarLabel: () => null,
    //   }}
    // />
//   </Tab.Navigator>
// );





// // Stack Navigator for Drawer Screens with Tabs
// const DrawerStackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
//     <Stack.Screen name="HideMobileSafe01" component={HideMobileSafe01} />
//     <Stack.Screen name="EmergencyMode" component={EmergencyMode} />
//     <Stack.Screen name="ContactBackup" component={ContactBackup} />
//     <Stack.Screen name="AppGuide" component={AppGuide} />
//     <Stack.Screen name="HelpLine" component={HelpLine} />
//     <Stack.Screen name="About" component={About} />
//   </Stack.Navigator>
// );

// // Drawer Navigator with Stack and Tab Navigators Inside
// const AppNavigator = () => {
//   return (
//     <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
//       <Drawer.Screen
//         name="DrawerStack"
//         component={DrawerStackNavigator}
//         options={{
//           header: ({ navigation }) => (
//             <View style={styles.customHeader}>
//               <View style={styles.headerLeftSection}>
//                 <Text onPress={() => navigation.openDrawer()}>
//                   <Entypo name="menu" size={35} color="#ECD974" />
//                 </Text>
//                 <Text style={styles.headerTitle}>Mobile Safe</Text>
//               </View>
//             </View>
//           ),
//         }}
//       />
//     </Drawer.Navigator>
//   );
// };

// const styles = StyleSheet.create({
//   customHeader: {
//     height: 70,
//     backgroundColor: '#111e11',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ECD974',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 8,
//   },
//   headerTitle: {
//     fontSize: 24,
//     color: '#ECD974',
//     marginLeft: 8,
//     fontWeight: '500',
//   },
//   headerLeftSection: {
//     width: '55%',
//     flexDirection: 'row',
//     height: '100%',
//     paddingLeft: 10,
//     paddingTop: 10,
//   },
// });

// export default AppNavigator;


