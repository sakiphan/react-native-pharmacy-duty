import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

const PharmacyItem = ({ item, index, openPhoneCall, openMaps }) => {
  return (
    <Animatable.View animation="fadeIn" delay={index * 100} useNativeDriver>
      <View style={styles.pharmacyItem}>
        <View style={styles.iconContainer}>
          <Image source={require('../../../assets/pharmacy_logo.png')} style={styles.logo} />
        </View>
        <View style={styles.pharmacyInfo}>
          <Text style={styles.pharmacyName}>{item.name}</Text>
          <View style={styles.addressContainer}>
            <Text style={styles.addressText}>{item.address}</Text>
          </View>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => openPhoneCall(item.phone)}>
            <Feather name="phone-call" size={24} color="green" style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.iconSpacing} />
          <TouchableOpacity onPress={() => openMaps(item.geo1, item.geo2)}>
            <Feather name="map-pin" size={24} color="blue" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  pharmacyItem: {
    padding: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  pharmacyInfo: {
    flex: 1,
    paddingRight: 10,
  },
  addressContainer: {
    flex: 1,
    alignItems: 'flex-start', // Align the address text to the left
    justifyContent: 'center', // Push the address text to the bottom of the container
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end', // Align the icons to the bottom of the container
  },
  icon: {
    marginLeft: 10,
  },
  iconSpacing: {
    width: 24,
  },
  pharmacyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  addressText: {
    fontSize: 12,
    marginBottom: 4,
  },
  iconContainer: {
    marginRight: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default PharmacyItem;
