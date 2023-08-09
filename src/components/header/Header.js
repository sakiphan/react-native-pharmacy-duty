
import React from 'react';
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.headerContainer}>
      <StatusBar backgroundColor="#007bff" barStyle="light-content" />
      <View style={styles.headerContent}>
        <Text style={styles.headerText}>Ankara Nöbetçi Eczaneler</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: Platform.select({
      ios: 40,
      android: StatusBar.currentHeight,
      default: 0,
    }),
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  headerContent: {
    paddingHorizontal: 20,
  },
});

export default Header;
