import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, PermissionsAndroid, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState('Fetching...');

  // Requesting permission to access phone state
  const requestPhonePermission = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
          {
            title: 'Phone State Permission',
            message:
              'This app requires access to your phone state to fetch carrier information.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log('Phone state permission granted');
          fetchPhoneNumber();
        } else {
          Alert.alert('Permission Denied!', 'Cannot fetch phone number without permission.');
        }
      } else {
        Alert.alert('iOS Platform', 'This feature is not supported on iOS.');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // Fetching phone carrier info or other device data
  const fetchPhoneNumber = async () => {
    try {
      const simCarrier = await DeviceInfo.getCarrier();
      const carrierInfo =
        typeof simCarrier === 'object'
          ? JSON.stringify(simCarrier) // if object, stringify it
          : simCarrier; // otherwise, use directly as a string
      setPhoneNumber(carrierInfo ? `Carrier: ${carrierInfo}` : 'Carrier info not available');
    } catch (error) {
      console.error('Error fetching carrier info:', error);
      setPhoneNumber('Error fetching carrier info.');
    }
  };

  // Initial effect to request permission
  useEffect(() => {
    requestPhonePermission();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>User Carrier Information:</Text>
      <Text style={{ fontSize: 16, color: 'blue', marginBottom: 20 }}>{phoneNumber}</Text>
      <Button title="Fetch Again" onPress={requestPhonePermission} />
    </View>
  );
};

export default PhoneNumber;
