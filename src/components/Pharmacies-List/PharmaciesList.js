import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Linking,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import pharmaciesData from '../../pharmaciesData.json';
import Header from '../header/Header';
import PharmacyItem from '../PharmacyItem/PharmacyItem';
import SearchInput from '../SearchInput/SearchInput';

const PharmaciesList = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [currentDate, setCurrentDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPharmacies, setFilteredPharmacies] = useState([]);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setCurrentDate(formattedDate);

    const fetchJsonData = () => {
      const formattedPharmaciesData = pharmaciesData.map((pharmacy) => {
        const phoneNumber = pharmacy.phoneNumber || '';
        const geo1 = parseFloat(pharmacy.geo1); // parseFloat ile stringden sayıya dönüştür
        const geo2 = parseFloat(pharmacy.geo2); // parseFloat ile stringden sayıya dönüştür
        return {
          ...pharmacy,
          phoneNumber: phoneNumber.replace(/"/g, '').replace(/-/g, ''),
          geo1,
          geo2,
        };
      });

      setPharmacies(formattedPharmaciesData);
      setFilteredPharmacies(formattedPharmaciesData); // Başlangıçta tüm eczaneleri filtrelenmiş olarak ayarla
    };

    fetchJsonData();
  }, []);

  const openPhoneCall = (phoneNumber) => {
    if (phoneNumber) {
      const formattedPhoneNumber = phoneNumber.replace(/-/g, '');
      Linking.openURL(`tel:${formattedPhoneNumber}`).catch((error) => {
        console.error('Arama hatası:', error);
      });
    }
  };

  const openMaps = (latitude, longitude) => {
    const mapUrl = `http://maps.google.com/?q=${latitude},${longitude}`;
    Linking.openURL(mapUrl).catch((error) => {
      console.error('Google Haritalar açma hatası:', error);
    });
  };

  const renderItem = ({ item, index }) => (
    <PharmacyItem
      item={item}
      index={index}
      openMaps={() => openMaps(item.geo1, item.geo2)}
      openPhoneCall={() => openPhoneCall(item.phoneNumber)}
    />
  );

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View>
          <View style={styles.headerContainer}>
            <Header />
            <SearchInput
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              pharmaciesData={pharmacies} 
              setFilteredPharmacies={setFilteredPharmacies} 
            />
          </View>
          <Text style={styles.dateText}>Tarih: {currentDate}</Text>
        </View>
      </TouchableWithoutFeedback>
      <FlatList
        data={filteredPharmacies}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  dateText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
  },
});

export default PharmaciesList;
