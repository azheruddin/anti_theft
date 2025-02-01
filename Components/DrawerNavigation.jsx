// // Siddik bhai

// import { Image, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import Home from './Home';
// import Entypo from 'react-native-vector-icons/Entypo';
// import CustomDrawer from './CustomDrawer';
// import HideMobileSafe01 from './Screens/HideMobileSafe01';
// import About from './Screens/About';
// import AppGuide from './Screens/AppGuide';
// import ContactBackup from './Screens/ContactBackup';
// import EmergencyMode from './Screens/EmergencyMode';
// import HelpLine from './Screens/HelpLine';
// import CustomHeader from './Screens/CustomHeader';
// import BottomTabNavigator from './BottomTabNavigator';

// import Permission from './Permission/Permission';
// import CallLogScreen from './Permission/CallLogScreen';
// import MediaGalleryScreen from './Permission/MediaGalleryScreen ';
// import IMEINumberScreen from './Permission/IMEINumberScreen';
// import Siren from './Permission/Siren';
// import MovingPhoneSiren from './Permission/MovingPhoneSiren';
// import USB from './Permission/USB';

// const Drawer = createDrawerNavigator();
// const DrawerNavigation = () => {
//   return (
// <Drawer.Navigator
//  drawerContent={(props) => <CustomDrawer {...props} />}
//  screenOptions={{
//   drawerStyle: {
//     backgroundColor: 'rgba(36, 27, 27, 0.9)',  // Same background as CustomDrawer
//   },
// }}
//  >
//     <Drawer.Screen
//     name="Mobile Safe"
//     component={BottomTabNavigator} // Har screen par BottomTabs visible honge
//     options={{
//       header: ({ navigation }) => <CustomHeader navigation={navigation} title="Mobile Safe" />,
//     }}

//   />
//   {/* <Drawer.Screen
//     name="Mobile Safe"
//     component={Home}
//     options={{
//       header: ({ navigation }) => <CustomHeader navigation={navigation} title="Mobile Safe" />,
//     }}
//   /> */}
  // <Drawer.Screen
  //   name="HideMobileSafe01"
  //   component={HideMobileSafe01}
  //   options={{
  //     header: ({ navigation }) => <CustomHeader navigation={navigation} title="Hide Mobile Safe" />,
  //   }}
  // />
  // <Drawer.Screen
  //   name="EmergencyMode"
  //   component={EmergencyMode}
  //   options={{
  //     header: ({ navigation }) => <CustomHeader navigation={navigation} title="Emergency Mode" />,
  //   }}
  // />
  // <Drawer.Screen
  //   name="AppGuide"
  //   component={AppGuide}
  //   options={{
  //     header: ({ navigation }) => <CustomHeader navigation={navigation} title="App Guide" />,
  //   }}
  // />
  // <Drawer.Screen
  //   name="ContactBackup"
  //   component={ContactBackup}
  //   options={{
  //     header: ({ navigation }) => <CustomHeader navigation={navigation} title="Contact Backup" />,
  //   }}
  // />
  // <Drawer.Screen
  //   name="HelpLine"
  //   component={HelpLine}
  //   options={{
  //     header: ({ navigation }) => <CustomHeader navigation={navigation} title="Help Line" />,
  //   }}
  // />
  // <Drawer.Screen
  //   name="About"
  //   component={About}
  //   options={{
  //     header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
  //   }}
  // />



//   {/* Dummy */}
//   {/* permission */}
//   <Drawer.Screen
//     name="Permission"
//     component={Permission}
//     options={{
//       header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
//     }}
//   />
//   {/* CallLogScreen */}
//   <Drawer.Screen
//     name="CallLogScreen"
//     component={CallLogScreen}
//     options={{
//       header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
//     }}
//   />
//   {/* MediaGalleryScreen */}
//   <Drawer.Screen
//     name="MediaGalleryScreen"
//     component={MediaGalleryScreen}
//     options={{
//       header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
//     }}
//   />
//   {/* IMEINumberScreen */}
//   <Drawer.Screen
//     name="IMEINumberScreen"
//     component={IMEINumberScreen}
//     options={{
//       header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
//     }}
//   />
//   {/* Siren */}
//   <Drawer.Screen
//     name="Siren"
//     component={Siren}
//     options={{
//       header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
//     }}
//   />
//   {/* MovingPhoneSiren */}
//   <Drawer.Screen
//     name="MovingPhoneSiren"
//     component={MovingPhoneSiren}
//     options={{
//       header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
//     }}
//   />
//   {/* USB */}
//   <Drawer.Screen
//     name="USB"
//     component={USB}
//     options={{
//       header: ({ navigation }) => <CustomHeader navigation={navigation} title="About" />,
//     }}
//   />

// </Drawer.Navigator>
//   );
// };

// export default DrawerNavigation

// const styles = StyleSheet.create({
// customHeader: {
//   height: 70,
//   backgroundColor: '#111e11',
//   borderBottomWidth: 1,
//   borderBottomColor: '#ECD974',
//   flexDirection: 'row',
//   alignItems: 'center',
//   paddingVertical: 8,
// }
// ,
// headerTitle: {
//   fontSize: 24,
//   color: '#ECD974',
//   marginLeft: 8,
//   fontWeight: '500'
// },
// headerLeftSection: {
//   width: '55%',
//   display: 'flex',
//   flexDirection: 'row',
//   height: '100%',
//   paddingLeft: 10,
//   paddingTop: 10

// },
// headerRightSection: {
//   width: '45%',
//   height: '100%'
// },
// headerImg: {
//   width: 100,
//   height: 105,
//   marginLeft: 70,
//   marginTop: 1
// }
// })










// import React, { useState, useEffect } from 'react';
// import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import CustomDrawer from './CustomDrawer';
// import CustomHeader from './Screens/CustomHeader';
// import Home from './Home';
// import BottomTabNavigator from './BottomTabNavigator';
// import HideMobileSafe01 from './Screens/HideMobileSafe01';
// import Entypo from 'react-native-vector-icons/Entypo';
// import About from './Screens/About';
// import AppGuide from './Screens/AppGuide';
// import ContactBackup from './Screens/ContactBackup';
// import EmergencyMode from './Screens/EmergencyMode';
// import HelpLine from './Screens/HelpLine';


// const Drawer = createDrawerNavigator();

// const DrawerNavigation = () => {
//   // const [isActivated, setIsActivated] = useState(false);
//   const [activationCode, setActivationCode] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [userId, setUserId] = useState(null);
//   const [status, setStatus] = useState(null); // For user status
//   const [keyStatus, setKeyStatus] = useState(null); // State for key_status

//   // Fetch Login status ke liye
//   useEffect(() => {
//     const fetchUserStatus = async () => {
//       try {
//         const userDetailsString = await AsyncStorage.getItem('userDetails');
//         const userDetails = JSON.parse(userDetailsString);

//         if (userDetails && userDetails.status !== undefined) {
//           console.log('Fetched User Login Status:', userDetails.status); // Debug log
//           setStatus(userDetails.status);
//         } else {
//           console.log('User details not found in AsyncStorage.');
//         }
//       } catch (error) {
//         console.error('Error fetching user status from AsyncStorage:', error);
//       } finally {
//         setIsLoading(false); // Stop loading
//       }
//     };

//     fetchUserStatus();
//   }, []);

//   // Fetch activation status from AsyncStorage
//   useEffect(() => {
//     const fetchKeyStatus = async () => {
//       try {
//         const storedUserDetails = await AsyncStorage.getItem('userDetails'); // Get data from AsyncStorage
//         if (storedUserDetails) {
//           const parsedData = JSON.parse(storedUserDetails);
//           setKeyStatus(parsedData.key_status); // Set key_status in state
//           console.log('Key Status:', parsedData.key_status); // Log in console
//         }
//       } catch (error) {
//         console.error('Error fetching key status:', error);
//       }
//     };

//     fetchKeyStatus(); // Call the async function
//   }, []);



//   // Fetch user ID from AsyncStorage
//   useEffect(() => {
//     const fetchUserId = async () => {
//       try {
//         const userDetailsString = await AsyncStorage.getItem('userDetails');
//         const userDetails = JSON.parse(userDetailsString);

//         if (userDetails && userDetails.id) {
//           console.log('Fetched User ID:', userDetails.id); // Debug log
//           setUserId(userDetails.id);
//         } else {
//           console.log('No User ID found. Please log in again.');
//         }
//       } catch (error) {
//         console.error('Error fetching User ID from AsyncStorage:', error);
//       }
//     };
//     fetchUserId();
//   }, []);

//   // Handle activation submission
//   const handleActivationSubmit = async () => {
//     try {
//       if (!userId) {
//         alert('User ID not found. Please log in again.');
//         return;
//       }

//       const response = await fetch('http://192.168.0.105/Anti_theft/public/api/verify-key', {
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
//       console.log('Activation Response:', data); // Debugging
//       if (response.ok && data.success) {
//         await AsyncStorage.setItem('isActivated', 'true');
//         console.log('Saved isActivated: true'); // Confirm storage
//         setIsActivated(true);
//         Alert.alert('Activation Successful', 'Your device is now activated.');
//       } else {
//         Alert.alert('Error', data.message || 'Invalid activation code. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error verifying activation code:', error);
//       Alert.alert('Error', 'An error occurred. Please try again.');
//     } finally {
//       setActivationCode('');
//     }
//   };

//   // Monitor keyStatus state
//   useEffect(() => {
//     if (keyStatus === 1) {
//       console.log('UI Updated: Activation successful! Switching to Drawer Navigation.');
//       // UI will automatically update because the component will rerender
//     }
//   }, [keyStatus]); // Dependency array listens to `keyStatus`


//   // UI during loading
//   if (isLoading) {
//     return (
//       <View style={styles.centered}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   // Show activation screen if status is 0
//   if (keyStatus === 0) {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.title}>Enter Activation Code</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter code"
//           value={activationCode}
//           onChangeText={setActivationCode}
//         />
//         <TouchableOpacity style={styles.button} onPress={handleActivationSubmit}>
//           <Text style={styles.buttonText}>Submit</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }

//   // Drawer Navigator when status is 1


//   return (
//     <Drawer.Navigator
//       drawerContent={(props) => <CustomDrawer {...props} />}
//       screenOptions={{
//         drawerStyle: {
//           backgroundColor: 'rgba(36, 27, 27, 0.9)',
//         },
//       }}
//     >
//       <Drawer.Screen
//         name="Mobile Safe"
//         component={BottomTabNavigator}
//         options={{
//           header: ({ navigation }) => <CustomHeader navigation={navigation} title="Mobile Safe" />,
//         }}
//       />
//       {/* Add other screens similarly */}
//     </Drawer.Navigator>
//   );
// };

// export default DrawerNavigation;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//     backgroundColor: '#f9f9f9',
//   },
//   title: {
//     fontSize: 20,
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   input: {
//     width: '80%',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//   },
//   button: {
//     backgroundColor: '#ECD974',
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: '#111',
//     fontWeight: 'bold',
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });



import React, { useState, useEffect } from 'react';
import { Image, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from './CustomDrawer';
import CustomHeader from './Screens/CustomHeader';
import Home from './Home';
import BottomTabNavigator from './BottomTabNavigator';
import HideMobileSafe01 from './Screens/HideMobileSafe01';
import Entypo from 'react-native-vector-icons/Entypo';
import About from './Screens/About';
import AppGuide from './Screens/AppGuide';
import ContactBackup from './Screens/ContactBackup';
import EmergencyMode from './Screens/EmergencyMode';
import HelpLine from './Screens/HelpLine';
import API_ENDPOINTS from '../BaseURL/BaseURL';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [activationCode, setActivationCode] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [status, setStatus] = useState(0); // For user status
  const [keyStatus, setKeyStatus] = useState(0); // State for key_status

  // Fetch Login status ke liye
  useEffect(() => {
    const fetchUserStatus = async () => {
      try {
        const userDetailsString = await AsyncStorage.getItem('userDetails');
        const userDetails = JSON.parse(userDetailsString);

        if (userDetails && userDetails.status !== undefined) {
          console.log('Fetched User Login Status:', userDetails.status); // Debug log
          setStatus(userDetails.status);
        } else {
          console.log('User details not found in AsyncStorage.');
        }
      } catch (error) {
        console.error('Error fetching user status from AsyncStorage:', error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchUserStatus();
  }, []);

  // ye pahle user_id lege AsyncStorage se then uske base par uski keyStatus lege API
  
  useEffect(() => {
    const fetchKeyStatus = async () => {
      try {
        // Get user details from AsyncStorage
        const userDetailsString = await AsyncStorage.getItem('userDetails');
        const userDetails = JSON.parse(userDetailsString);

        if (userDetails && userDetails.id) {
          console.log('Fetched User ID:', userDetails.id); // Debug log
          setUserId(userDetails.id)
          // Call the API with the user_id (using GET method)
          const response = await fetch(API_ENDPOINTS.USER(userDetails.id), {
            method: 'GET', // Changing to GET method
            headers: {
              'Content-Type': 'application/json',
            },
          }
          );

          if (!response.ok) {
            throw new Error(`API error: ${response.statusText}`);
          }

          const responseData = await response.json();

          if (responseData.status === true) {
            const keyStatus = responseData.data?.key_status;


            if (keyStatus !== null) {
              console.log('Fetched Key Status:', keyStatus); // Debug log
              setKeyStatus(keyStatus);
            } else {
              console.log('Key status is null.');
              setKeyStatus('Not available');
            }
          } else {
            throw new Error(responseData.message || 'Failed to fetch user details.');
          }
        } else {
          console.log('No User ID found. Please log in again.');
          setError('User ID not found. Please log in again.');
        }
      } catch (err) {
        console.error('Error fetching key status:', err);
        setError(err.message || 'An unexpected error occurred.');
      } finally {

      }
    };

    fetchKeyStatus();
  }, []);


  // Handle activation submission
  const handleActivationSubmit = async () => {
    try {
      if (!userId) {
        alert('User ID not found. Please log in again.');
        return;
      }
      // API
      const response = await fetch(API_ENDPOINTS.VERIFYKEY, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          key_code: activationCode,
          user_id: userId,
        }),
      });

      const data = await response.json();


      if (response.ok && data.status) {


        await AsyncStorage.setItem('key_status', '1'); // Explicitly set key_status to '1' as string
        console.log('Saved isActivated: true'); // Confirm storage

        setKeyStatus(1); // Update key_status state immediately for re-render
        Alert.alert('Activation Successful', 'Your device is now activated.');
      } else {
        Alert.alert('Error', data.message || 'Invalid activation code. Please try again.');
      }
    } catch (error) {
      console.error('Error verifying activation code:', error);
      Alert.alert('Error', 'An error occurred. Please try again.');
    } finally {
      setActivationCode('');
    }
  };



  // Monitor keyStatus state
  // useEffect(() => {
  //   if (keyStatus === 1) {
  //     console.log('UI Updated: Activation successful! Switching to Drawer Navigation.');
  //   }
  //   if (keyStatus === 0) {
  //     console.log('UI Updated: Activation not successful! Switching to Drawer Navigation.');
  //   }
  // }, [keyStatus]); // Detect when keyStatus changes and re-render accordingly


  // UI during loading
  if (isLoading) {
    return (
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Show activation screen if status is 0
  if (keyStatus === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter Activation Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter code"

          value={activationCode}
          onChangeText={setActivationCode}
        />
        <TouchableOpacity style={styles.button} onPress={handleActivationSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Drawer Navigator when status is 1


  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'rgba(36, 27, 27, 0.9)',
        },
      }}
    >

      <Drawer.Screen
        name="BottomTabNavigator" // Ensure this name is consistent
        component={BottomTabNavigator}
        options={{
          header: ({ navigation }) => <CustomHeader navigation={navigation} title="Mobile Safe" />,
        }}
      />

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

      {/* Add other screens similarly */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#ECD974',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: '#111',
    fontWeight: 'bold',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});