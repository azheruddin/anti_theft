import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import HideArrow from 'react-native-vector-icons/Ionicons';

const EmergencyMode = () => {
  return (
    <View style={styles.main_hide_Alert}>
     
     

      <View style={styles.mainalert}>
        <View style={{marginTop: 15, marginLeft: 45}}>
          <Text style={{fontWeight: 'bold', fontSize: 21,color:'black'}}>
            Add Emergency Contact
          </Text>
        </View>
        <View style={{marginTop: 17}}>
          <Text style={{fontWeight: '400', fontSize: 16,paddingLeft:'3%',color:'gray'}}>
            If your phone is got stolen and if you where in emergency then we
            will share location and photo in this emergency contact below
          </Text>
        </View>

        <View style={{marginTop: 20}}>
          <TouchableOpacity style={styles.but}>
            <Text style={{fontSize: 28, marginLeft: 50, marginTop: 3,color:'black'}}>
              Contact 1
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: 25}}>
          <TouchableOpacity style={styles.but}>
            <Text style={{fontSize: 28, marginLeft: 50, marginTop: 5,color:'black'}}>
              Contact 2
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.double}>
          <TouchableOpacity
            style={styles.cancel}>
            <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 6,color:'black'}}>
              Cancel
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.save}>
            <Text style={{fontSize: 20, marginLeft: 30, marginTop: 6,color:'black'}}>
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default EmergencyMode;

const styles = StyleSheet.create({
  main_hide_Alert: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  Alert_Header: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
    marginTop:5
  },
  mainalert: {
    width: '90%',
    height: '51%',
    backgroundColor: 'white',
    marginTop: 60,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',           
    shadowOffset: { width: 31, height: 31 }, 
    shadowOpacity: 50,         
    shadowRadius: 92,         
    elevation: 5, 
 

  },
  but: {
    // backgroundColor: '#E1C16E',
    width: 220,
    height: 50,
    borderRadius: 10,
    marginLeft: 55,

    
    backgroundColor: 'white',
    shadowColor: '#000',           
    shadowOffset: { width: 31, height: 31 }, 
    shadowOpacity: 50,         
    shadowRadius: 92,         
    elevation: 5, 

  },
  double: {
    width: '90%',
    height: 60,
    // backgroundColor: 'gray',
    marginTop: 30,
    marginLeft: 20,
    flexDirection:'row'
  },
  cancel:{
    // backgroundColor: 'red',
    width: 100,
    height: 40,
    // borderRadius: 30,
    marginTop: 10,
    // backgroundColor: 'white',
    borderRadius: 10,
    // marginLeft: 55,

    
    backgroundColor: 'white',
    shadowColor: '#000',           
    shadowOffset: { width: 31, height: 31 }, 
    shadowOpacity: 50,         
    shadowRadius: 92,         
    elevation: 5, 

  },
  save:{
   // backgroundColor: 'red',
   width: 100,
   height: 40,
   borderRadius: 10,
   marginTop: 10,
   // backgroundColor: 'white',
  //  borderRadius: 30,
   marginLeft: 80,

   
   backgroundColor: 'white',
   shadowColor: '#000',           
   shadowOffset: { width: 31, height: 31 }, 
   shadowOpacity: 50,         
   shadowRadius: 92,         
   elevation: 5, 

  }
});