import React, {useState} from 'react';
import {StyleSheet, Text, View, Switch, ScrollView} from 'react-native';
import HideArrow from 'react-native-vector-icons/Entypo';
import Ring from 'react-native-vector-icons/MaterialCommunityIcons';
import Vibration from 'react-native-vector-icons/MaterialIcons';
import Hide from 'react-native-vector-icons/Feather';


const Home2 = () => {
  // State for each card switch
  const [panicMode, setPanicMode] = useState(false);
  const [wrongPatternMode, setWrongPatternMode] = useState(false);
  const [simTheftMode, setSimTheftMode] = useState(false);
  const [offlineLocationMode, setOfflineLocationMode] = useState(false);
  const [socialMediaAppLock, setSocialMediaAppLock] = useState(false);
  const [fakeShutDown, setFakeShutDown] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Mobile Safety Modes</Text>
        </View>

        <View style={styles.card}>
          <View style={styles.mainiconsection}>
            <HideArrow name="mobile" size={40} color={'black'} />

            <Text style={styles.cardTitle}>Mobile Safe Find</Text>
          </View>
          <Text style={styles.cardDescription}>
            Send this message with registered mobile number to track your phone
          </Text>
          <Switch
            value={panicMode}
            onValueChange={() => setPanicMode(!panicMode)}
          />
        </View>

        <View style={styles.card}>
          <View style={styles.mainiconsection}>
            <Ring name="bell-ring" size={40} color={'black'} />

            <Text style={styles.cardTitle}>Mobile Safe Ring On</Text>
          </View>

          <Text style={styles.cardDescription}>
            Send this message with registered number to start a loud ring
          </Text>
          <Switch
            value={wrongPatternMode}
            onValueChange={() => setWrongPatternMode(!wrongPatternMode)}
          />
        </View>

        <View style={styles.card}>
        <View style={styles.mainiconsection}>
            <Ring name="ear-hearing-off" size={40} color={'black'} />

            <Text style={styles.cardTitle}>Mobile Safe Ring Off</Text>
          </View>
          <Text style={styles.cardDescription}>
          Send this message with
 registered number to stop
 a loud ring
          </Text>
          <Switch
            value={simTheftMode}
            onValueChange={() => setSimTheftMode(!simTheftMode)}
          />
        </View>

        <View style={styles.card}>
        <View style={styles.mainiconsection}>
            <Vibration name="vibration" size={40} color={'black'} />

            <Text style={styles.cardTitle}>Mobile Safe Ring</Text>
          </View>
          <Text style={styles.cardDescription}>
          Send this message with
 registered number to set
 phone into ringing mode 
          </Text>
          <Switch
            value={offlineLocationMode}
            onValueChange={() => setOfflineLocationMode(!offlineLocationMode)}
          />
        </View>

        <View style={styles.card}>
        <View style={styles.mainiconsection}>
            <Ring name="newspaper-remove" size={40} color={'black'} />

            <Text style={styles.cardTitle}>Mobile Safe Format</Text>
          </View>
          <Text style={styles.cardDescription}>
          Send this message with
 registered number to
 format the phone
          </Text>
          <Switch
            value={socialMediaAppLock}
            onValueChange={() => setSocialMediaAppLock(!socialMediaAppLock)}
          />
        </View>

        <View style={styles.card}>
        <View style={styles.mainiconsection}>
            <Hide name="eye-off" size={40} color={'black'} />

            <Text style={styles.cardTitle}>Mobile Safe Hide</Text>
          </View>
          <Text style={styles.cardDescription}>
          Send this message with
 registered number to hide
 mobile safe app
          </Text>
          <Switch
            value={fakeShutDown}
            onValueChange={() => setFakeShutDown(!fakeShutDown)}
          />
        </View>



        <View style={styles.card}>
        <View style={styles.mainiconsection}>
            <Vibration name="edgesensor-high" size={40} color={'black'} />

            <Text style={styles.cardTitle}> Motion Sensor</Text>
          </View>
          <Text style={styles.cardDescription}>
          Phone will do a loud sound
 when someone move
 phone.
          </Text>
          <Switch
            value={socialMediaAppLock}
            onValueChange={() => setSocialMediaAppLock(!socialMediaAppLock)}
          />
        </View>

        <View style={styles.card}>
        <View style={styles.mainiconsection}>
            <Vibration name="battery-charging-full" size={40} color={'black'} />

            <Text style={styles.cardTitle}>Charger Alarm</Text>
          </View>
          <Text style={styles.cardDescription}>
          Phone will do a loud sound
 when someone remove
 charger
          </Text>
          <Switch
            value={socialMediaAppLock}
            onValueChange={() => setSocialMediaAppLock(!socialMediaAppLock)}
          />
        </View>

        <View style={styles.card}>
        <View style={styles.mainiconsection}>
            <Vibration name="vibration" size={40} color={'black'} />

            <Text style={styles.cardTitle}>Vibration</Text>
          </View>
          <Text style={styles.cardDescription}>
          Phone will vibrate in Motion
          Sensor and charger alarm.
          </Text>
          <Switch
            value={socialMediaAppLock}
            onValueChange={() => setSocialMediaAppLock(!socialMediaAppLock)}
          />
        </View>


        <View style={styles.card}>
        <View style={styles.mainiconsection}>
            <Hide name="phone-call" size={40} color={'black'} />

            <Text style={styles.cardTitle}> Background Call</Text>
          </View>
          <Text style={styles.cardDescription}>
          Coming Soon
          </Text>
          <Switch
            value={socialMediaAppLock}
            onValueChange={() => setSocialMediaAppLock(!socialMediaAppLock)}
          />
        </View>


        <View style={styles.card}>
        <View style={styles.mainiconsection}>
            <Ring name="usb-port" size={40} color={'black'} />

            <Text style={styles.cardTitle}>USB Security</Text>
          </View>
          <Text style={styles.cardDescription}>
          Coming Soon
          </Text>
          <Switch
            value={socialMediaAppLock}
            onValueChange={() => setSocialMediaAppLock(!socialMediaAppLock)}
          />
        </View>

        <View style={styles.card}>
        <View style={styles.mainiconsection}>
            <Ring name="restart" size={40} color={'black'} />

            <Text style={styles.cardTitle}>Restart Mode</Text>
          </View>
          <Text style={styles.cardDescription}>
          Coming Soon
          </Text>
          <Switch
            value={socialMediaAppLock}
            onValueChange={() => setSocialMediaAppLock(!socialMediaAppLock)}
          />
        </View>

        <View style={styles.card}>
        <View style={styles.mainiconsection}>
            <Ring name="phone-call" size={40} color={'black'} />

            <Text style={styles.cardTitle}> Emergency Call Mode</Text>
          </View>
          <Text style={styles.cardDescription}>
          Coming Soon
          </Text>
          <Switch
            value={socialMediaAppLock}
            onValueChange={() => setSocialMediaAppLock(!socialMediaAppLock)}
          />
        </View>


       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  background: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    width: '100%',
  },
  cardTitle: {
    fontSize: 20,
    // marginTop:3,
    fontWeight: 'bold',
    height: 40,
    marginTop: 6,
    marginBottom: 8,
    marginLeft: 20,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 16,
  },
  mainiconsection: {
    width: '100%',
    height: 42,
    // backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'row',
  },
});

export default Home2;