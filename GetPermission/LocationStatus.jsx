import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, StyleSheet, Text, View } from 'react-native';

const LocationStatus = () => {
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      setPermission(granted === PermissionsAndroid.RESULTS.GRANTED);
    } catch (err) {
      console.log('Permission Error:', err);
    }
  };

  return (
    <View style={styles.container}>
      {permission !== null ? (
        permission ? (
          <View style={styles.permissionGranted}>
            <Text style={styles.text}>Permission Granted</Text>
          </View>
        ) : (
          <View style={styles.permissionDenied}>
            <Text style={styles.text}>Permission Denied</Text>
          </View>
        )
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionGranted: {
    height: '50%',
    width: '100%',
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  permissionDenied: {
    height: '50%',
    width: '100%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontSize: 18,
  },
});

export default LocationStatus;
