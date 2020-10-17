import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';
import CustomText from '../custom-text';
import styles from './styles';
import globalStyles from '../../constants/styles';

export default function ActiveOrder(props: any) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.header}>
        <View style={[globalStyles.row, globalStyles.horizontalSpaceBetween, styles.padding10]}>
          <View style={[globalStyles.row]}>
            <Icon name="ios-archive" type="ionicon" style={styles.mainIcon} />
            <CustomText
              label="OR-1234"
              style={{...globalStyles.subHeadingIcon, ...styles.blackText}}
            />
          </View>
          <View style={globalStyles.center}>
            <Icon name="ios-arrow-dropdown-circle" type="ionicon" style={styles.green} />
            <CustomText label="Incomming" style={[styles.green, styles.subIcon]} />
          </View>
        </View>
        <View style={[globalStyles.row, styles.metadata]}>
          <Icon
            name="ios-checkmark-circle"
            type="ionicon"
            style={[globalStyles.caption, styles.subIcon, styles.metadataIcon]}
          />
          <CustomText label="Total Items : 1" style={[globalStyles.caption]} />
        </View>
      </View>
      <View style={[globalStyles.row, globalStyles.horizontalSpaceBetween, styles.metadata]}>
        <CustomText label="waiting" style={{...globalStyles.caption, ...styles.bold}} />
        <CustomText label="On Aug 3 2020" style={{...globalStyles.caption}} />
      </View>
    </TouchableOpacity>
  );
}
