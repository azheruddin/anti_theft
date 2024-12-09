import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
// import Hide from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import { Switch } from 'react-native-switch';


const Home = ({navigation}) => {

  // Switch button's state
  const [panicMode, setPanicMode] = useState(false);
  const [wrongPattern, setWrongPattern] = useState(false);
  const [simTheft, setSimTheft] = useState(false);
  const [offLineLocation, setOffLineLocation] = useState(false);
  const [socialMedia, setSocialMedia] = useState(false);
  const [FakeShutDown, setFakeShutDown] = useState(false);
  const [FakeAiroPlane, setFakeAiroPlane] = useState(false);
  const [wrongWebsite, setWrongWebsite] = useState(false);
  const [childProtection, setchildProtection] = useState(false);
  const [powerOn, setPowerOn] = useState(false);




  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.background}>

        {/* Heading===01 */}
        <LinearGradient
          colors={['#DBFF79', '#FFFFFF']} // Define gradient colors
          start={{ x: 0, y: 0 }} // Starting point of gradient (left)
          end={{ x: 1, y: 0 }}   // Ending point of gradient (right)
          style={styles.header1} // Apply to header container
        >
          <TouchableOpacity style={styles.headerContent1}
          onPress={()=>navigation.navigate('AddEmergencyContact')}
          >
            <Image
              source={require('../image/Mobile_Safe/Alert.png')}
              style={{ width: 62, height: 62 }}
            />
            <Text style={styles.headerTitle1}>Add Emergency Contact</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Heading===02 */}
        <LinearGradient
          colors={['#FFFFFF', '#DBFF79']} // Gradient colors reversed
          start={{ x: 0, y: 0 }}          // Starting point (left)
          end={{ x: 1, y: 0 }}            // Ending point (right)
          style={styles.header2}          // Apply to header container
        >
          <TouchableOpacity style={styles.headerContent2}
          onPress={()=>navigation.navigate('Fitness')}
          >
            <Image
              source={require('../image/Mobile_Safe/Womenheader2.png')}
              style={{ width: 62, height: 62 }}
            />
            <Text style={styles.headerTitle2}>Fitness</Text>
          </TouchableOpacity>
        </LinearGradient>


        {/* =======================Card========================= */}


        {/* ================Panic Mode=============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../image/Mobile_Safe/PanicMode.png')}
                style={styles.cardImage}
              />
              {/* image ke upar round banane ke liye ye 2 view liye hai pahle ek view ko height width aur backgrouncolor:#111e11 ye deke rightTop par laga diye phir ek aur View ko leke height width backgrouncolor:white deke position ki help se uske upar laga diye aur us white view ko borderTopRightRadius:10 de diye bas  */}
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
              {/* rounding end */}
            </View>
            {/* ============checkBox Button=========== */}
            <View style={styles.checkBoxButton}>
              <View style={{ marginLeft: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 50 }}>
                <Switch
                  value={panicMode}
                  onValueChange={() => setPanicMode(!panicMode)}
                  renderActiveText={false}
                  renderInActiveText={false}
                  circleSize={36}
                  backgroundActive='#EDDA75'
                  backgroundInactive='#8F8F8F'
                />
              </View>

            </View>
          </View>


          {/* Bottom Section with Text */}
          <View style={styles.bottomSection}>
            <Text style={styles.title}>Panic Mode</Text>
            <Text style={styles.subtitle}>Send SOS message by pressing the power key 3 times.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

        {/* ================Wrong Pattern Mode=============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../image/Mobile_Safe/wrongpatternmode.png')}
                style={styles.cardImage}
              />
              {/* image ke upar round banane ke liye ye 2 view liye hai pahle ek view ko height width aur backgrouncolor:#111e11 ye deke rightTop par laga diye phir ek aur View ko leke height width backgrouncolor:white deke position ki help se uske upar laga diye aur us white view ko borderTopRightRadius:10 de diye bas  */}
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
              {/* rounding end */}
            </View>
            {/* ============checkBox Button=========== */}
            <View style={styles.checkBoxButton}>
              <View style={{ marginLeft: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 50 }}>
                <Switch
                  value={wrongPattern}
                  onValueChange={() => setWrongPattern(!wrongPattern)}
                  renderActiveText={false}
                  renderInActiveText={false}
                  circleSize={36}
                  backgroundActive='#EDDA75'
                  backgroundInactive='#8F8F8F'
                />
              </View>

            </View>
          </View>


          {/* Bottom Section with Text */}
          <View style={styles.bottomSection}>
            <Text style={styles.title}>Wrong Pattern Mode</Text>
            <Text style={styles.subtitle}>Send SOS message whenever someone tried to unlock phone & failed 3times</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

        {/* ================Sim Theft Mode=============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../image/Mobile_Safe/simtheiftmode.png')}
                style={styles.cardImage}
              />
              {/* image ke upar round banane ke liye ye 2 view liye hai pahle ek view ko height width aur backgrouncolor:#111e11 ye deke rightTop par laga diye phir ek aur View ko leke height width backgrouncolor:white deke position ki help se uske upar laga diye aur us white view ko borderTopRightRadius:10 de diye bas  */}
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
              {/* rounding end */}
            </View>
            {/* ============checkBox Button=========== */}
            <View style={styles.checkBoxButton}>
              <View style={{ marginLeft: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 50 }}>
                <Switch
                  value={simTheft}
                  onValueChange={() => setSimTheft(!simTheft)}
                  renderActiveText={false}
                  renderInActiveText={false}
                  circleSize={36}
                  backgroundActive='#EDDA75'
                  backgroundInactive='#8F8F8F'
                />
              </View>

            </View>
          </View>


          {/* Bottom Section with Text */}
          <View style={styles.bottomSection}>
            <Text style={styles.title}>Sim Theft Mode</Text>
            <Text style={styles.subtitle}>Send SOS message whenever someone tried to change sim card</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

        {/* ================Offline Location Mode=============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../image/Mobile_Safe/offLineLocationMode.png')}
                style={styles.cardImage}
              />
              {/* image ke upar round banane ke liye ye 2 view liye hai pahle ek view ko height width aur backgrouncolor:#111e11 ye deke rightTop par laga diye phir ek aur View ko leke height width backgrouncolor:white deke position ki help se uske upar laga diye aur us white view ko borderTopRightRadius:10 de diye bas  */}
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
              {/* rounding end */}
            </View>
            {/* ============checkBox Button=========== */}
            <View style={styles.checkBoxButton}>
              <View style={{ marginLeft: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 50 }}>
                <Switch
                  value={offLineLocation}
                  onValueChange={() => setOffLineLocation(!offLineLocation)}
                  renderActiveText={false}
                  renderInActiveText={false}
                  circleSize={36}
                  backgroundActive='#EDDA75'
                  backgroundInactive='#8F8F8F'
                />
              </View>

            </View>
          </View>


          {/* Bottom Section with Text */}
          <View style={styles.bottomSection}>
            <Text style={styles.title}>Offline Location Mode</Text>
            <Text style={styles.subtitle}>App will track location without internet</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

        {/* ================Social Media App Lock=============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../image/Mobile_Safe/socialmediaapplock.png')}
                style={styles.cardImage}
              />
              {/* image ke upar round banane ke liye ye 2 view liye hai pahle ek view ko height width aur backgrouncolor:#111e11 ye deke rightTop par laga diye phir ek aur View ko leke height width backgrouncolor:white deke position ki help se uske upar laga diye aur us white view ko borderTopRightRadius:10 de diye bas  */}
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
              {/* rounding end */}
            </View>
            {/* ============checkBox Button=========== */}
            <View style={styles.checkBoxButton}>
              <View style={{ marginLeft: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 50 }}>
                <Switch
                  value={socialMedia}
                  onValueChange={() => setSocialMedia(!socialMedia)}
                  renderActiveText={false}
                  renderInActiveText={false}
                  circleSize={36}
                  backgroundActive='#EDDA75'
                  backgroundInactive='#8F8F8F'
                />
              </View>

            </View>
          </View>


          {/* Bottom Section with Text */}
          <View style={styles.bottomSection}>
            <Text style={styles.title}>Social Media App Lock</Text>
            <Text style={styles.subtitle}>Coming Soon</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

        {/* ================Fake Shut Down=============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../image/Mobile_Safe/fakeshutdown.png')}
                style={styles.cardImage}
              />
              {/* image ke upar round banane ke liye ye 2 view liye hai pahle ek view ko height width aur backgrouncolor:#111e11 ye deke rightTop par laga diye phir ek aur View ko leke height width backgrouncolor:white deke position ki help se uske upar laga diye aur us white view ko borderTopRightRadius:10 de diye bas  */}
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
              {/* rounding end */}
            </View>
            {/* ============checkBox Button=========== */}
            <View style={styles.checkBoxButton}>
              <View style={{ marginLeft: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 50 }}>
                <Switch
                  value={FakeShutDown}
                  onValueChange={() => setFakeShutDown(!FakeShutDown)}
                  renderActiveText={false}
                  renderInActiveText={false}
                  circleSize={36}
                  backgroundActive='#EDDA75'
                  backgroundInactive='#8F8F8F'
                />
              </View>

            </View>
          </View>


          {/* Bottom Section with Text */}
          <View style={styles.bottomSection}>
            <Text style={styles.title}>Fake Shut Down</Text>
            <Text style={styles.subtitle}>Coming Soon.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

        {/* ================Fake Aeroplane Mode=============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../image/Mobile_Safe/fakeaeroplanemode.png')}
                style={styles.cardImage}
              />
              {/* image ke upar round banane ke liye ye 2 view liye hai pahle ek view ko height width aur backgrouncolor:#111e11 ye deke rightTop par laga diye phir ek aur View ko leke height width backgrouncolor:white deke position ki help se uske upar laga diye aur us white view ko borderTopRightRadius:10 de diye bas  */}
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
              {/* rounding end */}
            </View>
            {/* ============checkBox Button=========== */}
            <View style={styles.checkBoxButton}>
              <View style={{ marginLeft: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 50 }}>
                <Switch
                  value={FakeAiroPlane}
                  onValueChange={() => setFakeAiroPlane(!FakeAiroPlane)}
                  renderActiveText={false}
                  renderInActiveText={false}
                  circleSize={36}
                  backgroundActive='#EDDA75'
                  backgroundInactive='#8F8F8F'
                />
              </View>

            </View>
          </View>


          {/* Bottom Section with Text */}
          <View style={styles.bottomSection}>
            <Text style={styles.title}>Fake Aeroplane Mode</Text>
            <Text style={styles.subtitle}>If someone on the aeroplane mode it shows the fake symbol of aeroplane mode.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

        {/* ================Wrong Website=============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../image/Mobile_Safe/wrongwebsite.png')}
                style={styles.cardImage}
              />
              {/* image ke upar round banane ke liye ye 2 view liye hai pahle ek view ko height width aur backgrouncolor:#111e11 ye deke rightTop par laga diye phir ek aur View ko leke height width backgrouncolor:white deke position ki help se uske upar laga diye aur us white view ko borderTopRightRadius:10 de diye bas  */}
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
              {/* rounding end */}
            </View>
            {/* ============checkBox Button=========== */}
            <View style={styles.checkBoxButton}>
              <View style={{ marginLeft: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 50 }}>
                <Switch
                  value={wrongWebsite}
                  onValueChange={() => setWrongWebsite(!wrongWebsite)}
                  renderActiveText={false}
                  renderInActiveText={false}
                  circleSize={36}
                  backgroundActive='#EDDA75'
                  backgroundInactive='#8F8F8F'
                />
              </View>

            </View>
          </View>


          {/* Bottom Section with Text */}
          <View style={styles.bottomSection}>
            <Text style={styles.title}>Wrong Website</Text>
            <Text style={styles.subtitle}>Children cannot open wrong websites.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

        {/* ================Child Protection=============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../image/Mobile_Safe/childprotection.png')}
                style={styles.cardImage}
              />
              {/* image ke upar round banane ke liye ye 2 view liye hai pahle ek view ko height width aur backgrouncolor:#111e11 ye deke rightTop par laga diye phir ek aur View ko leke height width backgrouncolor:white deke position ki help se uske upar laga diye aur us white view ko borderTopRightRadius:10 de diye bas  */}
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
              {/* rounding end */}
            </View>
            {/* ============checkBox Button=========== */}
            <View style={styles.checkBoxButton}>
              <View style={{ marginLeft: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 50 }}>
                <Switch
                  value={childProtection}
                  onValueChange={() => setchildProtection(!childProtection)}
                  renderActiveText={false}
                  renderInActiveText={false}
                  circleSize={36}
                  backgroundActive='#EDDA75'
                  backgroundInactive='#8F8F8F'
                />
              </View>

            </View>
          </View>


          {/* Bottom Section with Text */}
          <View style={styles.bottomSection}>
            <Text style={styles.title}>Child Protection</Text>
            <Text style={styles.subtitle}>A Child Should Press The
              Volume Button Twice So ThatParents Will Be Notified Of Their Precise Location.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

        {/* ================Power On=============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../image/Mobile_Safe/poweron.png')}
                style={styles.cardImage}
              />
              {/* image ke upar round banane ke liye ye 2 view liye hai pahle ek view ko height width aur backgrouncolor:#111e11 ye deke rightTop par laga diye phir ek aur View ko leke height width backgrouncolor:white deke position ki help se uske upar laga diye aur us white view ko borderTopRightRadius:10 de diye bas  */}
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
              <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
              {/* rounding end */}
            </View>
            {/* ============checkBox Button=========== */}
            <View style={styles.checkBoxButton}>
              <View style={{ marginLeft: 5, borderWidth: 2, borderColor: '#fff', borderRadius: 50 }}>
                <Switch
                  value={powerOn}
                  onValueChange={() => setPowerOn(!powerOn)}
                  renderActiveText={false}
                  renderInActiveText={false}
                  circleSize={36}
                  backgroundActive='#EDDA75'
                  backgroundInactive='#8F8F8F'
                />
              </View>

            </View>
          </View>


          {/* Bottom Section with Text */}
          <View style={styles.bottomSection}>
            <Text style={styles.title}>Power On</Text>
            <Text style={styles.subtitle}>When This Feature Is Turned On And The Phone's Power Button Is Pressed, A Picture & Its
              Location Are Sent To A Different Phone Number.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>


      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    // paddingHorizontal: 16,
    // paddingVertical: 20,
  },
  background: {
    flexDirection: 'row',      // Row mein arrange karne ke liye
    flexWrap: 'wrap',          // Automatically wrap to next line
    justifyContent: 'space-around',  // Space evenly between boxes
    backgroundColor: '#111e11',
    width: '100%',
    paddingHorizontal: 8,
    paddingBottom: 87
    // flex: 1,
  },
  // Add Emergency Contact
  header1: {
    width: 163,
    height: 113,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 1,
    marginTop: 10,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 6
  },
  headerContent1: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  headerTitle1: {
    fontSize: 18,
    color: '#101E11',
    fontWeight: '700',
    textAlign:'center'
  },
  // Women&ChildSafety
  header2: {
    width: 163,
    height: 113,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 1,
    marginTop: 10,
    alignSelf: 'center',
    marginTop: 15,
    marginBottom: 6
  },
  headerContent2: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  headerTitle2: {
    fontSize: 18,
    color: '#101E11',
    fontWeight: '700',
    textAlign:'center'

  },

// Cards
  card: {
    width: 163,
    height: 109,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    marginVertical: 6,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardImage: {
    width: 39,
    height: 39,
    marginTop: 5,
    marginLeft: 10
  },
  checkBoxButton: {
    width: '50%',
    backgroundColor: '#111e11',
    borderBottomLeftRadius: 25
  },

  bottomSection: {
    // padding: 16,
  },
  title: {
    width: 161,
    height: 19,
    fontSize: 15,
    fontWeight: '700',
    color: '#101E11',
    marginLeft: 5,
    zIndex: 999
  },
  subtitle: {
    width: 149,
    height: 38,
    fontSize: 10,
    fontWeight: '400',
    color: '#878787',
    marginTop: 4,
    marginLeft: 8

  },

  
});

export default Home;




// headerText: {
  //   color: '#ECD974',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  // card: {
  //   // backgroundColor: '#927b40',
  //   // backgroundColor:"#edda74",
  //   backgroundColor: '#fff',
  //   borderRadius: 8,
  //   padding: 16,
  //   marginBottom: 12,
  //   width: '90%',
  //   height:140,
  //   marginLeft: 18,
  // },
  // cardTitle: {
  //   fontSize: 20,
  //   // marginTop:3,
  //   fontWeight: 'bold',
  //   color: 'black',
  //   // backgroundColor: '#927b40',

  //   height: 40,
  //   marginTop: 6,
  //   marginBottom: 8,
  //   marginLeft: 10,
  // },
  // cardDescription: {
  //   fontSize: 14,
  //   color: '#555555',
  //   marginBottom: 16,

  // },
  // mainiconsection: {
  //   width: '100%',
  //   height: 42,

  //   // backgroundColor: 'red',
  //   display: 'flex',
  //   flexDirection: 'row',
  // },
  // button: {
  //   marginLeft: 10,
  //   marginTop: 5,
  //   position: 'absolute',
  //   right: -10,
  // },
  // imageicon: {
  //   width: 35,
  //   height: 40,
  // },