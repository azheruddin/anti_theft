import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Sound from 'react-native-sound';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';

const MovingPhoneSiren = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);
  const subscriptionRef = useRef(null);
  const baselineRef = useRef(null);

  // Set accelerometer update interval to 3s
  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 300);
  }, []);

  // Function to play sound
  const playSound = () => {
    if (!soundRef.current) {
      soundRef.current = new Sound('sound.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          Alert.alert('Error', 'Failed to load the sound file.');
          console.log('Error loading sound:', error.message);
          return;
        }
        soundRef.current.setNumberOfLoops(-1); // Loop indefinitely
        soundRef.current.play((success) => {
          if (!success) {
            console.log('Playback failed due to decoding errors');
          }
        });
      });
    } else {
      soundRef.current.setNumberOfLoops(-1);
      soundRef.current.play();
    }
    setIsPlaying(true);
  };

  // Function to stop sound
  const stopSound = () => {
    if (soundRef.current) {
      soundRef.current.stop();
    }
    setIsPlaying(false);
  };

  // Start accelerometer subscription with calibration
  const startMotionDetection = () => {
    setIsEnabled(true);

    subscriptionRef.current = accelerometer.subscribe(({ x, y, z }) => {
      if (!baselineRef.current) {
        // Set initial baseline when enabling motion detection
        baselineRef.current = { x, y, z };
      } else {
        // Calculate difference from baseline
        const deltaX = Math.abs(x - baselineRef.current.x);
        const deltaY = Math.abs(y - baselineRef.current.y);
        const deltaZ = Math.abs(z - baselineRef.current.z);

        // Threshold for detecting motion
        if ((deltaX > 0.5 || deltaY > 0.5 || deltaZ > 0.5) && !isPlaying) {
          playSound();
        }
      }
    });
  };

  // Stop accelerometer subscription and reset baseline
  const stopMotionDetection = () => {
    setIsEnabled(false);
    stopSound();

    if (subscriptionRef.current) {
      subscriptionRef.current.unsubscribe();
      subscriptionRef.current = null;
    }

    baselineRef.current = null; // Reset baseline
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: isEnabled ? '#B22222' : '#006400' }]}
        onPress={isEnabled ? stopMotionDetection : startMotionDetection}
      >
        <Text style={styles.buttonText}>
          {isEnabled ? 'Disable Motion Detection' : 'Enable Motion Detection'}
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

export default MovingPhoneSiren;