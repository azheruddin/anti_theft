// import React, { useState, useRef, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import Sound from 'react-native-sound';
// import DeviceInfo from 'react-native-device-info';

// const USB = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const [isPlaying, setIsPlaying] = useState(false);
//   const soundRef = useRef(null);
//   const intervalRef = useRef(null);

//   // Play the siren sound
//   const playSound = () => {
//     if (!soundRef.current) {
//       soundRef.current = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
//         if (error) {
//           Alert.alert('Error', 'Failed to load the sound file.');
//           console.log('Error loading sound:', error.message);
//           return;
//         }
//         soundRef.current.setNumberOfLoops(-1);
//         soundRef.current.play();
//       });
//     } else {
//       soundRef.current.setNumberOfLoops(-1);
//       soundRef.current.play();
//     }
//     setIsPlaying(true);
//   };

//   // Stop the siren sound
//   const stopSound = () => {
//     if (soundRef.current) {
//       soundRef.current.stop();
//     }
//     setIsPlaying(false);
//   };

//   // Function to check if the device is charging
//   const checkChargingStatus = async () => {
//     try {
//       const isCharging = await DeviceInfo.isBatteryCharging();
//       if (!isCharging && isEnabled && !isPlaying) {
//         playSound();
//       }
//     } catch (error) {
//       console.log('Error checking charging status:', error);
//     }
//   };

//   // Start monitoring USB disconnect
//   const startMonitoring = () => {
//     setIsEnabled(true);
//     // Check charging status every 2 seconds
//     intervalRef.current = setInterval(checkChargingStatus, 2000);
//   };

//   // Stop monitoring USB disconnect
//   const stopMonitoring = () => {
//     setIsEnabled(false);
//     stopSound();
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       stopMonitoring();
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={[styles.buttonContainer, { backgroundColor: isEnabled ? '#B22222' : '#006400' }]}
//         onPress={isEnabled ? stopMonitoring : startMonitoring}
//       >
//         <Text style={styles.buttonText}>
//           {isEnabled ? 'Disable USB Monitoring' : 'Enable USB Monitoring'}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     borderRadius: 10,
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     elevation: 5,
//     margin: 10,
//   },
//   buttonText: {
//     color: '#FFD700',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default USB;

import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Sound from 'react-native-sound';
import DeviceInfo from 'react-native-device-info';

const USB = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCharging, setIsCharging] = useState(null);
  const soundRef = useRef(null);
  const intervalRef = useRef(null);

  // Play the siren sound
  const playSound = () => {
    if (!soundRef.current) {
      soundRef.current = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          Alert.alert('Error', 'Failed to load the sound file.');
          console.log('Error loading sound:', error.message);
          return;
        }
        soundRef.current.setNumberOfLoops(-1);
        soundRef.current.play();
      });
    } else {
      soundRef.current.setNumberOfLoops(-1);
      soundRef.current.play();
    }
    setIsPlaying(true);
  };

  // Stop the siren sound
  const stopSound = () => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
    setIsPlaying(false);
  };

  // Function to check if the device is charging
  const checkChargingStatus = async () => {
    try {
      const charging = await DeviceInfo.isBatteryCharging();
      setIsCharging(charging);
      if (!charging && isEnabled && !isPlaying) {
        playSound();
      }
    } catch (error) {
      console.log('Error checking charging status:', error);
    }
  };

  // Start monitoring USB disconnect
  const startMonitoring = () => {
    setIsEnabled(true);
    checkChargingStatus();
    intervalRef.current = setInterval(checkChargingStatus, 2000);
  };

  // Stop monitoring USB disconnect
  const stopMonitoring = () => {
    setIsEnabled(false);
    stopSound();
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsCharging(null);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopMonitoring();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.statusText}>
        USB Status: {isCharging === null ? 'Not Checked' : isCharging ? 'Connected' : 'Disconnected'}
      </Text>

      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: isEnabled ? '#B22222' : '#006400' }]}
        onPress={isEnabled ? stopMonitoring : startMonitoring}
      >
        <Text style={styles.buttonText}>
          {isEnabled ? 'Disable USB Monitoring' : 'Enable USB Monitoring'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
    margin: 10,
  },
  buttonText: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default USB;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import DeviceInfo from 'react-native-device-info';

// const USB = () => {
//   const [isCharging, setIsCharging] = useState(null);
//   const [isEnabled, setIsEnabled] = useState(false);

//   // Check charging status
//   const checkChargingStatus = async () => {
//     try {
//       const chargingStatus = await DeviceInfo.isBatteryCharging();
//       setIsCharging(chargingStatus);
//     } catch (error) {
//       console.log('Error checking charging status:', error);
//     }
//   };

//   // Start monitoring charging status
//   const startMonitoring = () => {
//     setIsEnabled(true);
//     checkChargingStatus();
//   };

//   // Stop monitoring charging status
//   const stopMonitoring = () => {
//     setIsEnabled(false);
//     setIsCharging(null);
//   };

//   // Check charging status when component mounts and when enabled
//   useEffect(() => {
//     if (isEnabled) {
//       const interval = setInterval(checkChargingStatus, 2000);
//       return () => clearInterval(interval);
//     }
//   }, [isEnabled]);

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={[styles.buttonContainer, { backgroundColor: isEnabled ? '#B22222' : '#006400' }]}
//         onPress={isEnabled ? stopMonitoring : startMonitoring}
//       >
//         <Text style={styles.buttonText}>
//           {isEnabled ? 'Disable USB Monitoring' : 'Enable USB Monitoring'}
//         </Text>
//       </TouchableOpacity>

//       {isCharging !== null && (
//         <Text style={styles.statusText}>
//           USB Status: {isCharging ? 'Connected (Charging)' : 'Disconnected'}
//         </Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     borderRadius: 10,
//     paddingVertical: 12,
//     paddingHorizontal: 20,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 6,
//     elevation: 5,
//     margin: 10,
//   },
//   buttonText: {
//     color: '#FFD700',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   statusText: {
//     fontSize: 18,
//     marginTop: 20,
//   },
// });

// export default USB;

