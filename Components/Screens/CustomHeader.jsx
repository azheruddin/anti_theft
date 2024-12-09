// CustomHeader.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomHeader = ({ navigation, title }) => {
  return (
    <View style={styles.customHeader}>
      <View style={styles.headerLeftSection}>
        <Text onPress={() => navigation.openDrawer()}>
          <FontAwesome name="align-right" size={35} color="#ECD974" />
        </Text>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customHeader: {
    height: 70,
    backgroundColor: '#111e11',
    borderBottomWidth: 1,
    borderBottomColor: '#ECD974',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  headerTitle: {
    fontSize: 24,
    color: '#ECD974',
    marginLeft: 12,
    fontWeight: '500',
  },
  headerLeftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
});

export default CustomHeader;
