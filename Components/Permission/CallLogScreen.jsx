import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import CallLogs from 'react-native-call-log';

const CallLogScreen = () => {
    const [callLogs, setCallLogs] = useState([]);

    // Check and request permission
    const checkCallLogPermission = async () => {
        if (Platform.OS === 'ios') {
            Alert.alert('Not Supported', 'Call Log permission is not supported on iOS.');
        } else {
            const result = await check(PERMISSIONS.ANDROID.READ_CALL_LOG);
            if (result === RESULTS.GRANTED) {
                fetchCallLogs();
            } else {
                requestCallLogPermission();
            }
        }
    };

    const requestCallLogPermission = async () => {
        const result = await request(PERMISSIONS.ANDROID.READ_CALL_LOG);
        if (result === RESULTS.GRANTED) {
            fetchCallLogs();
        } else {
            Alert.alert('Permission Denied', 'Call Log permission is required to view call logs.');
        }
    };

    // Fetch Call Logs
    const fetchCallLogs = async () => {
        try {
            const logs = await CallLogs.load(100); // Fetch last 100 call logs
            setCallLogs(logs);
        } catch (error) {
            console.error('Error fetching call logs:', error);
            Alert.alert('Error', 'Failed to fetch call logs.');
        }
    };

    useEffect(() => {
        checkCallLogPermission();
    }, []);

    // Render Call Logs
    const renderCallLogItem = ({ item }) => (
        <View style={styles.logItem}>
            <Text style={styles.logTitle}>Call Log</Text>
            <Text style={styles.text}>Name: {item.name || 'Unknown'}</Text>
            <Text style={styles.text}>Number: {item.phoneNumber}</Text>
            <Text style={styles.text}>
                Type: {item.type === '1' ? 'Incoming' : item.type === '2' ? 'Outgoing' : 'Missed'}
            </Text>
            <Text style={styles.text}>Date: {new Date(parseInt(item.timestamp)).toLocaleString()}</Text>
            <Text style={styles.text}>Duration: {item.duration} seconds</Text>
           
        </View>
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.reloadButton} onPress={fetchCallLogs}>
                <Text style={styles.reloadButtonText}>Reload Call Logs</Text>
            </TouchableOpacity>
            {callLogs.length > 0 ? (
                <FlatList
                    data={callLogs}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderCallLogItem}
                />
            ) : (
                <Text style={styles.noLogs}>No Call Logs Available</Text>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#111e11', // Dark green background for the entire screen
    },
    logItem: {
        padding: 16,
        marginVertical: 8,
        backgroundColor: '#ffffff', // White background for the card
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        borderLeftWidth: 5,
        borderLeftColor: '#D4AF37', // Gold border accent
    },
    logTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#D4AF37', // Gold text for the title
    },
    text: {
        fontSize: 14,
        color: '#004d00', // Dark green text for details
        marginBottom: 4,
    },
    reloadButton: {
        backgroundColor: '#D4AF37', // Gold button background
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    reloadButtonText: {
        color: '#fff', // Dark green text for the button
        fontWeight: 'bold',
        fontSize: 16,
    },
    editButton: {
        backgroundColor: '#004d00', // Dark green button for editing
        marginTop: 10,
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    editButtonText: {
        color: '#D4AF37', // Gold text for the edit button
        fontWeight: 'bold',
    },
    noLogs: {
        textAlign: 'center',
        fontSize: 16,
        color: '#D4AF37', // Gold text for "no logs available"
        marginTop: 20,
    },
});



export default CallLogScreen;