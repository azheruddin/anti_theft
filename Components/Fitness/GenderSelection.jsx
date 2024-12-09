import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function GenderSelection() {
  const [selectedGender, setSelectedGender] = useState('Male');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is Your Gender?</Text>
      <Text style={styles.subtitle}>
        To make sure you receive the best personalised offers we need to know your Gender
      </Text>

      {/* Conditional Image Rendering */}
      <Image
        source={
          selectedGender === 'Male'
            ? require('../Image/genderMan.png') // Male image path
            : require('../Image/genderWomen.png') // Female image path
        }
        style={styles.genderImage}
      />

      {/* Gender Selection Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGender === 'Male' && styles.selectedButton,
          ]}
          onPress={() => setSelectedGender('Male')}
        >
          {/* Checkmark */}
          {selectedGender === 'Male' && (
            <View style={styles.checkmark}>
              <Icon name="check" size={13} color="#FFFFFF" />
            </View>
          )}
          <Text style={[styles.buttonText, selectedGender === 'Male' && styles.selectedText]}>
            Male
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderButton,
            selectedGender === 'Female' && styles.selectedButton,
          ]}
          onPress={() => setSelectedGender('Female')}
        >
          {/* Checkmark */}
          {selectedGender === 'Female' && (
            <View style={styles.checkmark}>
              <Icon name="check" size={13} color="#FFFFFF" />
            </View>
          )}
          <Text style={[styles.buttonText, selectedGender === 'Female' && styles.selectedText]}>
            Female
          </Text>
        </TouchableOpacity>
      </View>

      {/* Finish Button */}
      <TouchableOpacity style={styles.finishButton}
      onPress={()=>alert('Hello Faique')}
      >
        <Text style={styles.finishButtonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#000000',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    color: '#444444',
    marginBottom: 20,
    width: 259,
    height: 58,
  },
  genderImage: {
    width: 232,
    height: 376,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 35,
  },
  genderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 9,
    backgroundColor: '#f0f0f0',
    marginHorizontal: 5,
    width: 119,
    height: 36,
  },
  selectedButton: {
    borderColor: '#BB0000',
    borderWidth: 1,
  },
  checkmark: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#D20000',
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    textAlign: 'right',
    flex: 1,
  },
  selectedText: {
    color: '#101E11',
    fontWeight: 'bold',
  },
  finishButton: {
    backgroundColor: '#D20000',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 80,
    width: 254,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '500',
  },
});
