import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';
import CustomText from '../custom-text';
import styles from './styles';
import globalStyles from '../../constants/styles';

export default function Item() {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={[globalStyles.row, styles.itemHeader]}>
        <Icon name="ios-archive" type="ionicon" style={styles.itemIcon} />
        <CustomText label="Item 1" style={styles.label} />
      </View>
      <View style={[globalStyles.row]} />
    </TouchableOpacity>
  );
}
