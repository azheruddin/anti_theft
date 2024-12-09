import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Fitness = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#9A9BCD', '#595BBF', '#3D3E89']} // top se light aur bottom se dark
      style={styles.gradient}
    >
      <Image
        source={require('../Image/RedVector.png')}
        style={{ height: 445.04, width: 320, marginTop: 60 }}
      />
      <Image
        source={require('../Image/fitman1.png')}
        style={{ height: 503, width: 283, position: 'absolute', top: -8,left:5 }}
      />

      {/* Text Section */}
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Hello to Fitness Coach</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>We are excited to help you with your fitness goal.</Text>
          <TouchableOpacity style={styles.nextButton}
            // Next page par move karne ke liye
            onPress={()=>navigation.navigate('DailyWorkout2')}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
          <AntDesign name="doubleright" size={20} color="#FFFFFF" style={{    marginTop:14}} />
        </View>

      </View>


    </LinearGradient>
  )
}

export default Fitness

const styles = StyleSheet.create({
  gradient: {
    height: '100%',
    paddingTop:30
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 13,
    marginTop:10
  },
  headerText: {
    width: '100%',
    fontSize: 36,
    fontWeight: '500',
    color: '#FFFFFF',
        fontFamily:'Montserrat-Bold'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  contentText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '300',
    width: 211,
    height: 38,
    marginTop:10,
   

  },
  nextButton: {
    width: 81,
    height: 29,
    borderRadius: 80,
    backgroundColor: '#FFFFFF',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:5,
    marginTop:10
  },
  nextButtonText: {
    color: '#101E11',
    fontSize: 13,
    fontWeight: '600',
 
  }
})