import {
 StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';

const About = () => {
  return (
    <View style={styles.main_about}>
     
      <View style={styles.lineTop}></View>
      <View style={{width: 150, height: 40, marginLeft: 20}}>
        <Text style={{fontWeight: 300, fontSize: 20, color: 'black', marginTop: 15}}>
          Check Auto Start
        </Text>
      </View>
      <View style={styles.lineBottom}></View>

      <View
        style={{
          width: '100%',
          height: 120,
          // backgroundColor:'red',
           marginTop: 10,
        }}>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 24,
            color: 'black',
            marginLeft: 8,
            marginTop:10,
          }}>
          Emergency Mode Feature
        </Text>

        <Text
  style={{
    width: '90%',            // Slightly less than full width for better spacing
    fontWeight: '400',        // Correct font weight as a string
    fontSize: 13,
    marginTop: 7,
    color: 'black',
    marginHorizontal: '5%',   // Equal margins on both left and right
    textAlign: 'justify',     // Justify text for balanced alignment
    lineHeight: 20,           // Increased line height for better readability
  }}>
  If a person is in an emergency, just dial #1234#. After that, the emergency
  mode of the phone gets activated, and an SMS will be sent to the number added 
  in the emergency option, along with the person's location and photo, indicating 
  that the person is in an emergency.
</Text>


      </View>

      <View
        style={{
          width: '100%',
          height: 320,
          marginTop: 10,
        }}>
        <Text
          style={{
            fontWeight: 500,
            fontSize: 24,
            color: 'black',
            marginLeft: 8,
            marginTop:40
          }}>
          Mobile Safe Features
        </Text>

        <Text
          style={{
            width:'93%',
            fontWeight: 350,
            fontSize: 13,
            marginTop:15,
            color: 'black',
            marginLeft: 5,
            paddingHorizontal:10,
            textAlign:"justify",
            
          }}>
        • Automatically gets Activated when Thief Try to Open
        Pattern/Password Lock
        </Text>
        <Text
          style={{
            width:'93%',
            fontWeight: 350,
            fontSize: 13,
            marginTop:10,
            color: 'black',
            marginLeft: 5,
            paddingHorizontal:10,
            textAlign:"justify"
          }}>
          • Automatically Detects when Thief Try to Change Sim
         Card.
        </Text>
        <Text
          style={{
            width:'93%',
            fontWeight: 350,
            fontSize: 13,
            marginTop:10,
            color: 'black',
            marginLeft: 5,
            paddingHorizontal:10,
            textAlign:"justify"
          }}>
      • Takes Thief Location And Image from Front Camera
        </Text>
        <Text
          style={{
            width:'90%',
            fontWeight: 350,
            fontSize: 13,
            marginTop:10,
            color: 'black',
            marginLeft: 5,
            paddingHorizontal:10,
            textAlign:"justify"
          }}>
        • Send That Location And Image URL To Number Added
        In Emergency Contacts
        </Text>

        <Text
          style={{
            width:'90%',
            fontWeight: 350,
            fontSize: 13,
            marginTop:10,
            color: 'black',
            marginLeft: 5,
            paddingHorizontal:10,
            textAlign:"justify"
          }}>
          • Send New Sim card No if Thief Changed The Sim
         Cards
        </Text>

     

      </View>

    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  main_about: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  AboutHeader: {
    // backgroundColor: 'blue',
    width: '100%',
    height: '8%',
    flexDirection: 'row',
  },
  lineBottom: {
    width: '100%',
    marginTop:20,
    height: 1,
    backgroundColor: 'black',

  },
  lineTop: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',

  },
});