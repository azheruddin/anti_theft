// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   SafeAreaView,
//   TextInput,
//   Alert,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
// } from 'react-native';
// import axios from 'axios'; // Import axios
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AddEmergencyContact = ({ navigation }) => {
//   const [contact1, setContact1] = useState('');
//   const [contact2, setContact2] = useState('');
//   const [userId, setUserId] = useState(null); // State to store user ID

//   // Function to load the user ID from AsyncStorage
//   const loadUserId = async () => {
//     try {
//       const userDetails = await AsyncStorage.getItem('userDetails');
//       if (userDetails) {
//         const parsedDetails = JSON.parse(userDetails);
//         return parsedDetails.id; // Extract user ID from stored details
//       }
//       return null;
//     } catch (error) {
//       console.error('Error fetching user ID:', error);
//       return null;
//     }
//   };

//   // Fetch user ID when component mounts
//   useEffect(() => {
//     const fetchUserId = async () => {
//       const id = await loadUserId();
//       setUserId(id); // Set the user ID in state
//     };

//     fetchUserId();
//   }, []);

//   // Function to handle sending contacts to the API using axios
//   const handleSave = async () => {
//     const userId = await loadUserId(); // Retrieve the user ID

//     if (!userId) {
//       Alert.alert('Error', 'User ID not found. Please log in again.');
//       return;
//     }

//     if (!contact1 || !contact2) {
//       Alert.alert('Error', 'Please fill in both contact numbers.');
//       return;
//     }

//     console.log('User ID:', userId);  // Log the user ID for debugging
//     console.log('Contact 1:', contact1);
//     console.log('Contact 2:', contact2);

//     const formData = new FormData();
//     formData.append('mobile_1', contact1);
//     formData.append('mobile_2', contact2);
//     formData.append('user_id', userId);

//     try {
//       const response = await axios.post(
//         'http://192.168.0.102/Anti_theft/public/api/storing_mob',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       if (response.status === 200) {
//         Alert.alert('Success', 'Emergency contacts have been saved!');
//       }
//     } catch (error) {
//       console.error('Failed to save contacts:', error.response?.data || error.message);
//       Alert.alert(
//         'Error',
//         error.response?.data?.message || 'Failed to save contacts. Please try again.'
//       );
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         style={styles.keyboardContainer}
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       >
//         <ScrollView contentContainerStyle={styles.scrollContent}>
//           <View style={styles.dialogBox}>
//             <Text style={styles.title}>Add Emergency Contact</Text>
//             <Text style={styles.description}>
//               If your phone is stolen and you are in an emergency, we will share
//               your location and photo with the emergency contact below.
//             </Text>

//             {/* Contact 1 Input */}
//             <TextInput
//               style={styles.contactInput}
//               placeholder="Enter Contact 1 Number"
//               placeholderTextColor="#ECD974"
//               keyboardType="phone-pad"
//               value={contact1}
//               onChangeText={setContact1}
//             />

//             {/* Contact 2 Input */}
//             <TextInput
//               style={styles.contactInput}
//               placeholder="Enter Contact 2 Number"
//               placeholderTextColor="#ECD974"
//               keyboardType="phone-pad"
//               value={contact2}
//               onChangeText={setContact2}
//             />

//             {/* Action Buttons */}
//             <View style={styles.actionButtonContainer}>
//               <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.goBack()}>
//                 <Text style={styles.actionButtonText}>CANCEL</Text>
//               </TouchableOpacity>
//               <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
//                 <Text style={styles.actionButtonText}>SAVE</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     backgroundColor: '#111e11',
//   },
//   keyboardContainer: {
//     flex: 1,
//   },
//   scrollContent: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   dialogBox: {
//     backgroundColor: '#111e11',
//     margin: 20,
//     padding: 16,
//     borderRadius: 10,
//     elevation: 5,
//     borderWidth: 1,
//     borderColor: '#ECD974',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     color: '#ECD974',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 14,
//     color: '#ECD974',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   contactInput: {
//     backgroundColor: '#000000',
//     borderWidth: 1,
//     borderColor: '#ECD974',
//     color: '#ECD974',
//     borderRadius: 10,
//     padding: 10,
//     marginBottom: 10,
//   },
//   actionButtonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   cancelButton: {
//     flex: 1,
//     backgroundColor: '#ECD974',
//     padding: 10,
//     marginRight: 10,
//     borderRadius: 20,
//     alignItems: 'center',
//   },
//   saveButton: {
//     flex: 1,
//     backgroundColor: '#ECD974',
//     padding: 10,
//     marginLeft: 10,
//     borderRadius: 20,
//     alignItems: 'center',
//   },
//   actionButtonText: {
//     color: '#000000',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
// });

// export default AddEmergencyContact;

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import API_ENDPOINTS from '../../BaseURL/BaseURL';
import axios from 'axios';


const AddEmergencyContact = ({ navigation }) => {
  const [contact1, setContact1] = useState(''); // State for Contact 1
  const [contact2, setContact2] = useState(''); // State for Contact 2
  const [userId, setUserId] = useState(null)
  const [keyStatus, setKeyStatus] = useState(null);

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


  // Function to handle saving contacts and sending them to the API
  const handleSave = async () => {
    if (!contact1 || !contact2) {
      Alert.alert('Error', 'Please fill in both contact numbers.');
      return;
    }

    if (!userId) {
      Alert.alert('Error', 'User ID not found. Please log in again.');
      return;
    }

    try {
      // Save contacts to AsyncStorage
      await AsyncStorage.setItem('contact1', contact1);
      await AsyncStorage.setItem('contact2', contact2);

      // Send contacts to the API
      const response = await axios.post(API_ENDPOINTS.STORINGMOB, {
        user_id: userId,
        activation: keyStatus,
        mobile_1: contact1,
        mobile_2: contact2,
      });

      // Check response
      if (response.status === 200 && response.data.status) {
        Alert.alert('Success', response.data.message || 'Emergency contacts have been saved and sent to the server!');
        Alert.alert("Number Stored successfully in my database")
 // Bottom.. jo hai wo Drawer.. me nested hai isiliye aise navigate karna pada  
        navigation.navigate('DrawerNavigation', {
          screen: 'BottomTabNavigator', 
      });
      
        
      } else {
        Alert.alert('Error', response.data.message || 'Failed to send data to the server.');
      }
    } catch (error) {
      console.error('Failed to save contacts:', error);
      Alert.alert('Error', 'Failed to save contacts. Please try again.');
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      {/* Gradient Header */}


      {/* Content */}
      <KeyboardAvoidingView
        style={styles.keyboardContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.dialogBox}>
            <Text style={styles.title}>Add Emergency Contact</Text>
            <Text style={styles.description}>
              If your phone is stolen and you are in an emergency, we will share
              your location and photo with the emergency contact below.
            </Text>

            {/* Contact 1 Input */}
            <TextInput
              style={styles.contactInput}
              placeholder="Enter Contact 1 Number"
              placeholderTextColor="#ECD974"
              keyboardType="phone-pad"
              value={contact1}
              onChangeText={setContact1}
            />

            {/* Contact 2 Input */}
            <TextInput
              style={styles.contactInput}
              placeholder="Enter Contact 2 Number"
              placeholderTextColor="#ECD974"
              keyboardType="phone-pad"
              value={contact2}
              onChangeText={setContact2}
            />

            {/* Action Buttons */}
            <View style={styles.actionButtonContainer}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.actionButtonText}>CANCEL</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.actionButtonText}>SAVE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#111e11', // Black background
  },
  header: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    color: '#000000', // Black text
    fontWeight: 'bold',
    marginLeft: 10,
  },
  keyboardContainer: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center', // Centers content vertically
  },
  dialogBox: {
    backgroundColor: '#111e11', // Black background
    margin: 20,
    padding: 16,
    borderRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#ECD974', // Gold border
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ECD974', // Gold text
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#ECD974', // Gold text
    textAlign: 'center',
    marginBottom: 20,
  },
  contactInput: {
    backgroundColor: '#000000', // Black background
    borderWidth: 1,
    borderColor: '#ECD974', // Gold border
    color: '#ECD974', // Gold text
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  actionButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#ECD974', // Gold background
    padding: 10,
    marginRight: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#ECD974', // Gold background
    padding: 10,
    marginLeft: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#000000', // Black text
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default AddEmergencyContact;
