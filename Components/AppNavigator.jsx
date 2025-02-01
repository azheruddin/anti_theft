// import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
// import React, { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import DrawerNavigation from './DrawerNavigation';

// const AppNavigator = ( {navigation} ) => {
//   const [isActivated, setIsActivated] = useState(false);
//   const [activationCode, setActivationCode] = useState('');
//   const [modalVisible, setModalVisible] = useState(true);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const fetchUserId = async () => {
//       try {
//         const userDetailsString = await AsyncStorage.getItem('userDetails');
//         if (userDetailsString) {
//           const userDetails = JSON.parse(userDetailsString);
//           if (userDetails.id) {
//             setUserId(userDetails.id);
//             console.log('User ID found:', userDetails.id);
//           } else {
//             console.log('User ID not found in user details.');
//             alert('User ID not found in user details. Please login again.');
//           }
//         } else {
//           console.log('User details not found.');
//           alert('User details not found. Please login again.');
//         }
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserId();
//   }, []);

//   const handleActivationSubmit = async () => {
//     if (!activationCode || !userId) {
//       alert('Please enter the activation code and ensure user ID is available.');
//       return;
//     }

//     try {
//       const response = await fetch('http://192.168.0.102/Anti_theft/public/api/verify-key', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           key_code: activationCode,
//           user_id: userId,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         navigation.navigate('DrawerNavigation');
//         setIsActivated(true);
//         setModalVisible(false);

//       } else {
//         alert(data.message || 'Invalid activation code. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error verifying activation code:', error);
//       alert('An error occurred. Please try again.');
//     } finally {
//       // Input ko blank karne ke liye
//       setActivationCode('');
//     }
//   };

//   return (
//     <>
//       <Modal visible={modalVisible} transparent animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.title}>Enter Activation Code</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter code"
//               value={activationCode}
//               onChangeText={setActivationCode}
//             />

//             <TouchableOpacity style={styles.button} onPress={handleActivationSubmit}>
//               <Text style={styles.buttonText}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>

//       {/* {isActivated && <DrawerNavigation />} */}
//     </>
//   );
// };

// export default AppNavigator;

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#111e11',
//     padding: 20,
//   },
//   modalContent: {
//     width: '100%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#ECD974',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '50%',
//     alignSelf: 'center',
//   },
//   buttonText: {
//     color: '#000',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// Main last code

// import React, { useEffect, useState } from 'react';
// import { StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AppNavigator = ({ navigation }) => {
//   const [isActivated, setIsActivated] = useState(false);
//   const [activationCode, setActivationCode] = useState('');
//   const [modalVisible, setModalVisible] = useState(true);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const fetchUserId = async () => {
//       try {
//         const userDetailsString = await AsyncStorage.getItem('userDetails');
//         if (userDetailsString) {
//           const userDetails = JSON.parse(userDetailsString);
//           if (userDetails.id) {
//             setUserId(userDetails.id);
//             console.log('User ID found:', userDetails.id);
//           } else {
//             console.log('User ID not found in user details.');
//             alert('User ID not found in user details. Please login again.');
//           }
//         } else {
//           console.log('User details not found.');
//           alert('User details not found. Please login again.');
//         }
//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

//     fetchUserId();
//   }, []);

//   const handleActivationSubmit = async () => {
//     if (!activationCode || !userId) {
//       alert('Please enter the activation code and ensure user ID is available.');
//       return;
//     }

//     try {
//       const response = await fetch('http://192.168.0.102/Anti_theft/public/api/verify-key', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           key_code: activationCode,
//           user_id: userId,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsActivated(true);
//         setModalVisible(false); // Modal बंद कर देंगे

//         // DrawerNavigation पर navigate
//         navigation.navigate("DrawerNavigation")
//       } else {
//         alert(data.message || 'Invalid activation code. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error verifying activation code:', error);
//       alert('An error occurred. Please try again.');
//     } finally {
//       setActivationCode(''); // Input blank करेंगे
//     }
//   };

//   if (!isActivated && modalVisible) {
//     return (
//       <Modal visible={modalVisible} transparent animationType="slide">
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             <Text style={styles.title}>Enter Activation Code</Text>
//             <TextInput
//               style={styles.input}
//               placeholder="Enter code"
//               value={activationCode}
//               onChangeText={setActivationCode}
//             />
//             <TouchableOpacity style={styles.button} onPress={handleActivationSubmit}>
//               <Text style={styles.buttonText}>Submit</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     );
//   }

//   // Activated case handled by navigation reset
//   return null;
// };

// export default AppNavigator;

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#111e11',
//     padding: 20,
//   },
//   modalContent: {
//     width: '100%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 15,
//     textAlign: 'center',
//   },
//   input: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 10,
//     borderRadius: 5,
//   },
//   button: {
//     backgroundColor: '#ECD974',
//     padding: 12,
//     borderRadius: 8,
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '50%',
//     alignSelf: 'center',
//   },
//   buttonText: {
//     color: '#000',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

import React, {useEffect, useState, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Login';
import SignInRegister from './Register';
import Splash from './Splash';
import Fitness from './Fitness/Fitness';
import DailyWorkout2 from './Fitness/DailyWorkout2';
import GenderSelection from './Fitness/GenderSelection';
import AddEmergencyContact from './AddUpdateContact/AddEmergencyContact';
import UpdateContact from './AddUpdateContact/UpdateContact';
import DrawerNavigation from './DrawerNavigation';
import PhoneNumber from './Permission/PhoneNumber';

import Permission from './Permission/Permission';
import CallLogScreen from './Permission/CallLogScreen';
import MediaGalleryScreen from './Permission/MediaGalleryScreen ';
import IMEINumberScreen from './Permission/IMEINumberScreen';
import Siren from './Permission/Siren';
import MovingPhoneSiren from './Permission/MovingPhoneSiren';
import USB from './Permission/USB';
import SendMessage from './Permission/SendMessage';
import DeviceAdminFeature from './Permission/DeviceAdminFeature ';
import SendSmsSiren from './Permission/SendSmsSiren';
import {NativeEventEmitter, NativeModules} from 'react-native';

const Stack = createNativeStackNavigator();
const {DeviceEventManagerModule} = NativeModules;


function AppNavigator() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  const navigationRef = useRef();
  // const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    // const checkUserLogin = async () => {
    //   try {
    //     const userId = await AsyncStorage.getItem('userId');
    //     setIsLoggedIn(!!userId); // userId ho to true, warna false
    //   } catch (error) {
    //     console.error('Error checking user login status:', error);
    //     setIsLoggedIn(false); // Default to logged out
    //   }
    // };

    const timer = setTimeout(() => {
      setSplashVisible(false);
      // checkUserLogin();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const eventEmitter = new NativeEventEmitter(DeviceEventManagerModule);
    const subscription = eventEmitter.addListener('openScreen', (screen) => {
      if (screen === 'SendSmsSiren') {
        navigationRef.current?.navigate('SendSmsSiren');
      }
    });
  
    return () => subscription.remove(); 
  }, []);
  

  // Ensure navigation based on `isLoggedIn`
  if (isSplashVisible) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SignInRegister"
          component={SignInRegister}
          options={{ headerShown: false }}
        />  */}
        <Stack.Screen
          name="DrawerNavigation"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />

        {/* Fitness */}
        <Stack.Screen
          name="Fitness"
          component={Fitness}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DailyWorkout2"
          component={DailyWorkout2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GenderSelection"
          component={GenderSelection}
          options={{headerShown: false}}
        />

        {/* Permission */}
        <Stack.Screen
          name="Permission"
          component={Permission}
          options={{headerShown: false}}
        />

        {/* CallLogScreen */}
        <Stack.Screen
          name="CallLogScreen"
          component={CallLogScreen}
          options={{headerShown: false}}
        />

        {/* MediaGalleryScreen */}
        <Stack.Screen
          name="MediaGalleryScreen"
          component={MediaGalleryScreen}
          options={{headerShown: false}}
        />

        {/* IMEINumberScreen */}
        <Stack.Screen
          name="IMEINumberScreen"
          component={IMEINumberScreen}
          options={{headerShown: false}}
        />

        {/* Siren */}
        <Stack.Screen
          name="Siren"
          component={Siren}
          options={{headerShown: false}}
        />

        {/* MovingPhoneSiren */}
        <Stack.Screen
          name="MovingPhoneSiren"
          component={MovingPhoneSiren}
          options={{headerShown: false}}
        />

        {/* USB */}
        <Stack.Screen
          name="USB"
          component={USB}
          options={{headerShown: false}}
        />

        {/* AddEmergencyContact */}
        <Stack.Screen
          name="AddEmergencyContact"
          component={AddEmergencyContact}
          options={{headerShown: false}}
        />

        {/* UpdateContact */}
        <Stack.Screen
          name="UpdateContact"
          component={UpdateContact}
          options={{headerShown: false}}
        />

        {/* PhoneNumber */}
        <Stack.Screen
          name="PhoneNumber"
          component={PhoneNumber}
          options={{headerShown: false}}
        />

        {/* SendMessage */}
        <Stack.Screen
          name="SendMessage"
          component={SendMessage}
          options={{headerShown: false}}
        />

        {/* DeviceAdminFeature */}
        <Stack.Screen
          name="DeviceAdminFeature"
          component={DeviceAdminFeature}
          options={{headerShown: false}}
        />

        {/* SendSmsSiren */}
        <Stack.Screen
          name="SendSmsSiren"
          component={SendSmsSiren}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
