import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { Switch } from 'react-native-switch';


const DontTouch = () => {
  
// Switch button state

  const [MobileSafeFind, setMobileSafeFind] = useState(false)
  const [MobileSafeRingOn, setMobileSafeRingOn] = useState(false)
  const [MobileSafeRingOff, setMobileSafeRingOff] = useState(false)
  const [MobileSafeRingOn2, setMobileSafeRingOn2] = useState(false)
  const [ MobileSafeRing, setMobileSafeRing] = useState(false)
  const [ MobileSafeFormat, setMobileSafeFormat] = useState(false)
  const [ MobileSafeHide, setMobileSafeHide] = useState(false)
  const [ MobileSafeRingOn3, setMobileSafeRingOn3] = useState(false)

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.background}>
       {/* =======================Card========================= */}

        {/* ================01 Mobile Safe Find=============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../Image/mobilesafefind1.png')}
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
                  value={MobileSafeFind}
                  onValueChange={() => setMobileSafeFind(!MobileSafeFind)}
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
            <Text style={styles.title}>Mobile Safe Find</Text>
            <Text style={styles.subtitle}>Send this message with registered mobile number to track your phone.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

         {/* ================02 Mobile Safe Ring On=============== */}
         <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../Image/mobilesaferingon1.png')}
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
                  value={MobileSafeRingOn}
                  onValueChange={() => setMobileSafeRingOn(!MobileSafeRingOn)}
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
            <Text style={styles.title}>Mobile Safe Ring On</Text>
            <Text style={styles.subtitle}>Send this message with registered mobile number to start a loud ring.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

        {/* ================03 Mobile Safe Ring Off =============== */}
        <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../Image/mobilesaferingoff.png')}
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
                  value={MobileSafeRingOff}
                  onValueChange={() => setMobileSafeRingOff(!MobileSafeRingOff)}
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
            <Text style={styles.title}>Mobile Safe Ring Off</Text>
            <Text style={styles.subtitle}>Send this message with registered mobile number to stop a loud ring.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

         {/* ================04 Mobile Safe Ring On=============== */}
         <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../Image/mobilesaferingon1.png')}
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
                  value={MobileSafeRingOn2}
                  onValueChange={() => setMobileSafeRingOn2(!MobileSafeRingOn2)}
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
            <Text style={styles.title}>Mobile Safe Ring On</Text>
            <Text style={styles.subtitle}>Send this message with registered mobile number to track your phone.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

         {/* ================05 Mobile Safe Ring =============== */}
         <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../Image/mobilesafering.png')}
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
                  value={MobileSafeRing}
                  onValueChange={() => setMobileSafeRing(!MobileSafeRing)}
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
            <Text style={styles.title}>Mobile Safe Ring </Text>
            <Text style={styles.subtitle}>Send this message with registered mobile number to set phone into ringing mode.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

         {/* ================06 Mobile Safe Format=============== */}
         <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../Image/mobilesafeformat.png')}
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
                  value={MobileSafeFormat}
                  onValueChange={() => setMobileSafeFormat(!MobileSafeFormat)}
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
            <Text style={styles.title}>Mobile Safe Format</Text>
            <Text style={styles.subtitle}>Send this message with registered mobile number to format the phone.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

         {/* ================07 Mobile Safe Hide=============== */}
         <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../Image/Invisible.png')}
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
                  value={MobileSafeHide}
                  onValueChange={() => setMobileSafeHide(!MobileSafeHide)}
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
            <Text style={styles.title}>Mobile Safe Hide</Text>
            <Text style={styles.subtitle}>Send this message with registered mobile number to hide and unhide the app.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

          {/* ================08 Mobile Safe Ring On=============== */}
          <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../Image/mobilesaferingon1.png')}
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
                  value={MobileSafeRingOn3}
                  onValueChange={() => setMobileSafeRingOn3(!MobileSafeRingOn3)}
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
            <Text style={styles.title}>Mobile Safe Ring On</Text>
            <Text style={styles.subtitle}>Send this message with registered mobile number to track your phone.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

          {/* ================09 Mobile Safe Ring On=============== */}
          <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../Image/mobilesaferingon1.png')}
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
                  value={MobileSafeRingOn3}
                  onValueChange={() => setMobileSafeRingOn3(!MobileSafeRingOn3)}
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
            <Text style={styles.title}>Mobile Safe Ring On</Text>
            <Text style={styles.subtitle}>Send this message with registered mobile number to track your phone.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>

          {/* ================10 Mobile Safe Ring On=============== */}
          <View style={styles.card}>
          {/* ========card Top========== */}
          <View style={styles.cardTop}>
            <View style={{ position: 'relative', borderTopEndRadius: 20, width: '50%' }}>
              <Image
                source={require('../Image/mobilesaferingon1.png')}
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
                  value={MobileSafeRingOn3}
                  onValueChange={() => setMobileSafeRingOn3(!MobileSafeRingOn3)}
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
            <Text style={styles.title}>Mobile Safe Ring On</Text>
            <Text style={styles.subtitle}>Send this message with registered mobile number to track your phone.</Text>

            {/* same upar ki tarah round karne ke liye  */}
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#111e11', right: 0 }}></View>
            <View style={{ position: 'absolute', height: 20, width: 20, backgroundColor: '#fff', right: 0, borderTopRightRadius: 10 }}></View>
            {/* same upar ki tarah round karne ke liye  */}

          </View>

        </View>
      
    </View>
    </ScrollView>
  )
}

export default DontTouch

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
    paddingTop:8,
    height:'100%'
    // flex: 1,
  },
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
    marginLeft: 8,
    zIndex:999
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
})