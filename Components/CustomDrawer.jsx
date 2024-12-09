
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';



// const MENU_ITEMS = [
//     { id: '1', icon: 'eye-off', label: 'Hide Mobile Safe', route: 'HideMobileSafe01' },
//     { id: '2', icon: 'phone-alert', label: 'Emergency Mode', route: 'EmergencyMode' },
//     { id: '3', icon: 'backup-restore', label: 'ContactBackup', route: 'ContactBackup' },
//     { id: '4', icon: 'book-open-variant', label: 'App Guide', route: 'AppGuide' },
//     { id: '5', icon: 'phone', label: 'HelpLine', route: 'HelpLine' },
//     { id: '6', icon: 'information-outline', label: 'About', route: 'About' },
//     { id: '7', icon: 'logout', label: 'Logout', route: 'Login' },
//     // { id: '8', icon: 'information-outline', label: 'Signup', route: 'Register' },
// ];

const MENU_ITEMS = [
    { id: '1', image: require('../image/Mobile_Safe/menu1.png'), label: 'Hide Mobile Safe', route: 'HideMobileSafe01' },
    { id: '2', image: require('../image/Mobile_Safe/EmergencyModeMenu2.png'), label: 'Emergency Mode', route: 'EmergencyMode' },
    { id: '3', image: require('../image/Mobile_Safe/ContactbackupMenu3.png'), label: 'ContactBackup', route: 'ContactBackup' },
    { id: '4', image: require('../image/Mobile_Safe/AppguideMenu4.png'), label: 'App Guide', route: 'AppGuide' },
    { id: '5', image: require('../image/Mobile_Safe/AppGuideMenu5.png'), label: 'HelpLine', route: 'HelpLine' },
    { id: '6', image: require('../image/Mobile_Safe/AboutMenu6.png'), label: 'About', route: 'About' },
    { id: '8', image: require('../image/Mobile_Safe/LogoutMenu7.png'), label: 'Register', route: 'SignInRegister' },
    
];


const CustomDrawer = ({ navigation }) => {

    const [userDetails, setUserDetails] = useState({ name: '', phone: '' });

    // AsyncStorage se data fetch karna
    const fetchUserDetails = async () => {
        try {
            const userData = await AsyncStorage.getItem('userDetails');
            if (userData) {
                const { name, phone } = JSON.parse(userData); // JSON parse karke destructure
                setUserDetails({ name, phone }); // State update
                // console.log('Name:', name);
                // console.log('Phone:', phone);
            } else {
                console.log('No user data found!');
            }
        } catch (error) {
            console.error('Error fetching user details:', error);
        }
    };

    // Component load hone par data fetch karna
    useEffect(() => {
        fetchUserDetails();
    }, []);

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Image
                    source={require('../image/Mobile_Safe/mobilesafelogocopy.png')}
                    style={styles.profileImage}
                />
                {/* <Text style={styles.headerText}>Mobile Safe</Text> */}
                <Image
                    source={require('../image/Mobile_Safe/mobilesafelogo1.png')}
                    style={{ width: 190, height: 52, marginLeft: -25 }}
                />
            </View>

            {/* User Info */}
            <View style={styles.listContainer}>

                {/* Name Section */}
                <View style={styles.listContainerTop}>

                    <View>
                        <Image source={require('../image/Mobile_Safe/Usericon2.png')}
                            style={{ height: 70, width: 70, marginLeft: 15, marginRight: 10 }}
                        />
                    </View>

                    <View style={styles.UserInformationContainer}>
                        <Text style={styles.name}>
                            {userDetails.name || "Name not available"}
                        </Text>
                        <Text style={styles.phone}>
                            +91 {userDetails.phone || "Phone not available"}
                        </Text>
                        <TouchableOpacity style={styles.NameIcon}>
                            <Image source={require('../image/Mobile_Safe/Edit3.png')}
                                style={{ width: 21, height: 21 }}
                            />
                        </TouchableOpacity>
                    </View>

                </View>




                {/* Menu Items List */}
                <FlatList
                    data={MENU_ITEMS}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.menu}
                    renderItem={({ item }) => (
                        <MenuItem item={item} navigation={navigation} />
                    )}
                />
            </View>

        </View>
    );
};

const MenuItem = ({ item, navigation }) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
        // <TouchableOpacity
        //     style={[styles.menuItem, isPressed && styles.menuItemPressed]}

        //     onPress={() => navigation.navigate(item.route)}

        //     onPressIn={() => setIsPressed(true)}
        //     onPressOut={() => setIsPressed(false)}
        // >
        //     <Icon name={item.icon} size={24} color="#fff" />
        //     <Text style={styles.menuText}>{item.label}</Text>
        // </TouchableOpacity>

        <TouchableOpacity
            style={[styles.menuItem, isPressed && styles.menuItemPressed]}
            onPress={() => navigation.navigate(item.route)}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
        >
            <Image source={item.image} style={styles.menuImage} />
            <Text style={styles.menuText}>{item.label}</Text>
        </TouchableOpacity>

    );
};

export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    header: {

        alignItems: 'center',
        paddingVertical: 1,
        // borderBottomWidth: 1,
        // borderColor: '#ECD974',
        flexDirection: 'row',
        paddingBottom: 7,
    },
    profileImage: {
        width: 110,
        height: 110,
        marginLeft: -15
    },
    // headerText: {
    //     fontSize: 22,
    //     fontWeight: '700',
    //     color: '#ECD974',
    //     marginLeft: 7,
    // },
    listContainer: {

        height: '100%',
    },
    listContainerTop: {
        width: '100%',
        paddingBottom: 20,
        paddingTop: 25,
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#ECD974',
    },
    UserInformationContainer:{
        width:200
    },
    name: {
        fontSize: 20,
        color: '#fff',
        marginRight:17
    },
    phone: {
        marginTop: 8,
        fontSize: 12,
        color: '#fff',
    },
    NameIcon: {
        position: 'absolute',
        top: 40,
        right: 40,
    },
    menu: {
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        padding: 12,
        marginVertical: 5,

    },
    menuItemPressed: {
        backgroundColor: '#483D8B',
    },
    menuText: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 20,
    },
    menuImage: {
        width: 24,
        height: 24,
        marginRight: 10,
        tintColor: '#fff', // Optional: apply tint color if needed
    },



});
