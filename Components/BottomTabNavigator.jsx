import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Remote from './TabScreen/Remote';
import DontTouch from './TabScreen/DontTouch';
import WomenChild from './TabScreen/WomenChild';
import { Image, Text, View, StyleSheet } from 'react-native';


const Tab = createBottomTabNavigator();

// Custom Tab Icon Component
const CustomTabIcon = ({ source, label, focused, customStyle, iconStyle }) => (
  <View style={[{ alignItems: 'center', marginTop: 10 }, customStyle]}>
    <Image
      source={source}
      style={[
        { width: 24, height: 24, tintColor: focused ? '#ECD974' : '#fff' },
        iconStyle
      ]}
    />
    <Text style={{ color: focused ? '#ECD974' : '#fff', fontSize: 12, width: '100%' }}>
      {label}
    </Text>
  </View>
);

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
      }}
    >
      {/* =======================HOME=================== */}
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              source={require('../image/Mobile_Safe/HomeBottomNav.png')}
              label="Home"
              focused={focused}
              customStyle={{ marginTop: 20, borderRadius: 10 }}
              iconStyle={{ width: 28, height: 28 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />

      {/* =======================Remote=================== */}
      <Tab.Screen
        name="Remote"
        component={Remote}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              source={require('../image/Mobile_Safe/remoteBottomNav.png')}
              label="Remote"
              focused={focused}
              customStyle={{ marginTop: 20, borderRadius: 10 }}
              iconStyle={{ width: 32, height: 32 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />

      {/* =======================DontTouch=================== */}
      <Tab.Screen
        name="DontTouch"
        component={DontTouch}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              source={require('../image/Mobile_Safe/dONTTOUCHICON.png')}
              label="DontTouch"
              focused={focused}
              customStyle={{ marginTop: 20, borderRadius: 10 }}
              iconStyle={{ width: 32, height: 34 }}
            />
          ),
          tabBarLabel: () => null,
        }}
      />

      {/* =======================WomenChild=================== */}
      <Tab.Screen
        name="WomenChild"
        component={WomenChild}
        options={{
          headerShown:false,
          tabBarIcon: ({ focused }) => (
            <CustomTabIcon
              source={require('../image/Mobile_Safe/WomenBottomNav.png')}
              label="Women&Child"
              focused={focused}
              customStyle={{ marginTop: 20, borderRadius: 10 }}
              iconStyle={{ width: 36, height: 36 }}
            />
          ),
          tabBarLabel: () => null,
         
        }}
        
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    backgroundColor: 'rgba(45, 54, 20, 0.9)',  // Transparent background for the blur effect
    borderTopWidth: 0,
    elevation: 0,
    zIndex: 999,
    height: 71,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    bottom: 0,  // Ensure it's at the bottom of the screen
   
  },
 
});

export default BottomTabNavigator;










// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Home from './Home';
// import Remote from './TabScreen/Remote';
// import DontTouch from './TabScreen/DontTouch';
// import WomenChild from './TabScreen/WomenChild';
// import { Image, Text, View } from 'react-native';

// const Tab = createBottomTabNavigator();

// const BottomTabNavigator = () => {
//   // ===========Custom Tab Icon Component==========
// const CustomTabIcon = ({ source, label, customStyle, iconStyle }) => (
//   <View style={[{ alignItems: 'center', marginTop: 10 }, customStyle]}>
//     <Image source={source} style={[{ width: 24, height: 24 }, iconStyle]} />
//     <Text style={{ color: '#fff', fontSize: 12, width: '100%' }}>{label}</Text>

//   </View>
// );
//   return (
    
//     <Tab.Navigator
//     screenOptions={{
//             headerShown: false,
//             tabBarStyle: {
//               position: 'absolute',
//               backgroundColor: 'rgba(45, 54, 20, 0.9)',
//               borderTopWidth: 0,
//               elevation: 0,
//               zIndex: 999,
//               height: 81,
//               borderTopLeftRadius: 14,
//               borderTopRightRadius: 14,
//             },
//           }}
          
       
//     >
//      {/* =======================HOME=================== */}
//       <Tab.Screen
//             name="Home"
//             component={Home}
//             options={{
//               tabBarIcon: () => (
//                 <CustomTabIcon
//                   source={require('../image/Mobile_Safe/HomeBottomNav.png')}
//                   label="Home"
//                   customStyle={{ marginTop: 20,borderRadius: 10 }}
//                   iconStyle={{ width: 28, height: 28 }} // Home icon size
//                 />
//               ),
//               tabBarLabel: () => null,
//             }}
//           />

//  {/* =======================Remote=================== */}
//  <Tab.Screen
//       name="Remote"
//       component={Remote}
//       options={{
//         tabBarIcon: () => (
//           <CustomTabIcon
//             source={require('../image/Mobile_Safe/remoteBottomNav.png')}
//             label="Remote"
//             customStyle={{ marginTop: 20, borderRadius: 10 }}
//             iconStyle={{ width: 32, height: 32 }} // Remote icon size
//           />
//         ),
//         tabBarLabel: () => null,
//       }}
//     />

//        {/* =======================DontTouch=================== */}
//        <Tab.Screen
//       name="DontTouch"
//       component={DontTouch}
//       options={{
//         tabBarIcon: () => (
//           <CustomTabIcon
//             source={require('../image/Mobile_Safe/dontTouchBottomNav.png')}
//             label="DontTouch"
//             customStyle={{ marginTop: 20, borderRadius: 10 }}
//             iconStyle={{ width: 32, height: 34 }} // DontTouch icon size
//           />
//         ),
//         tabBarLabel: () => null,
//       }}
//     />

//        {/* =======================Women & Child=================== */}
//        <Tab.Screen
//       name="WomenChild"
//       component={WomenChild}
//       options={{
//         tabBarIcon: () => (
//           <CustomTabIcon
//             source={require('../image/Mobile_Safe/WomenBottomNav.png')}
//             label="WomenChild"
//             customStyle={{ marginTop: 20, borderRadius: 10 }}
//             iconStyle={{ width: 36, height: 36 }} // WomenChild icon size
//           />
//         ),
//         tabBarLabel: () => null,
//       }}
//     />

//     </Tab.Navigator>
//   );
// };
// export default BottomTabNavigator




