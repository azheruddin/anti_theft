
// Main
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  PermissionsAndroid,
} from "react-native";
import SendSMS from "react-native-sms";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API_ENDPOINTS from "../../BaseURL/BaseURL";

const SendMessage = () => {
  const [savedNumbers, setSavedNumbers] = useState([]);
  const [message, setMessage] = useState("");

  const [userId, setUserId] = useState(null);
  // Get user details from AsyncStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user details from AsyncStorage
        const userDetailsString = await AsyncStorage.getItem("userDetails");
        console.log("User details from AsyncStorage:", userDetailsString); // Check if data exists
    
        if (userDetailsString) {
          const userDetails = JSON.parse(userDetailsString);
          console.log("Parsed user details:", userDetails); // Check parsed user details
    
          if (userDetails && userDetails.id) {
            console.log("Fetched User ID:", userDetails.id);
            setUserId(userDetails.id); // Set User ID in state
    
            // Fetch contact numbers from the API
            const response = await axios.get(API_ENDPOINTS.FETCHING_CONTACT(userDetails.id));
            console.log("API Response:", response); // Check full API response
    
            // Extract numbers from the API response
            const numbers = response.data.data.map(item => [item.mobile_1, item.mobile_2]).flat();
            console.log("Fetched numbers:", numbers); // Check fetched numbers
    
            if (numbers.length > 0) {
              setSavedNumbers(numbers); // Set numbers if valid
              console.log("Numbers fetched successfully.");
            } else {
              console.log("No numbers found.");
              setSavedNumbers([]); // Reset if no numbers found
            }
          } else {
            console.log("User ID not found in userDetails.");
          }
        } else {
          console.log("No user details found in AsyncStorage.");
        }
      } catch (error) {
        Alert.alert("Error", "Failed to fetch data");
        console.error("Error fetching data:", error); // Check the error in console
      }
    };
    


    fetchData(); // Call the async function
  }, []);

  const sendMessageToNumbers = async () => {
    if (!message) {
      Alert.alert("Error", "Message cannot be empty!");
      return;
    }

    // Request SMS permission (Android only)
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
      {
        title: "SMS Permission",
        message: "This app needs access to send SMS messages",
        buttonPositive: "OK",
      }
    );

    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      Alert.alert("Permission Denied", "SMS permission is required to send messages");
      return;
    }

    // Send SMS to all saved numbers
    savedNumbers.forEach((number) => {
      SendSMS.send(
        {
          body: message,
          recipients: [number],
          successTypes: ["sent", "queued"],
        },
        (completed, cancelled, error) => {
          if (completed) {
            Alert.alert("Success", `Message sent to ${number}`);
          } else if (cancelled) {
            Alert.alert("Cancelled", `Message sending cancelled for ${number}`);
          } else if (error) {
            Alert.alert("Error", `Failed to send message to ${number}`);
          }
        }
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Numbers:</Text>
      {savedNumbers && savedNumbers.length > 0 ? (
        savedNumbers.map((number, index) => (
          <Text key={index} style={styles.number}>
            {number}
          </Text>
        ))
      ) : (
        <Text style={styles.noNumbers}>No saved numbers found</Text>
      )}



      <TextInput
        style={styles.input}
        placeholder="Type your message here"
        multiline
        value={message}
        onChangeText={setMessage}
        placeholderTextColor={"#000"}
      />

      <Button title="Send Message" onPress={sendMessageToNumbers} color="#6200EE" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#000"
  },
  number: {
    fontSize: 16,
    marginBottom: 4,
    color: "#000"
  },
  noNumbers: {
    fontSize: 16,
    color: "red",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCC",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
    backgroundColor: "#FFF",
    color:"#000"
  },
});

export default SendMessage;





// Extra validation

// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   Alert,
//   PermissionsAndroid,
//   Platform,
// } from "react-native";
// import SendSMS from "react-native-sms";
// import axios from "axios";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import API_ENDPOINTS from "../../BaseURL/BaseURL";

// const SendMessage = () => {
//   const [savedNumbers, setSavedNumbers] = useState([]);
//   const [message, setMessage] = useState("");
//   const [userId, setUserId] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const userDetailsString = await AsyncStorage.getItem("userDetails");
//         if (userDetailsString) {
//           const userDetails = JSON.parse(userDetailsString);
//           if (userDetails && userDetails.id) {
//             setUserId(userDetails.id);
//             const response = await axios.get(API_ENDPOINTS.FETCHING_CONTACT(userDetails.id));
//             const numbers = response.data?.numbers || [];
//             if (Array.isArray(numbers)) {
//               setSavedNumbers(numbers);
//             }
//           }
//         }
//       } catch (error) {
//         Alert.alert("Error", "Failed to fetch data");
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const requestSmsPermission = async () => {
//     if (Platform.OS === "android") {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.SEND_SMS,
//         {
//           title: "SMS Permission",
//           message: "This app needs access to send SMS messages",
//           buttonPositive: "OK",
//         }
//       );
//       return granted === PermissionsAndroid.RESULTS.GRANTED;
//     }
//     return true;
//   };

//   const sendMessageToNumbers = async () => {
//     if (!message) {
//       Alert.alert("Error", "Message cannot be empty!");
//       return;
//     }

//     const hasPermission = await requestSmsPermission();
//     if (!hasPermission) {
//       Alert.alert("Permission Denied", "SMS permission is required to send messages");
//       return;
//     }

//     const failedNumbers = [];
//     savedNumbers.forEach((number) => {
//       SendSMS.send(
//         {
//           body: message,
//           recipients: [number],
//           successTypes: ["sent", "queued"],
//         },
//         (completed, cancelled, error) => {
//           if (!completed) {
//             failedNumbers.push(number);
//           }
//         }
//       );
//     });

//     if (failedNumbers.length > 0) {
//       Alert.alert(
//         "Partial Success",
//         `Messages failed for the following numbers: ${failedNumbers.join(", ")}`
//       );
//     } else {
//       Alert.alert("Success", "Message sent to all numbers!");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Saved Numbers:</Text>
//       {loading ? (
//         <Text style={styles.loading}>Loading...</Text>
//       ) : savedNumbers.length > 0 ? (
//         savedNumbers.map((number, index) => (
//           <Text key={index} style={styles.number}>
//             {number}
//           </Text>
//         ))
//       ) : (
//         <Text style={styles.noNumbers}>No numbers found</Text>
//       )}

//       <TextInput
//         style={styles.input}
//         placeholder="Type your message here"
//         multiline
//         value={message}
//         onChangeText={setMessage}
//       />

//       <Button
//         title="Send Message"
//         onPress={sendMessageToNumbers}
//         color="#6200EE"
//         disabled={!message || loading || savedNumbers.length === 0}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#F5F5F5",
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   number: {
//     fontSize: 16,
//     marginBottom: 4,
//   },
//   noNumbers: {
//     fontSize: 16,
//     color: "red",
//   },
//   loading: {
//     fontSize: 16,
//     color: "blue",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#CCC",
//     borderRadius: 4,
//     padding: 8,
//     marginBottom: 16,
//     backgroundColor: "#FFF",
//   },
// });

// export default SendMessage;





