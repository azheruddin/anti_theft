import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
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

const WomenChild = ({ navigation }) => {
  //  Logout
  const logoutUser = async () => {
    try {
      await AsyncStorage.removeItem('userId');
      Alert.alert('Success', 'Logged out successfully!');
      navigation.navigate('SignInRegister');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong!');
      console.error(error);
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
    <View style={{alignItems: 'center', height: '100%' }}>


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
        onPress={()=>navigation.navigate('Permission')}
        
      >
        <Text style={styles.logoutButtonText}>Permissions</Text>
      </TouchableOpacity>
      {/* Permission end  */}

      {/*CallLogScreen  */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={()=>navigation.navigate('CallLogScreen')}
        
      >
        <Text style={styles.logoutButtonText}>CallLogScreen</Text>
      </TouchableOpacity>
      {/* CallLogScreen end  */}

      {/*MediaGalleryScreen  */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={()=>navigation.navigate('MediaGalleryScreen')}
        
      >
        <Text style={styles.logoutButtonText}>MediaGalleryScreen</Text>
      </TouchableOpacity>
      {/* MediaGalleryScreen end  */}

      {/*IMEINumberScreen  */}
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={()=>navigation.navigate('IMEINumberScreen')}
        
      >
        <Text style={styles.logoutButtonText}>IMEINumberScreen</Text>
      </TouchableOpacity>
      {/* IMEINumberScreen end  */}

    </View>
  )
}

export default WomenChild

const styles = StyleSheet.create({
  logoutButton: {
    backgroundColor: 'darkgreen',
    paddingVertical: 12,
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
    width: '70%',

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
    paddingVertical: 12,
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
    width: '70%',
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

    paddingVertical: 12,
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
    width: '70%',
  },
  InternetText: {
    color: 'gold',
    fontSize: 18,
  },
})