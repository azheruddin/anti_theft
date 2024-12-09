import React from 'react';
import { Image, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';
import FastImage from 'react-native-fast-image';

const Splash = () => {
  return (
    <View  style={styles.container}>
       {/* <FastImage
         source={require('../image/GIF/Mobile_safe_intro1.gif')}
         style={styles.image}
         resizeMode={FastImage.resizeMode.cover}
      /> */}

 <Video
        source={require('../image/Videos/Mobilesafeintro.mp4')} // Replace with your video URL or local file
        style={styles.video}
        resizeMode="cover" // You can use 'cover' if you want the video to fill the screen
        controls={false} // Hides all controls
        repeat // Set to true if you want the video to loop
      />
{/* 
      <Image
      source={require('../image/GIF/Mobile_safe_intro1.gif')} 
      /> */}
    </View> 
  );
};

const styles = StyleSheet.create({
  
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Splash;
