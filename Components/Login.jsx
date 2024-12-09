import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'; // Import the Icon component
import { Checkbox } from 'react-native-paper';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('Login Attempt', `Email: ${email}\nPassword: ${password}`);
  };

  const handleRegister = () => {
    Alert.alert('Register', 'Redirecting to Registration Page...');
  };

  const handleForgotPassword = () => {
    Alert.alert('Forgot Password', 'Redirecting to Password Recovery...');
  };

  // check box
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => setIsChecked(!isChecked);


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            {/* Top Image and Text section */}
            <View style={styles.ImageContainer}>
              <Image
                source={require('../image/Mobile_Safe/mobilesafelogocopy.png')}
                style={styles.profileImage}
              />
              <Image
                source={require('../image/Mobile_Safe/mobilesafelogo1.png')}
                style={styles.profileImageText}
              />
            </View>

            {/* SignUp Register Link */}
            <View style={styles.SignInRegisterContainer}>
              <View>
                <TouchableOpacity style={styles.TopSignInButton}>
                  <Text style={styles.TopSignInButtonText}>SIGN IN</Text>
                </TouchableOpacity>
                <View style={styles.SignInBottomline} />
              </View>

              <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerButtonText}>REGISTER</Text>
              </TouchableOpacity>
            </View>


            {/* Email Input with Icon */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Username"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={'#7B7B7B'}
              />
              {/* <Feather name="mail" size={24} color="#111e11" style={styles.icon} /> */}
            </View>

            {/* Password Input with Icon */}
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password*"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor={'#7B7B7B'}
              />
              <Image
                source={require('../image/Mobile_Safe/hideLoginPage.png')}
                style={styles.InputImagePassword}
              />
              {/* <Feather name="eye-off" size={24} color="#111e11" style={styles.icon} /> */}
            </View>

            {/* Check Box */}
            <View style={styles.checkBoxContainer}>
              <Checkbox
                status={isChecked ? 'checked' : 'unchecked'}
                onPress={toggleCheckbox}
                color="#8374FF"
              />
              <TouchableOpacity onPress={toggleCheckbox}>
                <Text style={styles.text}>
                  stay signed in
                </Text>
              </TouchableOpacity>
            </View>


            {/* =========SignIn Button=========== */}
            <TouchableOpacity style={styles.SignButton} onPress={handleLogin}>
              <Text style={styles.SignButtonText}>SIGN IN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleForgotPassword} style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Forget Password?</Text>
            </TouchableOpacity>
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
    display: 'flex',
    alignItems: 'center',
    marginTop: 50,
  },
  profileImage: {
    width: 119,
    height: 82,

  },
  profileImageText: {
    width: 212,
    height: 53,
    marginBottom: 50
  },
  SignInRegisterContainer: {
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    marginBottom: 20
    //  backgroundColor:'red'
  },
  TopSignInButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500'
    // Width: 127,
    // Height:19
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500'
  },
  SignButton: {
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
  SignButtonText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Light', // Standardized
    fontWeight: '500',
    textAlign: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
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
  forgotPassword: {
    marginTop: 40,
  },
  forgotPasswordText: {
    color: '#ACACAC',
    fontSize: 13,
    fontFamily: 'Poppins-Light', // Unified
    marginBottom: 30,
    fontWeight: '500'
  },
  checkBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    alignSelf: 'flex-start', // Added for left alignment
    marginLeft: 30, // Added margin to align content from the left
  },
  text: {
    fontSize: 10,
    fontWeight: '500',
    color: '#fff',
    fontFamily: 'Poppins-Regular',
  },
  SignInBottomline: {
    height: 2,
    backgroundColor: '#E6D26E', // Line color
    width: '100%', // Line width to match SIGN IN button
    marginTop: 5, // Space between text and line
  },

});


export default Login;
