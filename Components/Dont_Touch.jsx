import {Image, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const Dont_Touch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.maindiv}>
      <View style={styles.maingrid}>
        <View style={styles.firstrow}>
          <View style={styles.card}>
            <View style={{width: '100%', height: 55, marginTop: 5}}>
              <Image
               source={{ uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' }} 
              
              />
            </View>
            <View style={{width: '100%', height: 25}}>
              <Text style={{fontWeight: '900', fontSize: 15, marginLeft: 10}}>
                Panic Mode
              </Text>
            </View>
            <View style={{width: '100%', height: 50}}>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 11,
                  marginLeft: 5,
                //   backgroundColor:'blue'
                //   paddingHorizontal: 7,
                }}>
                Send SOS message by pressing the power key 3 times.
              </Text>
            </View>
            <View style={{height: '20%', width: '17%', marginLeft: 120}}>
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

          <View style={styles.card2}>
            <View style={{width: '100%', height: 55, marginTop: 5}}>
              <Image
                style={{width: '30%', height: 55, marginLeft: '10%'}}
                source={{ uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' }} 
               
              />
            </View>
            <View style={{width: '100%', height: 25}}>
              <Text style={{fontWeight: '900', fontSize: 15, marginLeft: 10}}>
              Wrong Pattern Mode
              </Text>
            </View>
            <View style={{width: '100%', height: 50}}>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 10,
                  marginLeft: 5,
                  paddingHorizontal: 5,
                }}>
                Send SOS message
 whenever someone tried
 to unlock phone & failed 3
 times
              </Text>
            </View>
            <View style={{height: '20%', width: '17%', marginLeft: 120}}>
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
          
        </View>

    

        <View style={styles.secondrow}>
          <View style={styles.card}>
            <View style={{width: '100%', height: 55, marginTop: 5}}>
              <Image
                style={{width: '30%', height: 55, marginLeft: '5%'}}
                source={{ uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' }} 
            
              />
            </View>
            <View style={{width: '100%', height: 25}}>
              <Text style={{fontWeight: '900', fontSize: 15, marginLeft: 10}}>
              Sim Theft Mode
              </Text>
            </View>
            <View style={{width: '100%', height: 50}}>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 10,
                  marginLeft: 5,
                  paddingHorizontal: 5,
                }}>
               Send SOS message
 whenever someone tried
 to change sim card 
              </Text>
            </View>
            <View style={{height: '20%', width: '17%', marginLeft: 120}}>
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

          <View style={styles.card2}>
            <View style={{width: '100%', height: 55, marginTop: 5}}>
              <Image
                style={{width: '30%', height: 55, marginLeft: '10%'}}
                source={{ uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' }} 
              />
            </View>
            <View style={{width: '100%', height: 25}}>
              <Text style={{fontWeight: '900', fontSize: 14, marginLeft: 10}}>
              Offline Location Mode
              </Text>
            </View>
            <View style={{width: '100%', height: 50}}>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 13,
                  marginLeft: 5,
                  paddingHorizontal: 5,
                }}>
              App will track location
              without internet
              </Text>
            </View>
            <View style={{height: '20%', width: '17%', marginLeft: 120}}>
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
        </View>


        <View style={styles.thirdrow}>
          <View style={styles.card}>
            <View style={{width: '100%', height: 55, marginTop: 5}}>
              <Image
                style={{width: '30%', height: 55, marginLeft: '5%'}}
                source={{ uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' }} 
              />
            </View>
            <View style={{width: '100%', height: 25}}>
              <Text style={{fontWeight: '900', fontSize: 14, marginLeft: 10}}>
              Social Media App
              Lock 
              </Text>
            </View>
           
            <View style={{height: '20%', width: '17%', marginLeft: 120,marginTop:50}}>
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

          <View style={styles.card2}>
            <View style={{width: '100%', height: 55, marginTop: 5}}>
              <Image
                style={{width: '30%', height: 55, marginLeft: '10%'}}
                source={{ uri: 'https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D' }} 
              />
            </View>
            <View style={{width: '100%', height: 25}}>
              <Text style={{fontWeight: '900', fontSize: 15, marginLeft: 10}}>
              Fake Shut Down
              </Text>
            </View>
            {/* <View style={{width: '100%', height: 50}}>
              <Text
                style={{
                  fontWeight: '400',
                  fontSize: 13,
                  marginLeft: 5,
                  paddingHorizontal: 5,
                }}>
                Send SOS message by pressing the power key 3 times.
              </Text>
            </View> */}
            <View style={{height: '20%', width: '17%', marginLeft: 120,marginTop:50}}>
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
        </View>

      </View>
      
    </View>
  );
};

export default Dont_Touch;

const styles = StyleSheet.create({
  maindiv: {
    width: '100%',
    height: '100%',
    backgroundColor: '#800080',
  },
  maingrid: {
    height: '80%',
    width: '100%',
    // backgroundColor: 'green',
    // display: 'flex',
    // flexDirection: 'row',
    // margin: 'auto',
    marginTop:190
  },
  firstrow: {
    width: '100%',
    // backgroundColor: 'red',
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
  },
  secondrow:{
    width: '100%',
    // backgroundColor: 'yellow',
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
  },
  thirdrow:{
    width: '100%',
    // backgroundColor: 'black',
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    width: '38%',
    height: '85%',
    borderRadius: 30,
    marginLeft: 30,
    backgroundColor: 'white',
  },
  card2: {
    width: '38%',
    height: '85%',
    borderRadius: 30,
    marginLeft: 40,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    // backgroundColor:'yellow',
    alignItems: 'center',
    marginTop: -10,
    justifyContent: 'center',
    transform: [{scale: 1.2}],
  },
});