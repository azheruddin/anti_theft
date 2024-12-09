import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';


const DailyWorkout2 = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#3C462D', '#23271C']}
      style={styles.gradient}
    >
      {/* ===============Images============== */}
      {/* Top Line Image */}
      <Image
        source={require('../Image/VectorLineTop.png')}
        style={{ height: 301, width: 364, position: 'absolute', top: 40 }}
      />
      {/* Couple Image */}
      <Image
        source={require('../Image/fitmanwomen.png')}
        style={{ height: 503, width: 347, position: 'absolute', top: 20 }}
      />
      {/* Bottom Line Image */}
      <Image
        source={require('../Image/VectorLineBottom.png')}
        style={{ height: 228, width: 365, position: 'absolute', top: 350 }}
      />

      {/* Text Section */}
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Daily
          Workout</Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.contentText}>We are excited to help you with your fitness goal.</Text>
          <TouchableOpacity style={styles.nextButton}
            // Next page par move karne ke liye
            onPress={() => navigation.navigate('GenderSelection')}
          >
            <Text style={styles.nextButtonText}>Start</Text>
          </TouchableOpacity>
          <AntDesign name="doubleright" size={20} color="#FFFFFF" style={{ marginTop: 14 }} />
        </View>

      </View>

    </LinearGradient>
  )
}

export default DailyWorkout2

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    left: 10,
    position: 'absolute',
    top: 570
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
    marginTop: 10
  },
  nextButton: {
    width: 81,
    height: 29,
    borderRadius: 80,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginTop: 10
  },
  nextButtonText: {
    color: '#101E11',
    fontSize: 13,
    fontWeight: '600',

  }
})