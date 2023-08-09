import React from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/pharmacy_logo.png')} style={styles.logo} />
      <ActivityIndicator size="large" color="#007bff" style={styles.spinner} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120, 
    height: 120,
    marginBottom: 20,
  },
  spinner: {
    marginTop: 20,
  },
});

export default LoadingScreen;
