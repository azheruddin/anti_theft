import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  Alert,
  Linking,
  PermissionsAndroid
} from 'react-native';
import { Checkbox } from 'react-native-paper';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
// logout
import AsyncStorage from '@react-native-async-storage/async-storage';
// Permisssion
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import messaging from '@react-native-firebase/messaging'
import API_ENDPOINTS from '../BaseURL/BaseURL';



const SignInRegister = ({ navigation }) => {
  // ye state konsa page show karna hai uske liye hai 
  const [isSignIn, setIsSignIn] = useState(true);

  // LOGIN
  const [mobilelogin, setMobilelogin] = useState('');
  const [password, setPassword] = useState('');
  const [mobileloginError, setMobileloginError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleLogin = async () => {
    let valid = true;
    const errors = {}; // Define errors object
    setMobileloginError('');
    setPasswordError('');

    if (!mobilelogin) {
      errors.mobilelogin = 'Phone number is required.';
      setMobileloginError(errors.mobilelogin);
      valid = false;
    }

    if (!password) {
      errors.password = 'Password is required.';
      setPasswordError(errors.password);
      valid = false;
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters.';
      setPasswordError(errors.password);
      valid = false;
    }

    if (valid) {
      console.log(`Email: ${mobilelogin}, Password: ${password}`);
      setMobilelogin('');
      setPassword('');
    }

    // Only proceed with POST if no errors
    if (Object.keys(errors).length === 0) {
      try {
        const requestData = {
          phone: mobilelogin,
          password: password,
        };

        const response = await axios.post(
          API_ENDPOINTS.LOGIN, // Login API
          requestData,
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          }
        );

        if (response.data.status) {
          console.log(response.data.message);
          console.log(response.data.data.name);

          try {
            // Save user data to AsyncStorage
            // await AsyncStorage.setItem(
            //   'userDetails',
            //   JSON.stringify({
            //     id: response.data.data.id,
            //     name: response.data.data.name,
            //     phone: response.data.data.phone,
            //   })
            // );
            await AsyncStorage.setItem(
              'userDetails',
              JSON.stringify({
                id: response.data.data.id,
                name: response.data.data.name,
                phone: response.data.data.phone,
                status: response.data.data.status, // Assuming status comes from the API
                key_status: response.data.data.key_status, // Backend se milne wala key_status
              })
            );
            

            Alert.alert('Success', 'Login successful! 🚀');
            navigation.navigate('DrawerNavigation');
          } catch (error) {
            console.error('Error saving user details:', error);
          }
        }
        else {
          Alert.alert('Login Failed', response.data.message || 'Invalid credentials, please try again.');
        }
      } catch (error) {
        console.error(error);
        if (error.response) {
          Alert.alert('Error', `Server Error: ${error.response.data.message || 'Kuchh galat ho gaya.'}`);
        } else if (error.request) {
          Alert.alert('Error', 'Server se koi response nahi mila, check your internet connection.');
        } else {
          Alert.alert('Error', 'Request failed, please try again.');
        }
      }
    }
  };



 // SIGNUP
  const [fullName, setFullName] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [mobile, setMobile] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [isCheckedRegister, setIsCheckedRegister] = useState(false);
  const [registerErrors, setRegisterErrors] = useState({});



  const handleSignup = async () => {
    let valid = true;
    const errors = {}; // Errors object for validation

    setRegisterErrors({}); // Reset any previous errors

    // Validation checks
    if (!fullName) {
      errors.fullName = 'Full name is required';
      valid = false;
    }

    if (!emailRegister) {
      errors.emailRegister = 'Email is required';
      valid = false;
    }

    if (!mobile) {
      errors.mobile = 'Phone number is required';
      valid = false;
    }

    if (!passwordRegister) {
      errors.passwordRegister = 'Password is required';
      valid = false;
    }

    if (passwordRegister.length < 6) {
      errors.passwordRegister = 'Password must be at least 6 characters';
      valid = false;
    }

    setRegisterErrors(errors);

    if (valid) {
      const formData = new FormData();
      formData.append('name', fullName);
      formData.append('email', emailRegister);
      formData.append('phone', mobile);
      formData.append('password', passwordRegister);

      try {
        const response = await axios.post(
          API_ENDPOINTS.SIGNUP,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        // Handle successful signup response

        // if (response.data?.status === true || response.data?.message === 'Success') 
        if (response.data.status) {

          console.log(response.data.data);
          setFullName('');
          setEmailRegister('');
          setMobile('');
          setPasswordRegister('');
          Alert.alert('Sign Up Successful', 'You have signed up successfully!');
          setIsSignIn(true);  //signIn par navigate karne ke liye
        } else {
          Alert.alert(`Error: ${response.data.message || 'Registration failed.'}`);
        }
      } catch (error) {
        console.error('AxiosError:', error.response?.data || error.message);
        Alert.alert('Error', 'An error occurred while signing up. Please try again.');
      }
    }
  };

  // Forgot
  const handleForgotPassword = () => {
    Alert.alert('Forgot Password, Redirecting to Password Recovery...');
  };


const toggleCheckboxRegister = () => setIsCheckedRegister(!isCheckedRegister);


   // ==============Location aur Notification ka permission code ek sath ==========

  const [locationEnabled, setLocationEnabled] = useState(false); // location ko hold karne ke liye

  // Function to check and request location permission
  const AskForPermission = async (permissionType) => {
    try {
      const result = await check(permissionType);
      if (result === RESULTS.DENIED) {
        const requestResult = await request(permissionType);
        if (requestResult === RESULTS.GRANTED) {
          console.log('Location Permission Granted');
          return true;
        } else {
          console.log('Location Permission Denied');
          return false;
        }
      } else if (result === RESULTS.GRANTED) {
        console.log('Location Permission Already Granted');
        return true;
      } else {
        console.log('Location Permission Unavailable');
        return false;
      }
    } catch (error) {
      console.error('Permission Error:', error);
      return false;
    }
  };

  // Function to check if location services are enabled
  const checkLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log('Location is enabled', position);
        setLocationEnabled(true); // Location is enabled
      },
      (error) => {
        if (error.code === 2) {
          console.log('Location services are off');
          setLocationEnabled(false); // Location is disabled
          promptEnableLocation(); // Prompt user to enable location
        } else {
          console.log('Error getting location', error.message);
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      }
    );
  };

  // Prompt user to enable location services
  const promptEnableLocation = () => {
    Alert.alert(
      'Location Required',
      'Please turn on your location services to proceed.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Open Settings',
          onPress: () => {
            Linking.openSettings().catch(() => console.log('Cannot open settings'));
          },
        },
      ]
    );
  };

  //========= Function to request notification permission============
  const requestNotificationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        {
          title: 'Notification Permission',
          message: 'This app needs notification permissions to send you important alerts.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Notification permission granted.');
        return true;
      } else {
        console.log('Notification permission denied.');
        Alert.alert(
          'Permission Denied',
          'Without notification permission, you might miss important alerts.'
        );
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  };

  // Function to request FCM permission and retrieve the token
  const requestFCMPermissionAndToken = async () => {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log('Authorization status:', authStatus);
        const token = await messaging().getToken();
        console.log('FCM Token:', token);
      } else {
        console.log('User did not grant messaging permissions.');
      }
    } catch (error) {
      console.error('FCM Permission Error:', error);
    }
  };

  // Main useEffect to handle permissions sequentially
  useEffect(() => {
    const handlePermissions = async () => {
      const permissionType =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.LOCATION_ALWAYS
          : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

      // Step 1: Request Location Permission
      const locationGranted = await AskForPermission(permissionType);
      if (locationGranted) {
        checkLocation(); // Check if location services are enabled
      }

      // Step 2: Request Notification Permission
      const notificationGranted = await requestNotificationPermission();
      if (notificationGranted) {
        await requestFCMPermissionAndToken(); // Request FCM permission and get token
      }
    };

    handlePermissions();
  }, []);

 // ==========Location aur Notification ka permission code ek sath End =========
  

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            
            <View style={styles.ImageContainer}>
              <Image source={require('./Image/mobilesafelogocopy.png')} style={styles.profileImage} />
              <Image source={require('./Image/mobilesafelogo1.png')} style={styles.profileImageText} />
            </View>

            <View style={styles.SignInRegisterContainer}>
              <TouchableOpacity onPress={() => setIsSignIn(true)}>
                <Text style={[styles.TopSignInButtonText, isSignIn && styles.activeTab]}>SIGN IN</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setIsSignIn(false)}>
                <Text style={[styles.registerButtonText, !isSignIn && styles.activeTab]}>REGISTER</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
              {isSignIn ? (
                <View style={styles.container}>
                 <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Mobile"
                      value={mobilelogin}
                      onChangeText={setMobilelogin}
                      placeholderTextColor={'#7B7B7B'}
                      keyboardType="numeric"
                    />
                  </View>
                  {mobileloginError ? <Text style={styles.errorText}>{mobileloginError}</Text> : null}

                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry
                      placeholderTextColor="#7B7B7B"
                    />
                  </View>
                  {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}



                  <View style={styles.checkBoxContainer}>
                    <Checkbox status={isChecked ? 'checked' : 'unchecked'} onPress={() => setIsChecked(!isChecked)} color="#8374FF" />
                    <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
                      <Text style={styles.text}>Stay signed in</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={styles.SigInButton} onPress={handleLogin}>
                    <Text style={styles.SigInButtonText}>SIGN IN</Text>
                  </TouchableOpacity>

                  {/* Forgot Password Link */}
                  <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText}>Forget Password?</Text>
                  </TouchableOpacity>

                </View>

              ) : (

                <View style={styles.container}>
                  
                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        value={fullName}
                        onChangeText={setFullName}
                        placeholderTextColor="#7B7B7B"
                      />
                    </View>
                    {registerErrors.fullName && <Text style={styles.errorText}>{registerErrors.fullName}</Text>}

                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={emailRegister}
                        onChangeText={setEmailRegister}
                        placeholderTextColor="#7B7B7B"
                        keyboardType="email-address"
                      />
                    </View>
                    {registerErrors.emailRegister && <Text style={styles.errorText}>{registerErrors.emailRegister}</Text>}

                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Mobile"
                        value={mobile}
                        onChangeText={setMobile}
                        placeholderTextColor="#7B7B7B"
                        keyboardType="numeric"
                      />
                    </View>
                    {registerErrors.mobile && <Text style={styles.errorText}>{registerErrors.mobile}</Text>}

                    <View style={styles.inputContainer}>
                      <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={passwordRegister}
                        onChangeText={setPasswordRegister}
                        secureTextEntry
                        placeholderTextColor="#7B7B7B"
                      />
                    </View>
                    {registerErrors.passwordRegister && <Text style={styles.errorText}>{registerErrors.passwordRegister}</Text>}

                    <View style={styles.checkBoxContainer}>
                      <Checkbox
                        status={isCheckedRegister ? 'checked' : 'unchecked'}
                        onPress={toggleCheckboxRegister}
                        color="#8374FF"
                      />
                      <Text style={styles.text}>I have read and agree to Terms & Conditions</Text>
                    </View>

                    <TouchableOpacity style={styles.SignButton} onPress={handleSignup}>
                      <Text style={styles.SignButtonText}>REGISTER NOW</Text>
                    </TouchableOpacity>

                      {/* Already have an account */}
                      <View style={styles.accountContainerForSignIn}>
                        <Text style={styles.accountText}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => setIsSignIn(true)}>
                         <Text style={styles.BottomSignInLink}>SIGN IN</Text>
                        </TouchableOpacity>
                      </View>
                      
                 
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#111e11',
  },
  ImageContainer: {
    alignItems: 'center',
    marginTop: 25,
  },
  profileImage: {
    width: 119,
    height: 82,
  },
  profileImageText: {
    width: 212,
    height: 53,
    marginBottom: 25,
  },
  SignInRegisterContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  TopSignInButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#E6D26E',
  },
  formContainer: {
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 38,
    borderRadius: 80,
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderColor: '#ddd',
    // Shadow for inputContainer
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 13,
    color: '#7B7B7B', // Darker gray for readability
    fontFamily: 'Poppins-Regular',
  },
  InputImagePassword: {
    width: 29,
    height: 29
  },
  SigInButton: {
    backgroundColor: '#789A49',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 80,
    width: '90%',
    height: 38,
    marginBottom: 20,
    marginTop: 50,
    shadowColor: '#000',          // Black shadow
    shadowOffset: { width: 0, height: 4 }, // Slight offset
    shadowOpacity: 0.2,           // Shadow opacity
    shadowRadius: 8,              // Shadow spread
    elevation: 4,                 // Elevation for Android shadow
  },
  SigInButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Light', // Standardized
    fontWeight: '500',
    textAlign: 'center',
  },
  forgotPassword: {
    marginTop: 40,
  },
  forgotPasswordText: {
    color: '#ACACAC',
    fontSize: 13,
    fontFamily: 'Poppins-Light', // Unified
    marginBottom: 30,
    fontWeight: '500',
    textAlign: 'center'
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    alignSelf: 'flex-start', // Added for left alignment
    marginLeft: 10, // Added margin to align content from the left
  },
  text: {
    fontSize: 10,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  SignButton: {
    backgroundColor: '#789A49',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 80,
    width: '90%',
    height: 38,
    marginTop: 20,
    // Adding shadow to SignButton
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  SignButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Light', // Standardized
    fontWeight: '500',
    textAlign: 'center',
  },
  accountContainerForSignIn: {
    flexDirection: 'row',
    alignItems: 'center',        
    justifyContent: 'center',     
    marginTop: 30,               
    paddingHorizontal: 10,        
    width: '100%',                
  },
  accountText: {
    color: '#7B7B7B',           
    fontSize: 14,
    marginRight: 5,
  },
  BottomSignInLink: {
    color: '#789A49',
    fontSize: 13,
    fontFamily: 'Poppins-Light', // Unified
    fontWeight: '500'
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 0,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  FaiqinputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 38,
    borderRadius: 80,
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#f2f2f2',
    borderWidth: 1,
    borderColor: '#ddd',
    // Shadow for inputContainer
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  picker: {
    height: 50,
    width: '100%',
    fontSize: 10,
    color: '#7B7B7B',
    fontFamily: 'Poppins-Regular',
  },
});

export default SignInRegister  














// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
//   ActivityIndicator,
//   Alert,
//   Linking,
//   PermissionsAndroid
// } from 'react-native';
// import { Checkbox } from 'react-native-paper';
// import axios from 'axios';
// import { Picker } from '@react-native-picker/picker';
// // logout
// import AsyncStorage from '@react-native-async-storage/async-storage';
// // Permisssion
// import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
// import Geolocation from 'react-native-geolocation-service';
// import messaging from '@react-native-firebase/messaging'


// const SignInRegister = ({navigation}) => {
//   // ye state konsa page show karna hai uske liye hai 
//   const [isSignIn, setIsSignIn] = useState(true);

//   // LOGIN
//   const [mobilelogin, setMobilelogin] = useState('');
//   const [password, setPassword] = useState('');
//   const [mobileloginError, setMobileloginError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [isChecked, setIsChecked] = useState(false);

//   const handleLogin = async () => {
//     let valid = true;
//     const errors = {}; // Define errors object
//     setMobileloginError('');
//     setPasswordError('');
  
//     if (!mobilelogin) {
//       errors.mobilelogin = 'Phone number is required.';
//       setMobileloginError(errors.mobilelogin);
//       valid = false;
//     }
  
//     if (!password) {
//       errors.password = 'Password is required.';
//       setPasswordError(errors.password);
//       valid = false;
//     } else if (password.length < 6) {
//       errors.password = 'Password must be at least 6 characters.';
//       setPasswordError(errors.password);
//       valid = false;
//     }
  
//     if (valid) {
//       console.log(`Email: ${mobilelogin}, Password: ${password}`);
//       setMobilelogin('');
//       setPassword('');
//     }
  
//     // Only proceed with POST if no errors
//     if (Object.keys(errors).length === 0) {
//       try {
//         const requestData = {
//           phone: mobilelogin,
//           password: password,
//         };
  
//         const response = await axios.post(
//           'https://ashhari.com/qadri/bbn/public/api/login',
//           requestData,
//           {
//             headers: {
//               'Content-Type': 'application/json',
//               Accept: 'application/json',
//             },
//           }
//         );
  
//         if (response.data.status) {
//           console.log(response.data.message);
//           console.log(response.data.data.name);
        
//           try {
//             // Save user data to AsyncStorage
//             await AsyncStorage.setItem(
//               'userDetails',
//               JSON.stringify({
//                 id: response.data.data.id,
//                 name: response.data.data.name,
//                 phone: response.data.data.phone,
//               })
//             );
        
//             Alert.alert('Success', 'Login successful! 🚀');
//             navigation.navigate('AppNavigator');
//           } catch (error) {
//             console.error('Error saving user details:', error);
//           }
//         }
//         else {
//           Alert.alert('Login Failed', response.data.message || 'Invalid credentials, please try again.');
//         }
//       } catch (error) {
//         console.error(error);
//         if (error.response) {
//           Alert.alert('Error', `Server Error: ${error.response.data.message || 'Kuchh galat ho gaya.'}`);
//         } else if (error.request) {
//           Alert.alert('Error', 'Server se koi response nahi mila, check your internet connection.');
//         } else {
//           Alert.alert('Error', 'Request failed, please try again.');
//         }
//       }
//     }
//   };
  


//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [isChecked, setIsChecked] = useState(false);
//   // const [emailError, setEmailError] = useState('');
//   // const [passwordError, setPasswordError] = useState('');

//   // const handleLogin = () => {
//   //   let valid = true;
//   //   setEmailError('');
//   //   setPasswordError('');

//   //   if (!email) {
//   //     setEmailError('Email is required.');
//   //     valid = false;
//   //   } else if (!/\S+@\S+\.\S+/.test(email)) {
//   //     setEmailError('Please enter a valid email.');
//   //     valid = false;
//   //   }

//   //   if (!password) {
//   //     setPasswordError('Password is required.');
//   //     valid = false;
//   //   } else if (password.length < 6) {
//   //     setPasswordError('Password must be at least 6 characters.');
//   //     valid = false;
//   //   }

//   //   if (valid) {
//   //     console.log(`Email: ${email}, Password: ${password}`);
//   //     setEmail('');
//   //     setPassword('');
//   //   }
//   // };



//       // SIGNUP
  
      

// //           SIGNUP
//   const [fullName, setFullName] = useState('');
//   const [emailRegister, setEmailRegister] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [passwordRegister, setPasswordRegister] = useState('');
//   const [activationCode, setActivationCode] = useState('');
//   const [isCheckedRegister, setIsCheckedRegister] = useState(false);
//   const [registerErrors, setRegisterErrors] = useState({});

//   const handleSignUp = async () => {

//      // state id ko name me convert karke (stateName) me daalne ke liye
//      const stateName =
//      states.find((state) => state.state_id === selectedState)?.state_name || '';

//    // city id ko name me convert karke (cityName) me daalne ke liye
//    const cityName =
//      cities.find((city) => city.city_id === selectedCity)?.city_name || '';

//     const errors = {};
//     if (!fullName) errors.fullName = 'Full Name is required.';
//     if (!mobile) {
//       errors.mobile = 'Mobile number is required.';
//     } else if (!/^\d{10}$/.test(mobile)) {
//       errors.mobile = 'Please enter a valid 10-digit mobile number.';
//     }
//     if (!passwordRegister) {
//       errors.passwordRegister = 'Password is required.';
//     } else if (passwordRegister.length < 6) {
//       errors.passwordRegister = 'Password must be at least 6 characters.';
//     }
  
//     setRegisterErrors(errors);
  
//     if (Object.keys(errors).length === 0) {
//       const formData = new FormData();
//       formData.append('name', fullName);
//       formData.append('phone', mobile);
//       formData.append('password', passwordRegister);
//       formData.append('state', stateName);
//       formData.append('city', cityName);
   
//       try {
//         const response = await axios.post(
//           'https://ashhari.com/qadri/bbn/public/api/add-user',
//           formData,
//           {
//             headers: {
//               'Content-Type': 'multipart/form-data',
//             },
//           },
//         );
  
//         if (response.data.status) {
//           console.log(response.data.message);
//           console.log(response.data.data);
//           alert('Registration successful!');
//           setFullName('');
//           setMobile('');
//           setPasswordRegister('');
//           setSelectedState('')
//           setSelectedCity('')
//           setIsSignIn(true); // signIn par navigate karne ke liye
//         } else {
//           alert(`Error: ${response.data.message || 'Registration failed.'}`);
//         }
//       } catch (error) {
//         console.error('Error during registration:', error);
//         alert(
//           `Registration failed. ${
//             error.response?.data?.message || 'Server error, please try again later.'
//           }`
//         );
//       }
//     }
//   };
 
//   // Forgot
//   const handleForgotPassword = () => {
//     Alert.alert('Forgot Password, Redirecting to Password Recovery...');
//   };


//   // States & cities ka logic code
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedCity, setSelectedCity] = useState('');
//   const [loading, setLoading] = useState(false);

//   // detabase se india ke pure state ke name bula kar list dikhane ke liye 
//   useEffect(() => {
//     setLoading(true);
//     axios
//       .get('https://ashhari.com/qadri/bbn/public/api/states')
//       .then((response) => {
//         if (response.data && Array.isArray(response.data)) {
//           setStates(response.data);
//         } else {
//           setStates([]);
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error(error);
//         setLoading(false);
//       });
//   }, []);


//   // jo state select hui hai uski id city api ke age lagaege condition se aur usi state ki city dikhaege city ki list me 
//   useEffect(() => {
//     if (selectedState) {
//       setLoading(true);
//       axios
//         .get(`https://ashhari.com/qadri/bbn/public/api/cities/${selectedState}`)
//         .then((response) => {
//           if (response.data && Array.isArray(response.data)) {
//             setCities(response.data);
//           } else {
//             setCities([]);
//           }
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error(error);
//           setLoading(false);
//         });
//     } else {
//       setCities([]);
//     }
//   }, [selectedState]);




//   const toggleCheckboxRegister = () => setIsCheckedRegister(!isCheckedRegister);



  

// // ==============Location aur Notification ka permission code ek sath ==========

//   const [locationEnabled, setLocationEnabled] = useState(false); // location ko hold karne ke liye

//   // Function to check and request location permission
//   const AskForPermission = async (permissionType) => {
//     try {
//       const result = await check(permissionType);
//       if (result === RESULTS.DENIED) {
//         const requestResult = await request(permissionType);
//         if (requestResult === RESULTS.GRANTED) {
//           console.log('Location Permission Granted');
//           return true;
//         } else {
//           console.log('Location Permission Denied');
//           return false;
//         }
//       } else if (result === RESULTS.GRANTED) {
//         console.log('Location Permission Already Granted');
//         return true;
//       } else {
//         console.log('Location Permission Unavailable');
//         return false;
//       }
//     } catch (error) {
//       console.error('Permission Error:', error);
//       return false;
//     }
//   };

//   // Function to check if location services are enabled
//   const checkLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         console.log('Location is enabled', position);
//         setLocationEnabled(true); // Location is enabled
//       },
//       (error) => {
//         if (error.code === 2) {
//           console.log('Location services are off');
//           setLocationEnabled(false); // Location is disabled
//           promptEnableLocation(); // Prompt user to enable location
//         } else {
//           console.log('Error getting location', error.message);
//         }
//       },
//       {
//         enableHighAccuracy: true,
//         timeout: 15000,
//         maximumAge: 10000,
//       }
//     );
//   };

//   // Prompt user to enable location services
//   const promptEnableLocation = () => {
//     Alert.alert(
//       'Location Required',
//       'Please turn on your location services to proceed.',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'Open Settings',
//           onPress: () => {
//             Linking.openSettings().catch(() => console.log('Cannot open settings'));
//           },
//         },
//       ]
//     );
//   };

//   //========= Function to request notification permission============
//   const requestNotificationPermission = async () => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
//         {
//           title: 'Notification Permission',
//           message: 'This app needs notification permissions to send you important alerts.',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         }
//       );

//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('Notification permission granted.');
//         return true;
//       } else {
//         console.log('Notification permission denied.');
//         Alert.alert(
//           'Permission Denied',
//           'Without notification permission, you might miss important alerts.'
//         );
//         return false;
//       }
//     } catch (err) {
//       console.warn(err);
//       return false;
//     }
//   };

//   // Function to request FCM permission and retrieve the token
//   const requestFCMPermissionAndToken = async () => {
//     try {
//       const authStatus = await messaging().requestPermission();
//       const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//       if (enabled) {
//         console.log('Authorization status:', authStatus);
//         const token = await messaging().getToken();
//         console.log('FCM Token:', token);
//       } else {
//         console.log('User did not grant messaging permissions.');
//       }
//     } catch (error) {
//       console.error('FCM Permission Error:', error);
//     }
//   };

//   // Main useEffect to handle permissions sequentially
//   useEffect(() => {
//     const handlePermissions = async () => {
//       const permissionType =
//         Platform.OS === 'ios'
//           ? PERMISSIONS.IOS.LOCATION_ALWAYS
//           : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;

//       // Step 1: Request Location Permission
//       const locationGranted = await AskForPermission(permissionType);
//       if (locationGranted) {
//         checkLocation(); // Check if location services are enabled
//       }

//       // Step 2: Request Notification Permission
//       const notificationGranted = await requestNotificationPermission();
//       if (notificationGranted) {
//         await requestFCMPermissionAndToken(); // Request FCM permission and get token
//       }
//     };

//     handlePermissions();
//   }, []);

// // ==========Location aur Notification ka permission code ek sath End =========
  


//   return (
//     <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
//           <View style={styles.container}>
//             <View style={styles.ImageContainer}>
//               <Image source={require('./Image/mobilesafelogocopy.png')} style={styles.profileImage} />
//               <Image source={require('./Image/mobilesafelogo1.png')} style={styles.profileImageText} />
//             </View>

//             <View style={styles.SignInRegisterContainer}>
//               <TouchableOpacity onPress={() => setIsSignIn(true)}>
//                 <Text style={[styles.TopSignInButtonText, isSignIn && styles.activeTab]}>SIGN IN</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => setIsSignIn(false)}>
//                 <Text style={[styles.registerButtonText, !isSignIn && styles.activeTab]}>REGISTER</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.formContainer}>
//               {isSignIn ? (
//                 <View style={styles.container}>

//                   {/* <View style={styles.inputContainer}>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Email"
//                       value={email}
//                       onChangeText={setEmail}
//                       keyboardType="email-address"
//                       autoCapitalize="none"
//                       placeholderTextColor="#7B7B7B"
//                     />
//                   </View>
//                   {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null} */}

//                     <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Mobile"
//                               value={mobilelogin}
//                               onChangeText={setMobilelogin}
//                               placeholderTextColor={'#7B7B7B'}
//                               keyboardType="numeric" 
//                           />
//                     </View>
//                     {mobileloginError ? <Text style={styles.errorText}>{mobileloginError}</Text> : null} 

//                   <View style={styles.inputContainer}>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Password"
//                       value={password}
//                       onChangeText={setPassword}
//                       secureTextEntry
//                       placeholderTextColor="#7B7B7B"
//                     />
//                   </View>
//                   {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}



//                   <View style={styles.checkBoxContainer}>
//                     <Checkbox status={isChecked ? 'checked' : 'unchecked'} onPress={() => setIsChecked(!isChecked)} color="#8374FF" />
//                     <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
//                       <Text style={styles.text}>Stay signed in</Text>
//                     </TouchableOpacity>
//                   </View>

//                   <TouchableOpacity style={styles.SigInButton} onPress={handleLogin}>
//                     <Text style={styles.SigInButtonText}>SIGN IN</Text>
//                   </TouchableOpacity>

//                    {/* Forgot Password Link */}
//                 <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
//                   <Text style={styles.forgotPasswordText}>Forget Password?</Text>
//                 </TouchableOpacity>

//                 </View>
//               ) : (
//                 <View style={styles.container}>
//                   <View style={styles.inputContainer}>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Full Name"
//                       value={fullName}
//                       onChangeText={setFullName}
//                       placeholderTextColor="#7B7B7B"
//                     />
//                   </View>
//                   {registerErrors.fullName ? <Text style={styles.errorText}>{registerErrors.fullName}</Text> : null}

                  
//                         {/* <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Email"
//                               value={emailRegister}
//                               onChangeText={setEmailRegister}
//                               placeholderTextColor={'#7B7B7B'}
//                               keyboardType="email-address"
//                           />
//                       </View>
//                       {registerErrors.emailRegister ? <Text style={styles.errorText}>{registerErrors.emailRegister}</Text> : null} */}

//                       <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Mobile"
//                               value={mobile}
//                               onChangeText={setMobile}
//                               placeholderTextColor={'#7B7B7B'}
//                           />
//                       </View>
//                       {registerErrors.mobile ? <Text style={styles.errorText}>{registerErrors.mobile}</Text> : null}

//                       <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Password"
//                               value={passwordRegister}
//                               onChangeText={setPasswordRegister}
//                               secureTextEntry
//                               placeholderTextColor={'#7B7B7B'}
//                           />
//                           <Image source={require('../image/Mobile_Safe/hideLoginPage.png')} style={styles.InputImagePassword} />
//                       </View>
//                       {registerErrors.passwordRegister ? <Text style={styles.errorText}>{registerErrors.passwordRegister}</Text> : null}

//                       {/* States&Cities input */}
//               {loading ? (
//                 <ActivityIndicator size="large" color="#fff" />
//               ) : (
//                 <>
//                   {/* States input */}
//                   <View style={styles.FaiqinputContainer}>
//                     <Picker
//                       selectedValue={selectedState}
//                       onValueChange={(itemValue) => setSelectedState(itemValue)}
//                       style={styles.picker}
//                       dropdownIconColor="#000"
//                     >
//                       <Picker.Item label="Select a state" value="" style={{ color: '#000' }} />
//                       {Array.isArray(states) &&
//                         states.map((item, index) => (
//                           <Picker.Item key={index} label={item.state_name} value={item.state_id} />
//                         ))}
//                     </Picker>
//                   </View>

//                   {/* Cities input */}
//                   <View style={styles.FaiqinputContainer}>
//                     <Picker
//                       selectedValue={selectedCity}
//                       onValueChange={(itemValue) => setSelectedCity(itemValue)}
//                       style={styles.picker}
//                       dropdownIconColor="#000"
//                     >
//                       <Picker.Item label="Select a city" value="" style={{ color: '#000' }} />
//                       {Array.isArray(cities) &&
//                         cities.map((item, index) => (
//                           <Picker.Item key={index} label={item.city_name} value={item.city_id} />
//                         ))}
//                     </Picker>

//                   </View>
//                 </>
//               )}
//               {/* States&Cities input end */}

//                       {/* <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Activation Code"
//                               value={activationCode}
//                               onChangeText={setActivationCode}
//                               placeholderTextColor={'#7B7B7B'}
//                           />
//                       </View>
//                       {registerErrors.activationCode ? <Text style={styles.errorText}>{registerErrors.activationCode}</Text> : null} */}

//                        {/* Checkbox */}
//                        <View style={styles.checkBoxContainer}>
//                           <Checkbox status={isCheckedRegister ? 'checked' : 'unchecked'} onPress={toggleCheckboxRegister} color="#8374FF" />
//                           <TouchableOpacity onPress={toggleCheckboxRegister}>
//                               <Text style={styles.text}>I have read and agree to Terms & Condition</Text>
//                           </TouchableOpacity>
//                       </View>

//                        {/* Register Button */}
//                        <TouchableOpacity style={styles.SignButton} onPress={handleSignUp}>
//                           <Text style={styles.SignButtonText}>REGISTER NOW</Text>
//                       </TouchableOpacity>

                      // {/* Already have an account */}
                      // <View style={styles.accountContainerForSignIn}>
                      //   <Text style={styles.accountText}>Already have an account?</Text>
                      //   <TouchableOpacity onPress={() => setIsSignIn(true)}>
                      //    <Text style={styles.BottomSignInLink}>SIGN IN</Text>
                      //   </TouchableOpacity>
                      // </View>


//                 </View>
//               )}
//             </View>
//           </View>
//         </ScrollView>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#111e11',
//   },
//   ImageContainer: {
//     alignItems: 'center',
//     marginTop: 25,
//   },
//   profileImage: {
//     width: 119,
//     height: 82,
//   },
//   profileImageText: {
//     width: 212,
//     height: 53,
//     marginBottom: 25,
//   },
//   SignInRegisterContainer: {
//     flexDirection: 'row',
//     width: '70%',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   TopSignInButtonText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '500',
//   },
//   registerButtonText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '500',
//   },
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#E6D26E',
//   },
//   formContainer: {
//     width: '100%',
//    },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent:'center',
//     width: '90%',
//     height: 38,
//     borderRadius: 80,
//     marginTop: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#f2f2f2',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     // Shadow for inputContainer
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,         
//   },
//   input: {
//     flex: 1,
//     height: '100%',
//     fontSize: 13,
//     color: '#7B7B7B', // Darker gray for readability
//     fontFamily: 'Poppins-Regular',
//   },
//   InputImagePassword: {
//     width: 29,
//     height: 29
//   },
//   SigInButton: {
//     backgroundColor: '#789A49',
//     paddingVertical: 5,
//     paddingHorizontal: 8,
//     borderRadius: 80,
//     width:'90%',
//     height: 38,
//     marginBottom: 20,
//     marginTop: 50,
//     shadowColor: '#000',          // Black shadow
//     shadowOffset: { width: 0, height: 4 }, // Slight offset
//     shadowOpacity: 0.2,           // Shadow opacity
//     shadowRadius: 8,              // Shadow spread
//     elevation: 4,                 // Elevation for Android shadow
//   },
//   SigInButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontFamily: 'Poppins-Light', // Standardized
//     fontWeight: '500',
//     textAlign: 'center',
//   },
//   forgotPassword: {
//     marginTop: 40,
//   },
//   forgotPasswordText: {
//     color: '#ACACAC',
//     fontSize: 13,
//     fontFamily: 'Poppins-Light', // Unified
//     marginBottom: 30,
//     fontWeight: '500',
//     textAlign:'center'
//   },
//   checkBoxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//     alignSelf: 'flex-start', // Added for left alignment
//     marginLeft: 10, // Added margin to align content from the left
//   },
//   text: {
//     fontSize: 10,
//     fontWeight: '500',
//     color: '#fff',
//     fontFamily: 'Poppins-Regular',
//   },
//   SignButton: {
//     backgroundColor: '#789A49',
//     paddingVertical: 5,
//     paddingHorizontal: 8,
//     borderRadius: 80,
//     width: '90%',
//     height: 38,
//     marginTop: 20,
//     // Adding shadow to SignButton
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
// },
//   SignButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontFamily: 'Poppins-Light', // Standardized
//     fontWeight: '500',
//     textAlign: 'center',
//   },
//   accountContainerForSignIn: {
//     flexDirection: 'row',
//     alignItems: 'center',        // vertically center align
//     justifyContent: 'center',     // horizontally center align
//     marginTop: 30,                // thoda extra spacing
//     paddingHorizontal: 10,        // side padding
//     width: '100%',                // full-width layout
// },
// accountText: {
//     color: '#7B7B7B',             // style as per preference
//     fontSize: 14,
//     marginRight: 5,
// },
// BottomSignInLink:{
//   color: '#789A49',
//       fontSize: 13,
//     fontFamily: 'Poppins-Light', // Unified
// fontWeight: '500'
// },
// errorText:{
//   color:'red',
//   fontSize: 12,
//   marginTop: 0,
//   alignSelf: 'flex-start',
//   marginLeft: 20,
// },
// FaiqinputContainer: {
//   flexDirection: 'row',
//   alignItems: 'center',
//   width: '90%',
//   height: 38,
//   borderRadius: 80,
//   marginTop: 20,
//   paddingHorizontal: 20,
//   backgroundColor: '#f2f2f2',
//   borderWidth: 1,
//   borderColor: '#ddd',
//   // Shadow for inputContainer
//   shadowColor: '#000',
//   shadowOffset: { width: 0, height: 2 },
//   shadowOpacity: 0.05,
//   shadowRadius: 8,
//   elevation: 2,         
// },
// picker: {
//   height: 50,
//   width: '100%',
//   fontSize: 10,
//   color: '#7B7B7B', 
//   fontFamily: 'Poppins-Regular',
// },
// });

// export default SignInRegister







// ex code
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from 'react-native';
// import { Checkbox } from 'react-native-paper';

// const SignInRegister = () => {
//   const [isSignIn, setIsSignIn] = useState(true);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isChecked, setIsChecked] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const handleLogin = () => {
//     let valid = true;
//     setEmailError('');
//     setPasswordError('');

//     if (!email) {
//       setEmailError('Email is required.');
//       valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Please enter a valid email.');
//       valid = false;
//     }

//     if (!password) {
//       setPasswordError('Password is required.');
//       valid = false;
//     } else if (password.length < 6) {
//       setPasswordError('Password must be at least 6 characters.');
//       valid = false;
//     }

//     if (valid) {
//       console.log(`Email: ${email}, Password: ${password}`);
//       setEmail('');
//       setPassword('');
//     }
//   };

//   const [fullName, setFullName] = useState('');
//   const [emailRegister, setEmailRegister] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [passwordRegister, setPasswordRegister] = useState('');
//   const [activationCode, setActivationCode] = useState('');
//   const [isCheckedRegister, setIsCheckedRegister] = useState(false);
//   const [registerErrors, setRegisterErrors] = useState({});

//   const handleSignUp = () => {
//     const errors = {};
//     if (!fullName) errors.fullName = 'Full Name is required.';
//     if (!emailRegister) {
//       errors.emailRegister = 'Email is required.';
//     } else if (!/\S+@\S+\.\S+/.test(emailRegister)) {
//       errors.emailRegister = 'Please enter a valid email.';
//     }
//     if (!mobile) {
//       errors.mobile = 'Mobile number is required.';
//     } else if (!/^\d{10}$/.test(mobile)) {
//       errors.mobile = 'Please enter a valid 10-digit mobile number.';
//     }
//     if (!passwordRegister) {
//       errors.passwordRegister = 'Password is required.';
//     } else if (passwordRegister.length < 6) {
//       errors.passwordRegister = 'Password must be at least 6 characters.';
//     }
//     if (!activationCode) errors.activationCode = 'Activation Code is required.';

//     if (Object.keys(errors).length === 0) {
//       console.log(`Full-Name: ${fullName}, Email: ${emailRegister}, Mobile: ${mobile}, Password: ${passwordRegister}, ActivationCode: ${activationCode}`);
//       setFullName('');
//       setEmailRegister('');
//       setMobile('');
//       setPasswordRegister('');
//       setActivationCode('');
//     } else {
//       setRegisterErrors(errors);
//     }
//   };
 
//   // Forgot
//   const handleForgotPassword = () => {
//     alert('Forgot Password, Redirecting to Password Recovery...');
//   };

//   const toggleCheckboxRegister = () => setIsCheckedRegister(!isCheckedRegister);

  
//   return (
//     <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//       <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//         <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
//           <View style={styles.container}>
//             <View style={styles.ImageContainer}>
//               <Image source={require('../image/Mobile_Safe/mobilesafelogocopy.png')} style={styles.profileImage} />
//               <Image source={require('../image/Mobile_Safe/mobilesafelogo1.png')} style={styles.profileImageText} />
//             </View>

//             <View style={styles.SignInRegisterContainer}>
//               <TouchableOpacity onPress={() => setIsSignIn(true)}>
//                 <Text style={[styles.TopSignInButtonText, isSignIn && styles.activeTab]}>SIGN IN</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => setIsSignIn(false)}>
//                 <Text style={[styles.registerButtonText, !isSignIn && styles.activeTab]}>REGISTER</Text>
//               </TouchableOpacity>
//             </View>

//             <View style={styles.formContainer}>
//               {isSignIn ? (
//                 <View style={styles.container}>
//                   <View style={styles.inputContainer}>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Email"
//                       value={email}
//                       onChangeText={setEmail}
//                       keyboardType="email-address"
//                       autoCapitalize="none"
//                       placeholderTextColor="#7B7B7B"
//                     />
//                   </View>
//                   {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

//                   <View style={styles.inputContainer}>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Password"
//                       value={password}
//                       onChangeText={setPassword}
//                       secureTextEntry
//                       placeholderTextColor="#7B7B7B"
//                     />
//                   </View>
//                   {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

//                   <View style={styles.checkBoxContainer}>
//                     <Checkbox status={isChecked ? 'checked' : 'unchecked'} onPress={() => setIsChecked(!isChecked)} color="#8374FF" />
//                     <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
//                       <Text style={styles.text}>Stay signed in</Text>
//                     </TouchableOpacity>
//                   </View>

//                   <TouchableOpacity style={styles.SigInButton} onPress={handleLogin}>
//                     <Text style={styles.SigInButtonText}>SIGN IN</Text>
//                   </TouchableOpacity>

//                    {/* Forgot Password Link */}
//                 <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
//                   <Text style={styles.forgotPasswordText}>Forget Password?</Text>
//                 </TouchableOpacity>

//                 </View>
//               ) : (
//                 <View style={styles.container}>
//                   <View style={styles.inputContainer}>
//                     <TextInput
//                       style={styles.input}
//                       placeholder="Full Name"
//                       value={fullName}
//                       onChangeText={setFullName}
//                       placeholderTextColor="#7B7B7B"
//                     />
//                   </View>
//                   {registerErrors.fullName ? <Text style={styles.errorText}>{registerErrors.fullName}</Text> : null}

                  
//                             <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Email"
//                               value={emailRegister}
//                               onChangeText={setEmailRegister}
//                               placeholderTextColor={'#7B7B7B'}
//                               keyboardType="email-address"
//                           />
//                       </View>
//                       {registerErrors.emailRegister ? <Text style={styles.errorText}>{registerErrors.emailRegister}</Text> : null}

//                      <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Mobile"
//                               value={mobile}
//                               onChangeText={setMobile}
//                               placeholderTextColor={'#7B7B7B'}
//                           />
//                       </View>
//                       {registerErrors.mobile ? <Text style={styles.errorText}>{registerErrors.mobile}</Text> : null}

//                       <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Password"
//                               value={passwordRegister}
//                               onChangeText={setPasswordRegister}
//                               secureTextEntry
//                               placeholderTextColor={'#7B7B7B'}
//                           />
//                           <Image source={require('../image/Mobile_Safe/hideLoginPage.png')} style={styles.InputImagePassword} />
//                       </View>
//                       {registerErrors.passwordRegister ? <Text style={styles.errorText}>{registerErrors.passwordRegister}</Text> : null}

//                       <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Activation Code"
//                               value={activationCode}
//                               onChangeText={setActivationCode}
//                               placeholderTextColor={'#7B7B7B'}
//                           />
//                       </View>
//                       {registerErrors.activationCode ? <Text style={styles.errorText}>{registerErrors.activationCode}</Text> : null}

//                        {/* Checkbox */}
//                        <View style={styles.checkBoxContainer}>
//                           <Checkbox status={isCheckedRegister ? 'checked' : 'unchecked'} onPress={toggleCheckboxRegister} color="#8374FF" />
//                           <TouchableOpacity onPress={toggleCheckboxRegister}>
//                               <Text style={styles.text}>I have read and agree to Terms & Condition</Text>
//                           </TouchableOpacity>
//                       </View>

//                        {/* Register Button */}
//                        <TouchableOpacity style={styles.SignButton} onPress={handleSignUp}>
//                           <Text style={styles.SignButtonText}>REGISTER NOW</Text>
//                       </TouchableOpacity>

//                       {/* Already have an account */}
//                       <View style={styles.accountContainerForSignIn}>
//                         <Text style={styles.accountText}>Already have an account?</Text>
//                         <TouchableOpacity onPress={() => setIsSignIn(true)}>
//                          <Text style={styles.BottomSignInLink}>SIGN IN</Text>
//                         </TouchableOpacity>
//                       </View>


//                 </View>
//               )}
//             </View>
//           </View>
//         </ScrollView>
//       </TouchableWithoutFeedback>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#111e11',
//   },
//   ImageContainer: {
//     alignItems: 'center',
//     marginTop: 25,
//   },
//   profileImage: {
//     width: 119,
//     height: 82,
//   },
//   profileImageText: {
//     width: 212,
//     height: 53,
//     marginBottom: 25,
//   },
//   SignInRegisterContainer: {
//     flexDirection: 'row',
//     width: '70%',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   TopSignInButtonText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '500',
//   },
//   registerButtonText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '500',
//   },
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#E6D26E',
//   },
//   formContainer: {
//     width: '100%',
//    },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent:'center',
//     width: '90%',
//     height: 38,
//     borderRadius: 80,
//     marginTop: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#f2f2f2',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     // Shadow for inputContainer
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,         
//   },
//   input: {
//     flex: 1,
//     height: '100%',
//     fontSize: 13,
//     color: '#7B7B7B', // Darker gray for readability
//     fontFamily: 'Poppins-Regular',
//   },
//   InputImagePassword: {
//     width: 29,
//     height: 29
//   },
//   SigInButton: {
//     backgroundColor: '#789A49',
//     paddingVertical: 5,
//     paddingHorizontal: 8,
//     borderRadius: 80,
//     width:'90%',
//     height: 38,
//     marginBottom: 20,
//     marginTop: 50,
//     shadowColor: '#000',          // Black shadow
//     shadowOffset: { width: 0, height: 4 }, // Slight offset
//     shadowOpacity: 0.2,           // Shadow opacity
//     shadowRadius: 8,              // Shadow spread
//     elevation: 4,                 // Elevation for Android shadow
//   },
//   SigInButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontFamily: 'Poppins-Light', // Standardized
//     fontWeight: '500',
//     textAlign: 'center',
//   },
//   forgotPassword: {
//     marginTop: 40,
//   },
//   forgotPasswordText: {
//     color: '#ACACAC',
//     fontSize: 13,
//     fontFamily: 'Poppins-Light', // Unified
//     marginBottom: 30,
//     fontWeight: '500',
//     textAlign:'center'
//   },
//   checkBoxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//     alignSelf: 'flex-start', // Added for left alignment
//     marginLeft: 10, // Added margin to align content from the left
//   },
//   text: {
//     fontSize: 10,
//     fontWeight: '500',
//     color: '#fff',
//     fontFamily: 'Poppins-Regular',
//   },
//   SignButton: {
//     backgroundColor: '#789A49',
//     paddingVertical: 5,
//     paddingHorizontal: 8,
//     borderRadius: 80,
//     width: '90%',
//     height: 38,
//     marginTop: 20,
//     // Adding shadow to SignButton
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
// },
//   SignButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontFamily: 'Poppins-Light', // Standardized
//     fontWeight: '500',
//     textAlign: 'center',
//   },
//   accountContainerForSignIn: {
//     flexDirection: 'row',
//     alignItems: 'center',        // vertically center align
//     justifyContent: 'center',     // horizontally center align
//     marginTop: 30,                // thoda extra spacing
//     paddingHorizontal: 10,        // side padding
//     width: '100%',                // full-width layout
// },
// accountText: {
//     color: '#7B7B7B',             // style as per preference
//     fontSize: 14,
//     marginRight: 5,
// },
// BottomSignInLink:{
//   color: '#789A49',
//       fontSize: 13,
//     fontFamily: 'Poppins-Light', // Unified
// fontWeight: '500'
// },
// errorText:{
//   color:'red',
//   fontSize: 12,
//   marginTop: 0,
//   alignSelf: 'flex-start',
//   marginLeft: 20,
// },
// });

// export default SignInRegister






// bagair validation ka Signin aur register ka mix code

// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   KeyboardAvoidingView,
//   ScrollView,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from 'react-native';
// import { Checkbox } from 'react-native-paper';

// const SignInRegister = () => {

//   const [isSignIn, setIsSignIn] = useState(true);

//   const toggleForm = () => {
//     setIsSignIn(!isSignIn);
//   };

//   //================== SignIn==================
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//    // check box
//    const [isChecked, setIsChecked] = useState(false);
// const toggleCheckbox = () => setIsChecked(!isChecked);

// const handleLogin = () => {
//   alert(`Email: ${email}, Password: ${password}`);
//     setEmail('');
//     setPassword('');
//      };
// const handleForgotPassword = () => {
//   alert('Forgot Password, Redirecting to Password Recovery...');
// };

// // =====================Register=================
// const [fullName, setfullName] = useState('');
//   const [emailRegister, setEmailRegister] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [passwordRegister, setPasswordRegister] = useState('');
//   const [ActivationCode, setActivationCode] = useState('');
//   // ckeck box
//   const [isCheckedRegister, setIsCheckedRegister] = useState(false);

//   const handleSignUp = () => {
//     alert(`Full-Name: ${fullName}\nEmail: ${emailRegister}\nMobile: ${mobile}\nPassword: ${passwordRegister}\nActivationCode: ${ActivationCode}`);
//      // Reset all input fields
//      setfullName('');
//      setEmailRegister('');
//      setMobile('');
//      setPasswordRegister('');
//      setActivationCode('');
// };

// // const handleLogin = () => {
// //     Alert.alert('Register', 'Redirecting to Registration Page...');
// // };

// const toggleCheckboxRegister = () => setIsCheckedRegister(!isCheckedRegister);


//   return (
//     <KeyboardAvoidingView 
//     style={{ flex: 1 }} 
//     behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
  
//     <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//       <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
//         <View style={styles.container}>
  
//           {/* Top Images Section */}
//           <View style={styles.ImageContainer}>
//             <Image source={require('./Image/mobilesafelogocopy.png')} style={styles.profileImage} />
//             <Image source={require('./Image/mobilesafelogo1.png')} style={styles.profileImageText} />   
//           </View>           
  
//           {/* Toggle Buttons */}
//           <View style={styles.SignInRegisterContainer}>
  
//             <TouchableOpacity onPress={() => setIsSignIn(true)}>
//               <Text style={[styles.TopSignInButtonText, isSignIn && styles.activeTab]}>SIGN IN</Text>
//             </TouchableOpacity>
  
//             <TouchableOpacity onPress={() => setIsSignIn(false)}>
//               <Text style={[styles.registerButtonText, !isSignIn && styles.activeTab]}>REGISTER</Text>
//             </TouchableOpacity>
                
//           </View>
  
//           {/* ==================Form Section================== */}

//           <View style={styles.formContainer}>
  
//             {isSignIn ? (
//               // ========== Sign In Section ==========
//               <View style={styles.container}>
  
//                 {/* Username Input */}
//                 <View style={styles.inputContainer}>
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Username"
//                     value={email}
//                     onChangeText={setEmail}
//                     keyboardType="email-address"
//                     autoCapitalize="none"
//                     placeholderTextColor={'#7B7B7B'}
//                   />
//                 </View>
  
//                 {/* Password Input with Icon */}
//                 <View style={styles.inputContainer}>
//                   <TextInput
//                     style={styles.input}
//                     placeholder="Password*"
//                     value={password}
//                     onChangeText={setPassword}
//                     secureTextEntry
//                     placeholderTextColor={'#7B7B7B'}
//                   />
//                   <Image
//                     source={require('../image/Mobile_Safe/hideLoginPage.png')}
//                     style={styles.InputImagePassword}
//                   />
//                 </View>
  
//                 {/* Check Box */}
//                 <View style={styles.checkBoxContainer}>
//                   <Checkbox
//                     status={isChecked ? 'checked' : 'unchecked'}
//                     onPress={toggleCheckbox}
//                     color="#8374FF"
//                   />
//                   <TouchableOpacity onPress={toggleCheckbox}>
//                     <Text style={styles.text}>stay signed in</Text>
//                   </TouchableOpacity>
//                 </View>
  
//                 {/* Sign In Button */}
//                 <TouchableOpacity style={styles.SigInButton} onPress={handleLogin}>
//                   <Text style={styles.SigInButtonText}>SIGN IN</Text>
//                 </TouchableOpacity>
  
//                 {/* Forgot Password Link */}
//                 <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
//                   <Text style={styles.forgotPasswordText}>Forget Password?</Text>
//                 </TouchableOpacity>
  
//               </View>
  
//             ) : (
//               // ========== Register Section ==========
//               <View style={styles.container}>


//                                      {/* Input Fields */}
//                                      <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Name"
//                               value={fullName}
//                               onChangeText={setfullName}
//                               autoCapitalize="none"
//                               placeholderTextColor={'#7B7B7B'}
//                           />
//                       </View>

//                       <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Email"
//                               value={emailRegister}
//                               onChangeText={setEmailRegister}
//                               placeholderTextColor={'#7B7B7B'}
//                               keyboardType="email-address"
//                           />
//                       </View>

//                      <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Mobile"
//                               value={mobile}
//                               onChangeText={setMobile}
//                               placeholderTextColor={'#7B7B7B'}
//                           />
//                       </View>

//                       <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Password"
//                               value={passwordRegister}
//                               onChangeText={setPasswordRegister}
//                               secureTextEntry
//                               placeholderTextColor={'#7B7B7B'}
//                           />
//                           <Image source={require('../image/Mobile_Safe/hideLoginPage.png')} style={styles.InputImagePassword} />
//                       </View>

//                       <View style={styles.inputContainer}>
//                           <TextInput
//                               style={styles.input}
//                               placeholder="Activation Code"
//                               value={ActivationCode}
//                               onChangeText={setActivationCode}
//                               placeholderTextColor={'#7B7B7B'}
//                           />
//                       </View>
                 
                      // {/* Checkbox */}
                      // <View style={styles.checkBoxContainer}>
                      //     <Checkbox status={isCheckedRegister ? 'checked' : 'unchecked'} onPress={toggleCheckboxRegister} color="#8374FF" />
                      //     <TouchableOpacity onPress={toggleCheckboxRegister}>
                      //         <Text style={styles.text}>I have read and agree to Terms & Condition</Text>
                      //     </TouchableOpacity>
                      // </View>

//                       {/* Register Button */}
//                       <TouchableOpacity style={styles.SignButton} onPress={handleSignUp}>
//                           <Text style={styles.SignButtonText}>REGISTER NOW</Text>
//                       </TouchableOpacity>

//                       {/* Already have an account */}
//                       <View style={styles.accountContainerForSignIn}>
//                         <Text style={styles.accountText}>Already have an account?</Text>
//                         <TouchableOpacity onPress={() => setIsSignIn(true)}>
//                          <Text style={styles.BottomSignInLink}>SIGN IN</Text>
//                         </TouchableOpacity>
//                       </View>

//               </View>
//             )}
  
//           </View>
//         </View>
//       </ScrollView>
//     </TouchableWithoutFeedback>
//   </KeyboardAvoidingView>
  
//   );
// };

//  const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#111e11',
//   },
//   ImageContainer: {
//     alignItems: 'center',
//     marginTop: 25,
//   },
//   profileImage: {
//     width: 119,
//     height: 82,
//   },
//   profileImageText: {
//     width: 212,
//     height: 53,
//     marginBottom: 25,
//   },
//   SignInRegisterContainer: {
//     flexDirection: 'row',
//     width: '70%',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   TopSignInButtonText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '500',
//   },
//   registerButtonText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '500',
//   },
//   activeTab: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#E6D26E',
//   },
//   formContainer: {
//     width: '100%',
//    },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent:'center',
//     width: '90%',
//     height: 38,
//     borderRadius: 80,
//     marginTop: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#f2f2f2',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     // Shadow for inputContainer
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,         
//   },
//   input: {
//     flex: 1,
//     height: '100%',
//     fontSize: 13,
//     color: '#7B7B7B', // Darker gray for readability
//     fontFamily: 'Poppins-Regular',
//   },
//   InputImagePassword: {
//     width: 29,
//     height: 29
//   },
//   SigInButton: {
//     backgroundColor: '#789A49',
//     paddingVertical: 5,
//     paddingHorizontal: 8,
//     borderRadius: 80,
//     width:'90%',
//     height: 38,
//     marginBottom: 20,
//     marginTop: 50,
//     shadowColor: '#000',          // Black shadow
//     shadowOffset: { width: 0, height: 4 }, // Slight offset
//     shadowOpacity: 0.2,           // Shadow opacity
//     shadowRadius: 8,              // Shadow spread
//     elevation: 4,                 // Elevation for Android shadow
//   },
//   SigInButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontFamily: 'Poppins-Light', // Standardized
//     fontWeight: '500',
//     textAlign: 'center',
//   },
//   forgotPassword: {
//     marginTop: 40,
//   },
//   forgotPasswordText: {
//     color: '#ACACAC',
//     fontSize: 13,
//     fontFamily: 'Poppins-Light', // Unified
//     marginBottom: 30,
//     fontWeight: '500',
//     textAlign:'center'
//   },
//   checkBoxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 5,
//     alignSelf: 'flex-start', // Added for left alignment
//     marginLeft: 10, // Added margin to align content from the left
//   },
//   text: {
//     fontSize: 10,
//     fontWeight: '500',
//     color: '#fff',
//     fontFamily: 'Poppins-Regular',
//   },
//   SignButton: {
//     backgroundColor: '#789A49',
//     paddingVertical: 5,
//     paddingHorizontal: 8,
//     borderRadius: 80,
//     width: '90%',
//     height: 38,
//     marginTop: 30,
//     // Adding shadow to SignButton
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
// },
//   SignButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontFamily: 'Poppins-Light', // Standardized
//     fontWeight: '500',
//     textAlign: 'center',
//   },
//   accountContainerForSignIn: {
//     flexDirection: 'row',
//     alignItems: 'center',        // vertically center align
//     justifyContent: 'center',     // horizontally center align
//     marginTop: 50,                // thoda extra spacing
//     paddingHorizontal: 10,        // side padding
//     width: '100%',                // full-width layout
// },
// accountText: {
//     color: '#7B7B7B',             // style as per preference
//     fontSize: 14,
//     marginRight: 5,
// },
// BottomSignInLink:{
//   color: '#789A49',
//       fontSize: 13,
//     fontFamily: 'Poppins-Light', // Unified
// fontWeight: '500'
// }
// });

// export default SignInRegister;






// ============================Old Register page=========================

// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     Image,
//     TextInput,
//     TouchableOpacity,
//     Alert,
//     StyleSheet,
//     KeyboardAvoidingView,
//     ScrollView,
//     Platform,
//     TouchableWithoutFeedback,
//     Keyboard,
// } from 'react-native';
// // import Feather from 'react-native-vector-icons/Feather';t
// // import AntDesign from 'react-native-vector-icons/AntDesign'; 
// // import FontAwesome from 'react-native-vector-icons/FontAwesome'; 
// import { Checkbox } from 'react-native-paper';


// const Register = ({ navigation }) => {
  // const [fullName, setfullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [mobile, setMobile] = useState('');
  // const [password, setPassword] = useState('');
  // const [ActivationCode, setActivationCode] = useState('');
  // const [isChecked, setIsChecked] = useState(false);

  // const handleSignUp = () => {
  //     Alert.alert('Login Attempt', `Full-Name: ${fullName}\nEmail: ${email}\nMobile: ${mobile}\nPassword: ${password}\nActivationCode: ${ActivationCode}`);
  // };

  // const handleLogin = () => {
  //     Alert.alert('Register', 'Redirecting to Registration Page...');
  // };

  // const toggleCheckbox = () => setIsChecked(!isChecked);

//   return (
//       <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//           <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//               <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
//                   <View style={styles.container}>
//                       {/* Top Image and Text section */}
//                       <View style={styles.ImageContainer}>
//                           <Image source={require('../image/Mobile_Safe/mobilesafelogocopy.png')} style={styles.profileImage} />
//                           <Image source={require('../image/Mobile_Safe/mobilesafelogo1.png')} style={styles.profileImageText} />
//                       </View>

//                       {/* SignUp Register Link */}
//                       <View style={styles.SignInRegisterContainer}>
//                           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//                               <Text style={styles.TopSignInButtonText}>SIGN IN</Text>
//                           </TouchableOpacity>
                          
//                           <View>
//                           <TouchableOpacity>
//                               <Text style={styles.registerButtonText}>REGISTER</Text>
//                           </TouchableOpacity>
//                           <View style={styles.SignInBottomline} />
//                           </View>
                          
//                       </View>
                      // {/* Input Fields */}
                      // <View style={styles.inputContainer}>
                      //     <TextInput
                      //         style={styles.input}
                      //         placeholder="Name"
                      //         value={fullName}
                      //         onChangeText={setfullName}
                      //         autoCapitalize="none"
                      //         placeholderTextColor={'#7B7B7B'}
                      //     />
                      // </View>

                      // <View style={styles.inputContainer}>
                      //     <TextInput
                      //         style={styles.input}
                      //         placeholder="Email"
                      //         value={email}
                      //         onChangeText={setEmail}
                      //         placeholderTextColor={'#7B7B7B'}
                      //         keyboardType="email-address"
                      //     />
                      // </View>

                      // <View style={styles.inputContainer}>
                      //     <TextInput
                      //         style={styles.input}
                      //         placeholder="Password"
                      //         value={password}
                      //         onChangeText={setPassword}
                      //         secureTextEntry
                      //         placeholderTextColor={'#7B7B7B'}
                      //     />
                      //     <Image source={require('../image/Mobile_Safe/hideLoginPage.png')} style={styles.InputImagePassword} />
                      // </View>

                      // <View style={styles.inputContainer}>
                      //     <TextInput
                      //         style={styles.input}
                      //         placeholder="Mobile"
                      //         value={mobile}
                      //         onChangeText={setMobile}
                      //         placeholderTextColor={'#7B7B7B'}
                      //     />
                      // </View>

                      // <View style={styles.inputContainer}>
                      //     <TextInput
                      //         style={styles.input}
                      //         placeholder="Activation Code"
                      //         value={ActivationCode}
                      //         onChangeText={setActivationCode}
                      //         placeholderTextColor={'#7B7B7B'}
                      //     />
                      // </View>

                      // {/* Checkbox */}
                      // <View style={styles.checkBoxContainer}>
                      //     <Checkbox status={isChecked ? 'checked' : 'unchecked'} onPress={toggleCheckboxRegister} color="#8374FF" />
                      //     <TouchableOpacity onPress={toggleCheckbox}>
                      //         <Text style={styles.text}>I have read and agree to Terms & Condition</Text>
                      //     </TouchableOpacity>
                      // </View>

                      // {/* Register Button */}
                      // <TouchableOpacity style={styles.SignButton} onPress={handleLogin}>
                      //     <Text style={styles.SignButtonText}>REGISTER NOW</Text>
                      // </TouchableOpacity>

                      // {/* Already have an account */}
                      // <View style={styles.accountContainerForSignIn}>
                      //   <Text style={styles.accountText}>Already have an account?</Text>
                      //   <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                      //    <Text style={styles.forgotPasswordText}>SIGN IN</Text>
                      //   </TouchableOpacity>
//                       </View>


//                   </View>
//               </ScrollView>
//           </TouchableWithoutFeedback>
//       </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: '#111e11',
//   },
//   ImageContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     marginTop: 25,
//   },
//   profileImage: {
//     width: 119,
//     height: 82,

//   },
//   profileImageText: {
//     width: 212,
//     height: 53,
//     marginBottom: 25
//   },
//   SignInRegisterContainer: {
//     flexDirection: 'row',
//     width: '70%',
//     justifyContent: 'space-between',
//     marginBottom: 10,
    
//   },
//   TopSignInButtonText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '500'
//     // Width: 127,
//     // Height:19
//   },
//   registerButtonText: {
//     color: '#fff',
//     fontSize: 15,
//     fontWeight: '500'
//   },
//   SignButton: {
//     backgroundColor: '#789A49',
//     paddingVertical: 5,
//     paddingHorizontal: 8,
//     borderRadius: 80,
//     width: '90%',
//     height: 38,
//     marginTop: 30,
//     // Adding shadow to SignButton
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
// },
//   SignButtonText: {
//     color: '#fff',
//     fontSize: 20,
//     fontFamily: 'Poppins-Light', // Standardized
//     fontWeight: '500',
//     textAlign: 'center',
//   },

//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent:'center',
//     width: '90%',
//     height: 38,
//     borderRadius: 80,
//     marginTop: 20,
//     paddingHorizontal: 20,
//     backgroundColor: '#f2f2f2',
//     borderWidth: 1,
//     borderColor: '#ddd',
//     // Shadow for inputContainer
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.05,
//     shadowRadius: 8,
//     elevation: 2,
// },
//   input: {
//     flex: 1,
//     height: '100%',
//     fontSize: 13,
//     color: '#7B7B7B', // Darker gray for readability
//     fontWeight:'500'
//   },
//   InputImagePassword: {
//     width: 29,
//     height: 29
//   },
// //   forgotPassword: {
// //     marginTop: 40,
// //   },
// //   forgotPasswordText: {
// //     color: '#789A49',
// //     fontSize: 13,
// //     fontFamily: 'Poppins-Light', // Unified
// //     marginBottom: 30,
// //     fontWeight: '500'
// //   },
//   checkBoxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop:5,
//     alignSelf: 'flex-start', // Added for left alignment
//     marginLeft: 30, // Added margin to align content from the left
//   },
//   text: {
//     fontSize: 10,
//     fontWeight: '500',
//     color: '#fff',
//     fontFamily: 'Poppins-Regular',
//   },
//   SignInBottomline: {
//     height: 2,
//     backgroundColor: '#E6D26E', // Line color
//     width: '100%', // Line width to match SIGN IN button
//     marginTop: 5, // Space between text and line
//   },
//   accountContainerForSignIn: {
//     flexDirection: 'row',
//     alignItems: 'center',        // vertically center align
//     justifyContent: 'center',     // horizontally center align
//     marginTop: 50,                // thoda extra spacing
//     paddingHorizontal: 10,        // side padding
//     width: '100%',                // full-width layout
// },
// accountText: {
//     color: '#7B7B7B',             // style as per preference
//     fontSize: 14,
//     marginRight: 5,
// },
// forgotPasswordText: {
//     color: '#789A49',             // different color for the link
//     fontSize: 14,
//     fontWeight: 'bold',
// },

//   accountContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//    width: '100%',
//     height: 50,
  
//   },
//   accountText: {
//     color: '#ACACAC',
//     fontSize: 13,
//     fontFamily: 'Poppins-Light',
//     marginRight: 5,
//   },

// });


// export default Register;


// 0000000000000002
// import React, { useState } from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     Alert,
//     StyleSheet,
//     KeyboardAvoidingView,
//     ScrollView,
//     Platform,
//     TouchableWithoutFeedback,
//     Keyboard,
// } from 'react-native';
// import Feather from 'react-native-vector-icons/Feather'; // Import the Icon component
// import AntDesign from 'react-native-vector-icons/AntDesign'; // Import the Icon component
// import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Import the Icon component
// import { Checkbox } from 'react-native-paper';

// const Register = ({navigation}) => {

    // const [fullName, setfullName] = useState('');
    // const [email, setEmail] = useState('');
    // const [mobile, setMobile] = useState('');
    // const [password, setPassword] = useState('');
    // const [ActivationCode, setActivationCode] = useState('');

    // const handleSignUp = () => {
    //     Alert.alert('Login Attempt', `Full-Name: ${fullName}\nEmail: ${email}\nMobile: ${mobile}\nPassword: ${password}\nActivationCode: ${ActivationCode}`);
    // };

    // const handleRegister = () => {
    //     Alert.alert('Register', 'Redirecting to Registration Page...');
    // };

    // const handleForgotPassword = () => {
    //     Alert.alert('Forgot Password', 'Redirecting to Password Recovery...');
    // };
    // // check box
    // const [isChecked, setIsChecked] = useState(false);

    // const toggleCheckbox = () => setIsChecked(!isChecked);

//     return (
//         <KeyboardAvoidingView
//             style={{ flex: 1 }}
//             behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//         >
//             <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
//                 <ScrollView
//                     contentContainerStyle={styles.scrollContainer}
//                     showsVerticalScrollIndicator={false}    //  scroll karne par right me vertical line ko dikhana hai ya nhi
//                 >
//                     <View style={styles.container}>
//                         <Text style={styles.promptText}>Create Account</Text>


                        {/* Email Input with Icon */}
                        // <View style={styles.inputContainer}>
                        //     <TextInput
                        //         style={styles.input}
                        //         placeholder="Full Name*"
                        //         value={fullName}
                        //         onChangeText={setfullName}
                        //         autoCapitalize="none"
                        //         placeholderTextColor={'#111e11'}
                        //     />
                        //     <FontAwesome name="user" size={24} color="#111e11" style={styles.icon} />
                        // </View>

//                         {/* Password Input with Icon */}
                        // <View style={styles.inputContainer}>
                        //     <TextInput
                        //         style={styles.input}
                        //         placeholder="Email*"
                        //         value={email}
                        //         onChangeText={setEmail}
                        //         secureTextEntry
                        //         placeholderTextColor={'#111e11'}
                        //         keyboardType="email-address"
                        //     />
                        //     <Feather name="mail" size={24} color="#111e11" style={styles.icon} />
                        // </View>

//                         <View style={styles.inputContainer}>
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder="Mobile*"
//                                 value={mobile}
//                                 onChangeText={setMobile}
//                                 placeholderTextColor={'#111e11'}
//                             />
//                             <AntDesign name="mobile1" size={24} color="#111e11" style={styles.icon} />
//                         </View>

//                         <View style={styles.inputContainer}>
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder="Password*"
//                                 value={password}
//                                 onChangeText={setPassword}
//                                 secureTextEntry
//                                 placeholderTextColor={'#111e11'}
//                             />
//                             <Feather name="eye-off" size={24} color="#111e11" style={styles.icon} />
//                         </View>

//                         <View style={styles.inputContainer}>
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder="Activation Code*"
//                                 value={ActivationCode}
//                                 onChangeText={setActivationCode}
//                                 placeholderTextColor={'#111e11'}
//                             />
//                             <Feather name="shield" size={24} color="#111e11" style={styles.icon} />
//                         </View>

//                         {/* Check Box */}
//                         <View style={styles.checkBoxContainer}>
//                             <Checkbox
//                                 status={isChecked ? 'checked' : 'unchecked'}
//                                 onPress={toggleCheckbox}
//                                 color="#fff"
//                             />
//                             <TouchableOpacity onPress={toggleCheckbox}>
//                                 <Text style={styles.text}>
//                                     I have read and agree to <Text style={styles.link}>Terms & Condition</Text>
//                                 </Text>
//                             </TouchableOpacity>
//                         </View>


//                         <TouchableOpacity style={styles.registerButton} onPress={handleSignUp}>
//                             <Text style={styles.registerButtonText}>REGISTER NOW</Text>
//                         </TouchableOpacity>


//                         <View style={styles.alreadyAccountContainer}>
//                             <Text style={{ color: '#fff', fontSize: 18, fontWeight: '400', fontFamily: 'Roboto-Regular' }}> Already have an Account? </Text>
//                             <TouchableOpacity>
//                                 <Text style={styles.alreadyAccountLink} onPress={()=>navigation.navigate('Login')} >Login</Text>
//                             </TouchableOpacity>
//                         </View>




//                     </View>
//                 </ScrollView>
//             </TouchableWithoutFeedback>
//         </KeyboardAvoidingView>
//     );
// };

// const styles = StyleSheet.create({
//     scrollContainer: {
//         flexGrow: 1,
//         justifyContent: 'center',
//     },
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         paddingHorizontal: 20,
//         backgroundColor: '#111e11',
//     },
//     promptText: {
//         fontSize: 30,
//         color: '#fff',
//         marginTop: 50,
//         marginBottom: 8,
//         fontFamily: 'Poppins-Bold',
//         fontWeight: '900',
//         marginBottom: 30,
//     },
//     registerButton: {
//         backgroundColor: '#ECD974', // Indigo color for a modern look
//         paddingVertical: 8,
//         paddingHorizontal: 8,
//         borderRadius: 50,
//         width: 200,
//         marginBottom: 20,
//         marginTop: 40,
//     },
//     registerButtonText: {
//         color: '#111e11',
//         fontWeight: '500',
//         textAlign: 'center',
//         fontSize: 22,
//         fontFamily: 'Poppins-Bold',
//     },
//     inputContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         width: '100%',
//         height: 50,
//         borderRadius: 10,
//         marginBottom: 15,
//         paddingHorizontal: 20,
//         backgroundColor: '#f2f2f2', // Clean white background for a professional look
//         // borderWidth: 1, 
//         // borderColor: '#ddd', // Light gray border for subtle separation
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.05,
//         shadowRadius: 8,
//         elevation: 2, // Slight elevation for Android
//       },
    
//     input: {
//         flex: 1,
//         height: '100%',
//         fontSize: 18,
//         color: '#111e11', // Darker gray for readability
//         fontFamily: 'Poppins-Regular',
//     },
//     icon: {
//         marginLeft: 10,
//         marginRight: 5,
//     },
//     checkBoxContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 15,
//     },
//     text: {
//         fontSize: 16,
//         color: '#fff',
//         fontFamily: 'Poppins-Regular',
//     },
//     link: {
//         color: '#ECD974', // Indigo for highlight
//         textDecorationLine: 'underline',
//     },
//     alreadyAccountContainer: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 40,
//     },
//     alreadyAccountLink: {
//         color: '#ECD974',
//         fontSize: 18,
//         fontWeight: '400',
//         fontFamily: 'Poppins-Regular',
//     },
// });


// export default Register;
