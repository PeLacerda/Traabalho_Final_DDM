import React from 'react';
import { StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const data = [
  { label: 'USD', value: 'USD' },
  { label: 'EUR', value: 'EUR' },
  { label: 'GBP', value: 'GBP' },
  { label: 'JPY', value: 'JPY' },
  { label: 'AUD', value: 'AUD' },
  { label: 'CAD', value: 'CAD' },
];

const DropdownComponent = ({ moeda, setMoeda }) => {
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Selecione a moeda"
      containerStyle={{ backgroundColor: '#1A0D2E' }}
      itemTextStyle={{ color: '#FFFFFF' }}
      activeColor="#9C27B0"
      searchPlaceholder="Buscar moeda..."
      value={moeda}
      onChange={item => {
        setMoeda(item.value);
      }}
      renderLeftIcon={() => (
        <AntDesign style={styles.icon} color="#FFFFFF" name="Safety" size={20} />
      )}
    />
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderBottomColor: '#FFFFFF',
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#9E9E9E',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color: '#FFFFFF',
    backgroundColor: '#1A0D2E',
  },
});