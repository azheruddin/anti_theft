import {
  Image,
  Switch,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HideArrow from 'react-native-vector-icons/Entypo';




import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
// import {blue500} from 'react-native-paper/lib/typescript/styles/themes/v2/colors';




const AppGuide = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.main_hide_App}>
     
      <View style={styles.Mobile_Safe}>
        <View style={{height: '100%', width: '20%'}}>
          <View style={{marginTop: 20}}>
            <HideArrow name='eye-with-line' size={50} color='black' style={{marginLeft:9}} />
            {/* <Image source={require('../image/Hide_logo.png')} /> */}
          </View>
        </View>
        <View
          style={{
            height: '100%',
            // marginRight: 20,
            marginLeft: 5,
            // backgroundColor: 'red',
            width: '60%',
          }}>
          <View>
            <Text style={{fontWeight: 700, fontSize: 20, marginTop: '8%',color:'black'}}>
              {' '}
              Hide Mobile Safe
            </Text>
          </View>
          <View>
            <Text style={{fontWeight:400, fontSize: 14,color:'black',marginLeft:7}}>Hide app icon from home</Text>
          </View>
        </View>
        <View style={{height: '100%', width: '17%'}}>
          <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
              <Switch
                trackColor={{false: 'gray', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f4f3f4' : 'black'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </SafeAreaView>
          </SafeAreaProvider>
        </View>
      </View>
      <View style={styles.Secondmain}>
        <View style={styles.Mobile_Section}>
          <View style={{width: 190, marginLeft: 6, marginTop: 10}}>
            <Text style={{fontWeight: 600, fontSize: 17,color:'black'}}>
              {' '}
              Open From Dial Pad
            </Text>
          </View>
          <View
            style={{width: 160, height: 320, marginTop: 30,marginLeft:-17}}>
            {/* <Image
              style={{width: 150, height: 320}}
              source={require('../image/Mobile.png')}
            /> */}
            <HideArrow name='mobile' size={200} color='black' />
          </View>
        </View>
        <View style={styles.call_button}>
          <View
            style={{
              width: 155,
              height: 100,
              // backgroundColor: 'white',
              marginTop: 120,
              
            }}>
            <Text style={{fontWeight: 900,color:'black',fontSize:13,width:150}}>
              Enter the code in dial pad and then tap call button to open app
            </Text>
            <TouchableOpacity style={{width: 90, height: 20, backgroundColor:'black',borderRadius:4,marginLeft:35,marginTop:20}}>
              <Text style={{fontWeight:300,fontSize:14,marginLeft:25,color:'white'}}>TRY IT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AppGuide;

const styles = StyleSheet.create({
  main_hide_App: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
  },
  Hide_Header: {
    // backgroundColor: 'blue',
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'white',
  },
  Mobile_Safe: {
    width: '90%',
    height: '12%',
    // backgroundColor: 'white',
    // marginTop: '40%',
    marginLeft: 20,
    borderRadius: 20,
    flexDirection: 'row',
    marginTop:20,
    backgroundColor: 'white',
    shadowColor: '#000',           
    shadowOffset: { width: 31, height: 31 }, 
    shadowOpacity: 50,         
    shadowRadius: 92,         
    elevation: 5, 
    // justifyContent:'space-between'
  },
  container: {
    flex: 1,
    // backgroundColor:'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{scale: 1.5}],
  },
  Secondmain: {
    width: '90%',
    height: '46%',
    backgroundColor: 'white',
    marginTop: '7%',
    marginLeft: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    shadowColor: '#000',           
    shadowOffset: { width: 31, height: 31 }, 
    shadowOpacity: 50,         
    shadowRadius: 92,         
    elevation: 5, 
    flexDirection: 'row',
  },
  Mobile_Section: {
    // backgroundColor: 'red',
    width: '52%',
    height: '100%',
  },
  call_button: {
    // backgroundColor: 'green',
    width: '48%',
    height: '100%',
  },
});