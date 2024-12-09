import { StyleSheet, Text, View, TouchableOpacity, Alert, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
// Camera Permissions
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Icon from 'react-native-vector-icons/FontAwesome';

const Permission = () => {
    const [cameraStatus, setCameraStatus] = useState('denied');
    const [CallLogStatus, setCallLogStatus] = useState('denied');
    const [contactsStatus, setContactsStatus] = useState('denied');




    //  Camera permission

    // Camera permission check [ye isiliye kiye taake har baar reload par permission check ho aur icon aur color sahi dikhe]
    const checkCameraPermission = () => {
        if (Platform.OS === 'ios') {
            check(PERMISSIONS.IOS.CAMERA).then((result) => {
                setCameraStatus(result === RESULTS.GRANTED ? 'granted' : 'denied');
            });
        } else {
            check(PERMISSIONS.ANDROID.CAMERA).then((result) => {
                setCameraStatus(result === RESULTS.GRANTED ? 'granted' : 'denied');
            });
        }
    };
    const cameraPermission = (permission) => {
        request(permission).then((result) => {
            if (result === RESULTS.GRANTED) {
                setCameraStatus('granted');
            } else if (result === RESULTS.DENIED) {
                setCameraStatus('denied');
            }
        });
    };

    const handleCameraPermission = () => {
        if (Platform.OS === 'ios') {
            cameraPermission(PERMISSIONS.IOS.CAMERA);
        } else {
            cameraPermission(PERMISSIONS.ANDROID.CAMERA);
        }
    };
    //  Camera permission end


    // CallLog permission

    // CallLog permission check [ye isiliye kiye taake har baar reload par permission check ho aur icon aur color sahi dikhe]
    const checkCallLogPermission = () => {
        if (Platform.OS === 'ios') {
            Alert.alert('Not Supported', 'Call Log permission is not supported on iOS.');
        } else {
            check(PERMISSIONS.ANDROID.READ_CALL_LOG).then((result) => {
                setCallLogStatus(result === RESULTS.GRANTED ? 'granted' : 'denied');
            });
        }
    };
    const callLogPermission = (permission) => {
        request(permission).then((result) => {
            if (result === RESULTS.GRANTED) {
                setCallLogStatus('granted');
            } else if (result === RESULTS.DENIED) {
                setCallLogStatus('denied');
            }
        });
    };

    const handleCallLogPermission = () => {
        if (Platform.OS === 'ios') {
            Alert.alert('Not Supported', 'Call Log permission is not supported on iOS.');
        } else {
            callLogPermission(PERMISSIONS.ANDROID.READ_CALL_LOG);
        }
    };
    // CallLog permission end

    // Contact permission
    const checkContactsPermission = () => {
        if (Platform.OS === 'ios') {
            check(PERMISSIONS.IOS.CONTACTS).then((result) => {
                setContactsStatus(result === RESULTS.GRANTED ? 'granted' : 'denied');
            });
        } else {
            check(PERMISSIONS.ANDROID.READ_CONTACTS).then((result) => {
                setContactsStatus(result === RESULTS.GRANTED ? 'granted' : 'denied');
            });
        }
    };
    const handleContactsPermission = () => {
        if (Platform.OS === 'ios') {
            request(PERMISSIONS.IOS.CONTACTS).then((result) => {
                setContactsStatus(result === RESULTS.GRANTED ? 'granted' : 'denied');
            });
        } else {
            request(PERMISSIONS.ANDROID.READ_CONTACTS).then((result) => {
                setContactsStatus(result === RESULTS.GRANTED ? 'granted' : 'denied');
            });
        }
    };
    // Contact permission end


    // Check permissions on component mount
    useEffect(() => {
        checkCameraPermission();
        checkCallLogPermission();
        checkContactsPermission();
    }, []);

    return (
        <View style={styles.container}>

            {/* Camera Permission */}
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleCameraPermission}
            >
                {cameraStatus && (
                    <Icon
                        name={cameraStatus === 'granted' ? 'check-circle' : 'times-circle'}
                        size={20}
                        color={cameraStatus === 'granted' ? 'green' : 'red'}
                        style={{ marginTop: 5 }}
                    />
                )}
                <Text style={styles.logoutButtonText}>Camera </Text>

            </TouchableOpacity>
            {/* Camera Permission End */}

            {/* CallLog Permission */}
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleCallLogPermission}
            >
                {CallLogStatus && (
                    <Icon
                        name={CallLogStatus === 'granted' ? 'check-circle' : 'times-circle'}
                        size={20}
                        color={CallLogStatus === 'granted' ? 'green' : 'red'}
                        style={{ marginTop: 5 }}
                    />
                )}
                <Text style={styles.logoutButtonText}>Call Log</Text>

            </TouchableOpacity>
            {/* CallLog Permission End */}

            {/* Contact */}
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleContactsPermission}
            >
                {contactsStatus && (
                    <Icon
                        name={contactsStatus === 'granted' ? 'check-circle' : 'times-circle'}
                        size={20}
                        color={contactsStatus === 'granted' ? 'green' : 'red'}
                        style={{ marginTop: 5 }}
                    />
                )}
                <Text style={styles.logoutButtonText}>Contacts</Text>
            </TouchableOpacity>

            {/* Contact end*/}
        </View>
    );
};

export default Permission;

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
    },
    logoutButton: {
        paddingVertical: 5,
        paddingHorizontal: 14,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'darkgreen',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: '45%',
    },
    logoutButtonText: {
        color: 'darkgreen',
        fontWeight: 'bold',
        fontSize: 16,
        textTransform: 'uppercase',
    },
});
