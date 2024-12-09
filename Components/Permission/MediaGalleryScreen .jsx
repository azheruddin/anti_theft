// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, Alert, Platform } from 'react-native';
// import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
// import CameraRoll from '@react-native-community/cameraroll';

// const MediaGalleryScreen = () => {
//     const [media, setMedia] = useState([]);

//     // Check and request permission
//     const checkMediaPermission = async () => {
//         const result = await check(
//             Platform.OS === 'ios'
//                 ? PERMISSIONS.IOS.PHOTO_LIBRARY
//                 : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
//         );
//         if (result === RESULTS.GRANTED) {
//             fetchMedia();
//         } else {
//             requestMediaPermission();
//         }
//     };

//     const requestMediaPermission = async () => {
//         const result = await request(
//             Platform.OS === 'ios'
//                 ? PERMISSIONS.IOS.PHOTO_LIBRARY
//                 : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
//         );
//         if (result === RESULTS.GRANTED) {
//             fetchMedia();
//         } else {
//             Alert.alert('Permission Denied', 'Media permission is required to view photos and videos.');
//         }
//     };

//     // Fetch Media (photos and videos)
//     const fetchMedia = async () => {
//         try {
//             const photos = await CameraRoll.getPhotos({
//                 first: 20, // Number of items to fetch
//                 assetType: 'All', // Fetch both photos and videos
//             });
//             setMedia(photos.edges);
//         } catch (error) {
//             console.error('Error fetching media:', error);
//             Alert.alert('Error', 'Failed to fetch photos and videos.');
//         }
//     };

//     useEffect(() => {
//         checkMediaPermission();
//     }, []);

//     // Render media item
//     const renderMediaItem = ({ item }) => (
//         <Image source={{ uri: item.node.image.uri }} style={styles.mediaItem} />
//     );

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity style={styles.reloadButton} onPress={checkMediaPermission}>
//                 <Text style={styles.reloadButtonText}>Reload Media</Text>
//             </TouchableOpacity>
//             {media.length > 0 ? (
//                 <FlatList
//                     data={media}
//                     keyExtractor={(item, index) => index.toString()}
//                     renderItem={renderMediaItem}
//                     horizontal
//                 />
//             ) : (
//                 <Text style={styles.noMedia}>No Media Available</Text>
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 16,
//         backgroundColor: '#111e11',
//     },
//     reloadButton: {
//         backgroundColor: '#D4AF37',
//         padding: 12,
//         borderRadius: 8,
//         alignItems: 'center',
//         marginBottom: 16,
//     },
//     reloadButtonText: {
//         color: '#fff',
//         fontWeight: 'bold',
//         fontSize: 16,
//     },
//     mediaItem: {
//         width: 100,
//         height: 100,
//         margin: 5,
//         borderRadius: 10,
//     },
//     noMedia: {
//         textAlign: 'center',
//         fontSize: 16,
//         color: '#D4AF37',
//         marginTop: 20,
//     },
// });

// export default MediaGalleryScreen;

import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Alert,
    Platform,
    Image,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; // Import gallery picker
// 

const MediaGalleryScreen = () => {
    const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image

    // Open gallery to select an image
    const openGallery = () => {
        const options = {
            mediaType: 'photo', // Allow only photos
            selectionLimit: 1, // Allow selecting one image
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                Alert.alert('Cancelled', 'No image was selected.');
            } else if (response.errorCode) {
                Alert.alert('Error', response.errorMessage || 'An error occurred.');
            } else if (response.assets && response.assets.length > 0) {
                setSelectedImage(response.assets[0].uri); // Save selected image URI
            }
        });
    };

  

   
    return (
        <View style={styles.container}>
            {/* Button to reload call logs */}
         

            {/* Button to open gallery */}
            <TouchableOpacity style={styles.galleryButton} onPress={openGallery}>
                <Text style={styles.galleryButtonText}>Open Gallery</Text>
            </TouchableOpacity>

            {/* Display selected image */}
            {selectedImage && (
                <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
            )}

            {/* Display call logs */}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#004d00', // Dark green background for the entire screen
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
        color: '#004d00', // Dark green text for the button
        fontWeight: 'bold',
        fontSize: 16,
    },
    galleryButton: {
        backgroundColor: '#004d00', // Dark green button for the gallery
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    galleryButtonText: {
        color: '#D4AF37', // Gold text for the gallery button
        fontWeight: 'bold',
        fontSize: 16,
    },
    selectedImage: {
        width: '100%',
        height: 200,
        marginVertical: 16,
        borderRadius: 10,
    },
    noLogs: {
        textAlign: 'center',
        fontSize: 16,
        color: '#D4AF37', // Gold text for "no logs available"
        marginTop: 20,
    },
});

export default MediaGalleryScreen;
