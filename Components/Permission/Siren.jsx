// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet, Alert } from 'react-native';
// import DeviceInfo from 'react-native-device-info';

// const ChargingStatusScreen = () => {
//     const [isCharging, setIsCharging] = useState(false);

//     // Check charging status
//     const checkChargingStatus = async () => {
//         const charging = await DeviceInfo.isCharging();
//         setIsCharging(charging);
//     };

//     useEffect(() => {
//         checkChargingStatus();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Charging Status</Text>
//             <Text style={styles.status}>
//                 {isCharging ? 'Device is Charging' : 'Device is Not Charging'}
//             </Text>
//             <Button title="Check Charging Status" onPress={checkChargingStatus} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#fff',
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//     },
//     status: {
//         fontSize: 18,
//         marginVertical: 20,
//     },
// });

// export default ChargingStatusScreen;

import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Sound from 'react-native-sound';

const Siren = () => {
  const [isPlaying, setIsPlaying] = useState(false); 
  const soundRef = useRef(null); 

  const playSound = () => {
    if (!soundRef.current) {
     
      soundRef.current = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          Alert.alert('Error', 'Failed to load the sound file.');
          console.log('Error loading sound:', error.message);
          return;
        }
        soundRef.current.setNumberOfLoops(-1); 
        soundRef.current.play((success) => {
          if (!success) {
            console.log('Playback failed due to decoding errors');
          }
        });
      });
    } else {
      // If already loaded, start playing
      soundRef.current.setNumberOfLoops(-1); // Loop indefinitely
      soundRef.current.play();
    }
    setIsPlaying(true); // Update state to playing
  };

  const stopSound = () => {
    if (soundRef.current) {
      soundRef.current.stop(() => {
        // console.log('Sound stopped');
      });
    }
    setIsPlaying(false); 
  };

  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: isPlaying ? '#B22222' : '#006400' }]}
        onPress={isPlaying ? stopSound : playSound}
      >
        <Text style={styles.buttonText}>{isPlaying ? 'Stop Siren' : 'Start Siren'}</Text>
      </TouchableOpacity>

     
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#006400', 
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

export default Siren;

