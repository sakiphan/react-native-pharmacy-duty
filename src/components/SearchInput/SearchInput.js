import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchInput = ({ searchQuery, setSearchQuery, pharmaciesData, setFilteredPharmacies }) => {
  const handleSearch = (text) => {
    setSearchQuery(text);

    // JSON verilerinde arama yap
    const filteredPharmacies = pharmaciesData.filter((pharmacy) =>
      pharmacy.address.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredPharmacies(filteredPharmacies);
  };

  return (
    <TextInput
      style={styles.searchInput}
      placeholder="Eczane Ara"
      onChangeText={handleSearch}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
  searchInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 10,
    fontSize: 16,
    width: 300,
  },
});

export default SearchInput;
