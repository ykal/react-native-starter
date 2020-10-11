import React from 'react';
import {View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import CustomText from '../custom-text';
import styles from './styles';

interface SelectInputProps {
  label: string;
  items: {
    label: any;
    value: any;
    icon?: () => JSX.Element;
    disabled?: boolean;
    selected?: boolean;
  }[];
  onSelect?: any;
  selectedValue?: string | number;
}

export default function SelectInput(props: SelectInputProps) {
  const {label, items, onSelect, selectedValue, ...otherProps} = props;

  return (
    <View style={styles.container}>
      <CustomText label={label} style={styles.label} />
      <DropDownPicker
        items={items}
        defaultValue={selectedValue}
        onChangeItem={onSelect}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        itemStyle={styles.item}
      />
    </View>
  );
}
