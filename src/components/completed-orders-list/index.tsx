import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-easy-icon';
import CustomText from '../custom-text';
import globalStyles from '../../constants/styles';

import styles from './styles';
import ActiveOrder from '../active-order';

export default function CompletedOrders(props: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          globalStyles.row,
          globalStyles.center,
          globalStyles.defaultShadow,
          styles.topAction,
        ]}
        onPress={props.onClose}>
        <Icon name="ios-arrow-dropdown" type="ionicon" style={globalStyles.subHeadingIcon} />
        <CustomText label="Compoleted Orders" style={globalStyles.headlineText} />
      </TouchableOpacity>
      <ScrollView style={styles.content}>
        <ActiveOrder />
        <ActiveOrder />
      </ScrollView>
    </View>
  );
}
