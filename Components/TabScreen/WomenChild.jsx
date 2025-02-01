import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
// Camera
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
// Battery
import DeviceInfo from 'react-native-device-info'; // Import the device info library
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import the icon library
import { SafeAreaView } from 'react-native';
// Internet
import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import API_ENDPOINTS from '../../BaseURL/BaseURL';

const WomenChild = ({ navigation }) => {

  //  Logout
  const logoutUser = async () => {
    try {
      // Get user details from AsyncStorage
      const userDetailsString = await AsyncStorage.getItem('userDetails');
      const userDetails = JSON.parse(userDetailsString);

      if (userDetails && userDetails.id) {
        console.log('Fetched User ID for Logout:', userDetails.id); // Debug log



        // Call the logout API using Axios
        const response = await axios.post(API_ENDPOINTS.LOGOUT(userDetails.id), {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.data.status === true) {
          console.log('Logout successful:', response.data.message); // Debug log
          try {
            await AsyncStorage.removeItem('userDetails'); // Remove user details from AsyncStorage
            Alert.alert('Success', 'Logged out successfully!');
            navigation.navigate('SignInRegister'); // Navigate to SignInRegister screen
          } catch (error) {
            Alert.alert('Error', 'Something went wrong!');
            console.error(error);
          }
        } else {
          throw new Error(response.data.message || 'Logout failed.');
        }
      } else {
        console.log('No User ID found for logout. Please log in again.');
        setError('User ID not found. Please log in again.');
      }
    } catch (err) {
      console.error('Error during logout:', err);
      setError(err.message || 'An unexpected error occurred during logout.');
    }
  };

  //  Logout end

  // CameraPermission
  const cameraPermission = permision => {
    request(permision).then(result => {
      console.log(result);
    });
  };

  const hendleCameraPermission = () => {
    if (Platform.OS == 'ios') {
      cameraPermission(PERMISSIONS.IOS.CAMERA);
    } else {
      cameraPermission(PERMISSIONS.ANDROID.CAMERA);
    }

  }
  // CameraPermission end

  // Battery
  const [batteryLevel, setBatteryLevel] = useState(0); // Store the battery level
  useEffect(() => {
    // Fetch the battery level when the component mounts
    const getBatteryLevel = async () => {
      const level = await DeviceInfo.getBatteryLevel(); // Get the battery level
      setBatteryLevel(level * 100); // Battery level is a number between 0 and 1, so multiply by 100
    };

    getBatteryLevel(); // Call the function to get battery level on mount

    // Optionally, you can listen for battery status updates if needed
    const interval = setInterval(getBatteryLevel, 60000); // Update every minute

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, []);

  // Determine the appropriate battery icon based on the battery level
  const getBatteryIcon = () => {
    if (batteryLevel >= 80) {
      return 'battery-high';
    } else if (batteryLevel >= 50) {
      return 'battery-medium';
    } else if (batteryLevel >= 20) {
      return 'battery-low';
    } else {
      return 'battery-alert'; // For very low battery
    }
  };
  // Battery end

  // Internet
  const [isConnected, setIsConnected] = useState(true); // Track internet connectivity status
  useEffect(() => {
    // Subscribe to network status changes
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected); // Update state based on connectivity
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);
  // Internet end


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>

        {/* Logout  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={(logoutUser)}
        >
          <Text style={styles.logoutButtonText}>logout</Text>
        </TouchableOpacity>
        {/* Logout end  */}

        {/* Camera Permission  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={hendleCameraPermission}
        >
          <Text style={styles.logoutButtonText}>Camera Permission</Text>
        </TouchableOpacity>
        {/* Camera Permission end  */}

        {/* Battery */}
        <SafeAreaView>
          <View style={styles.Batterycontainer}>
            <Icon
              name={getBatteryIcon()} // Display the battery icon based on the battery level
              size={30}
              color="#fff"
              style={styles.Batteryicon}
            />
            <Text style={styles.Batterytext}>Battery Level: {batteryLevel.toFixed(0)}%</Text>
          </View>
        </SafeAreaView>
        {/* Battery end */}

        {/* Internet */}
        <View style={[styles.Internetcontainer, { backgroundColor: isConnected ? 'darkgreen' : 'red' }]}>
          <Icon
            name={isConnected ? 'wifi' : 'wifi-off'} // Display wifi icon if connected, wifi-off if not
            size={30}
            color="gold"
            style={styles.icon}
          />
          <Text style={styles.InternetText}>
            {isConnected ? 'Internet is On' : 'No Internet Connection'}
          </Text>
        </View>
        {/* Internet end */}

        {/*Permission  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Permission')}
        >
          <Text style={styles.logoutButtonText}>Permissions</Text>
        </TouchableOpacity>
        {/* Permission end  */}

        {/*CallLogScreen  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('CallLogScreen')}
        >
          <Text style={styles.logoutButtonText}>CallLogScreen</Text>
        </TouchableOpacity>
        {/* CallLogScreen end  */}

        {/*MediaGalleryScreen  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('MediaGalleryScreen')}
        >
          <Text style={styles.logoutButtonText}>MediaGalleryScreen</Text>
        </TouchableOpacity>
        {/* MediaGalleryScreen end  */}

        {/*IMEINumberScreen  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('IMEINumberScreen')}
        >
          <Text style={styles.logoutButtonText}>IMEINumberScreen</Text>
        </TouchableOpacity>
        {/* IMEINumberScreen end  */}


        {/*Siren  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('Siren')}
        >
          <Text style={styles.logoutButtonText}>Siren</Text>
        </TouchableOpacity>
        {/* Siren end  */}

        {/*MovingPhoneSiren  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('MovingPhoneSiren')}
        >
          <Text style={styles.logoutButtonText}>Phone Siren</Text>
        </TouchableOpacity>
        {/* Siren end  */}

        {/*USB  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('USB')}
        >
          <Text style={styles.logoutButtonText}>USB</Text>
        </TouchableOpacity>
        {/* USB end  */}

        {/*  PhoneNumber  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('PhoneNumber')}
        >
          <Text style={styles.logoutButtonText}>PhoneNumber</Text>
        </TouchableOpacity>
        {/* phone end  */}

        {/*  SendMessage  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('SendMessage')}
        >
          <Text style={styles.logoutButtonText}>SendMessage</Text>
        </TouchableOpacity>
        {/* SendMessage end  */}

        {/*  DeviceAdminFeature  */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => navigation.navigate('DeviceAdminFeature')}
        >
          <Text style={styles.logoutButtonText}>DeviceAdminFeature</Text>
        </TouchableOpacity>
        {/* DeviceAdminFeature end  */}

      </View>
    </ScrollView>
  )
}

export default WomenChild

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Allows the scrollview to grow and fill remaining space
    marginTop:-6
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#111e11',
    width: '100%',
    paddingHorizontal: 8,
    paddingBottom: 87
  },
  logoutButton: {
    backgroundColor: 'darkgreen',
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  logoutButtonText: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  Batterycontainer: {
    flexDirection: 'row',
    backgroundColor: 'darkgreen',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '85%',
  },
  Batterytext: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  Batteryicon: {
    color: 'gold',
    marginRight: 10,
  },
  Internetcontainer: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '80%',
  },
  InternetText: {
    color: 'gold',
    fontSize: 18,
  },
})
