import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { getBrand, getBundleId, getApplicationName, getDeviceId } from 'react-native-device-info';

const IMEINumberScreen = () => {
    const [uniqueId, setUniqueId] = useState('Fetching...');
    const MobileBrand = getBrand()
    const ProjectName = getBundleId()
    const AppName = getApplicationName()
    const AppID = getDeviceId()
 

    const fetchUniqueId = async () => {
        try {
            const id = await DeviceInfo.getUniqueId();
            setUniqueId(id);
        } catch (error) {
            console.error('Error fetching unique ID:', error);
            Alert.alert('Error', 'Failed to fetch unique ID.');
        }
    };

    useEffect(() => {
        fetchUniqueId();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Device Unique Identifier</Text>
            <Text style={styles.idText}>{uniqueId}</Text>
            <TouchableOpacity style={styles.button} onPress={fetchUniqueId}>
                <Text style={styles.buttonText}>Refresh Identifier</Text>
            </TouchableOpacity>
            <Text>{MobileBrand}</Text>
            <Text>{ProjectName}</Text>
            <Text>{AppName}</Text>
            <Text>{AppID}</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    idText: {
        fontSize: 18,
        color: '#555',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff',
        padding: 12,
        borderRadius: 8,
        marginBottom:20
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default IMEINumberScreen;
