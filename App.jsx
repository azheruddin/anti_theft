import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from './Components/Login';
import SignInRegister from './Components/Register';
import AppNavigator from './Components/AppNavigator';
import Splash from './Components/Splash';
import Fitness from './Components/Fitness/Fitness';
import DailyWorkout2 from './Components/Fitness/DailyWorkout2';
import GenderSelection from './Components/Fitness/GenderSelection';
import AddEmergencyContact from './Components/AddEmergencyContact';

const Stack = createNativeStackNavigator();

function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(null); 

  useEffect(() => {
    // const checkUserLogin = async () => {
    //   try {
    //     const userId = await AsyncStorage.getItem('userId');
    //     setIsLoggedIn(!!userId); // userId ho to true, warna false
    //   } catch (error) {
    //     console.error('Error checking user login status:', error);
    //     setIsLoggedIn(false); // Default to logged out
    //   }
    // };

    const timer = setTimeout(() => {
      setSplashVisible(false);
      // checkUserLogin();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  
  



  // Ensure navigation based on `isLoggedIn`
  if (isSplashVisible) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignInRegister" component={SignInRegister} options={{ headerShown: false }} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} options={{ headerShown: false }} />

        {/* Fitness */}
        <Stack.Screen name="Fitness" component={Fitness} options={{ headerShown: false }} />
        <Stack.Screen name="DailyWorkout2" component={DailyWorkout2} options={{ headerShown: false }} />
        <Stack.Screen name="GenderSelection" component={GenderSelection} options={{ headerShown: false }} />

        {/* AddEmergencyContact */}
        <Stack.Screen name="AddEmergencyContact" component={AddEmergencyContact} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
