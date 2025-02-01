// import React, { useState, useEffect } from 'react';
// import {
//     View,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     StyleSheet,
//     Alert,
//     AppState,
//     Platform,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AppSecond from './AppSecond';

// const App = () => {
//     const [isLocked, setIsLocked] = useState(true);
//     const [isPasswordSet, setIsPasswordSet] = useState(false);
//     const [password, setPassword] = useState('');
//     const [storedPassword, setStoredPassword] = useState(null);
//     const [isInitializing, setIsInitializing] = useState(true); // AsyncStorage initialization check

//     useEffect(() => {
//         const checkPassword = async () => {
//             try {
//                 const savedPassword = await AsyncStorage.getItem('appPassword');
//                 if (savedPassword) {
//                     setIsPasswordSet(true);
//                     setStoredPassword(savedPassword);
//                 } else {
//                     setIsPasswordSet(false);
//                 }
//             } catch (error) {
//                 console.error('Error checking password:', error);
//             } finally {
//                 setIsInitializing(false); // Initialization complete
//             }
//         };

//         checkPassword();
//     }, []);

//     useEffect(() => {
//         const handleAppFocus = (nextAppState) => {
//             if (nextAppState === 'active' && !isInitializing) {
//                 setIsLocked(true);
//             }
//         };

//         const subscription = AppState.addEventListener('change', handleAppFocus);

//         return () => {
//             subscription.remove();
//         };
//     }, [isInitializing]);

//     const handleSetPassword = async () => {
//         if (password.length < 4) {
//             Alert.alert('Error', 'Password must be at least 4 characters long.');
//             return;
//         }
//         try {
//             await AsyncStorage.setItem('appPassword', password);
//             setStoredPassword(password);
//             setIsPasswordSet(true);
//             setPassword('');
//             Alert.alert('Success', 'Password has been set.');
//         } catch (error) {
//             Alert.alert('Error', 'Failed to save password. Please try again.');
//         }
//     };

//     const handleUnlock = () => {
//         if (password === storedPassword) {
//             setIsLocked(false);
//             setPassword('');
//         } else {
//             Alert.alert('Incorrect Password', 'The password you entered is incorrect.');
//         }
//     };

//     if (isInitializing) {
//         return <View style={styles.container}><Text>Loading...</Text></View>;
//     }

//     // password show hide
//     const [passwordww, setPasswordww] = useState(""); // Password text
//     const [showPassword, setShowPassword] = useState(false); // Visibility toggle

//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     };

//     const handleUnlockww = () => {
//         // Unlock logic here
//         console.log("Password entered:", password);
//     };


//     return (
//         <View style={styles.container}>
//             {isPasswordSet ? (
//                 isLocked ? (
//                     // <View style={styles.lockScreen}>
//                     //     <Text style={styles.lockText}>Enter Password to Unlock</Text>
//                     //     <TextInput
//                     //         style={styles.input}
//                     //         placeholder="Enter Password"
//                     //         secureTextEntry
//                     //         value={password}
//                     //         onChangeText={setPassword}
//                     //     />
//                     //     <TouchableOpacity style={styles.unlockButton} onPress={handleUnlock}>
//                     //         <Text style={styles.unlockButtonText}>Unlock</Text>
//                     //     </TouchableOpacity>
//                     // </View>

//                     <View style={styles.lockScreen}>
//                         <Text style={styles.lockText}>🔒 Enter Password to Unlock</Text>
//                         <View style={styles.inputContainer}>
//                             <TextInput
//                                 style={styles.input}
//                                 placeholder="Enter Password"
//                                 placeholderTextColor="#aaa"
//                                 secureTextEntry={!showPassword} // Toggle secure text
//                                 value={password}
//                                 onChangeText={setPasswordww}
//                             />
//                             <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
//                                 <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁️"}</Text>
//                                 {/* Toggling icon based on state */}
//                             </TouchableOpacity>
//                         </View>
//                         <TouchableOpacity style={styles.unlockButton} onPress={handleUnlockww}>
//                             <Text style={styles.unlockButtonText}>🔓 Unlock</Text>
//                         </TouchableOpacity>
//                     </View>
//                 ) : (
//                     <AppSecond />
//                 )
//             ) : (
//                 <View style={styles.lockScreen}>
//                     <Text style={styles.lockText}>Set a Password</Text>
//                     <TextInput
//                         style={styles.input}
//                         placeholder="Enter Password"
//                         secureTextEntry
//                         value={password}
//                         onChangeText={setPassword}
//                     />
//                     <TouchableOpacity style={styles.unlockButton} onPress={handleSetPassword}>
//                         <Text style={styles.unlockButtonText}>Set Password</Text>
//                     </TouchableOpacity>
//                 </View>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#004d00',
//         justifyContent: 'center',
//     },
//     // lockScreen: {
//     //     alignItems: 'center',
//     //     justifyContent: 'center',
//     //     padding: 16,
//     // },
//     // lockText: {
//     //     fontSize: 20,
//     //     fontWeight: 'bold',
//     //     marginBottom: 20,
//     //     color: '#D4AF37',
//     // },
//     // input: {
//     //     borderWidth: 1,
//     //     borderColor: '#D4AF37',
//     //     borderRadius: 8,
//     //     width: '80%',
//     //     padding: 12,
//     //     marginBottom: 20,
//     //     textAlign: 'center',
//     //     backgroundColor: 'black',
//     //     color: 'white',
//     // },
//     // unlockButton: {
//     //     backgroundColor: '#D4AF37',
//     //     paddingVertical: 10,
//     //     paddingHorizontal: 30,
//     //     borderRadius: 8,
//     // },
//     // unlockButtonText: {
//     //     color: '#004d00',
//     //     fontSize: 16,
//     //     fontWeight: 'bold',
//     // },

//     lockScreen: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "linear-gradient(to bottom, #595BBF, #333699)", // Custom gradient
//         padding: 20,
//     },
//     lockText: {
//         fontSize: 24,
//         fontWeight: "700",
//         marginBottom: 30,
//         color: "white",
//         textShadowColor: "rgba(0, 0, 0, 0.3)",
//         textShadowOffset: { width: 2, height: 2 },
//         textShadowRadius: 4,
//     },
//     inputContainer: {
//         flexDirection: "row",
//         alignItems: "center",
//         backgroundColor: "#fff",
//         borderRadius: 50,
//         paddingHorizontal: 15,
//         elevation: 8,
//         marginBottom: 20,
//     },
//     input: {
//         flex: 1,
//         fontSize: 16,
//         padding: 10,
//         borderRadius: 50,
//         color: "#595BBF",
//     },
//     eyeButton: {
//         padding: 5,
//     },
//     eyeIcon: {
//         fontSize: 20,
//         color: "#595BBF",
//     },
//     unlockButton: {
//         width: "80%",
//         backgroundColor: "#FFA726",
//         paddingVertical: 15,
//         borderRadius: 30,
//         alignItems: "center",
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 10 },
//         shadowOpacity: 0.25,
//         shadowRadius: 5,
//         elevation: 8,
//     },
//     unlockButtonText: {
//         fontSize: 18,
//         fontWeight: "600",
//         color: "white",
//         letterSpacing: 1,
//     },


// });

// export default App;

import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
    AppState,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AppNavigator from "./Components/AppNavigator";

const App = () => {
    const [isLocked, setIsLocked] = useState(true);
    const [isPasswordSet, setIsPasswordSet] = useState(false);
    const [password, setPassword] = useState("");
    const [storedPassword, setStoredPassword] = useState(null);
    const [isInitializing, setIsInitializing] = useState(true);

    // Password input visibility
    const [showPassword, setShowPassword] = useState(false);

    // AsyncStorage initialization
    useEffect(() => {
        const checkPassword = async () => {
            try {
                const savedPassword = await AsyncStorage.getItem("appPassword");
                if (savedPassword) {
                    setIsPasswordSet(true);
                    setStoredPassword(savedPassword);
                } else {
                    setIsPasswordSet(false);
                }
            } catch (error) {
                console.error("Error checking password:", error);
            } finally {
                setIsInitializing(false);
            }
        };
        checkPassword();
    }, []);

    // Handle app focus
    useEffect(() => {
        const handleAppFocus = (nextAppState) => {
            if (nextAppState === "active" && !isInitializing) {
                setIsLocked(true);
            }
        };

        const subscription = AppState.addEventListener("change", handleAppFocus);

        return () => {
            subscription.remove();
        };
    }, [isInitializing]);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const handleSetPassword = async () => {
        if (password.length < 4) {
            Alert.alert("Error", "Password must be at least 4 characters long.");
            return;
        }
        try {
            await AsyncStorage.setItem("appPassword", password);
            setStoredPassword(password);
            setIsPasswordSet(true);
            setPassword("");
            Alert.alert("Success", "Password has been set.");
        } catch (error) {
            Alert.alert("Error", "Failed to save password. Please try again.");
        }
    };

    const handleUnlock = () => {
        if (password === storedPassword) {
            setIsLocked(false);
            setPassword("");
        } else {
            Alert.alert("Incorrect Password", "The password you entered is incorrect.");
        }
    };

    if (isInitializing) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
             <AppNavigator />
            {/* {isPasswordSet ? (
                isLocked ? (
                    <View style={styles.lockScreen}>
                        <Text style={styles.lockText}>🔒 Enter Password to Unlock</Text>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Enter Password"
                                placeholderTextColor="#aaa"
                                secureTextEntry={!showPassword}
                                value={password}
                                onChangeText={setPassword}
                            />
                            <TouchableOpacity style={styles.eyeButton} onPress={togglePasswordVisibility}>
                                <Text style={styles.eyeIcon}>{showPassword ? "🙈" : "👁️"}</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.unlockButton} onPress={handleUnlock}>
                            <Text style={styles.unlockButtonText}> Unlock</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <AppSecond />
                )
            ) : (
                <View style={styles.lockScreen}>
                    <Text style={styles.lockText}>Set a Password</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Password"
                        placeholderTextColor="#000"
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity style={styles.unlockButton} onPress={handleSetPassword}>
                        <Text style={styles.unlockButtonText}>Set Password</Text>
                    </TouchableOpacity>
                </View>
            )} */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#004d00",
        justifyContent: "center",
    },
    lockScreen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#111e11",
        padding: 20,
    },
    lockText: {
        fontSize: 24,
        fontWeight: "700",
        marginBottom: 30,
        color: "#fff",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 20,
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    input: {
        flex: 1,
        fontSize: 16,
        color: "#000",
    },
    eyeButton: {
        padding: 5,
    },
    eyeIcon: {
        fontSize: 20,
        color: "#595BBF",
    },
    unlockButton: {
        backgroundColor: "#ECD974",
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: "center",
        width: "50%"
    },
    unlockButtonText: {
        fontSize: 18,
        color: "#000",
    },
});

export default App;

