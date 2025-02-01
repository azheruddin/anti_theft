import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, ToastAndroid } from 'react-native';
import { enableDeviceAdmin, checkDeviceAdminStatus } from './DeviceAdminPermission';

const DeviceAdminFeature = () => {
  const [isAdminEnabled, setIsAdminEnabled] = useState(false);

  const checkStatus = () => {
    checkDeviceAdminStatus();  // Check device admin status
  };

  return (
    <View style={styles.header}>
      <Text style={styles.heading}>Device Admin Feature</Text>
      <Button 
        title="Enable Device Admin" 
        onPress={() => {
          try {
            enableDeviceAdmin();  // Enable device admin
            checkStatus();         // Check status
          } catch (error) {
            console.error('Error enabling device admin: ', error);
          }
        }} 
      />
      {isAdminEnabled && <Text style={styles.successText}>Device Admin Enabled!</Text>}
      {!isAdminEnabled && <Text style={styles.errorText}>Device Admin Not Enabled!</Text>}
    </View>
  );
};

export default DeviceAdminFeature;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
