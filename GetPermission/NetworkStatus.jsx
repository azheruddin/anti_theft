import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/FontAwesome';

const NetworkStatus = () => {
  const [isConnected, setIsConnected] = useState(null);

  useEffect(() => {
    // NetInfo subscription se connection status track karein
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Cleanup on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <Icon 
        name="wifi" 
        size={50} 
        color={isConnected ? 'green' : 'red'} 
      />
      <Text style={styles.text}>
        {isConnected ? 'Connected' : 'Disconnected'}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default NetworkStatus;






