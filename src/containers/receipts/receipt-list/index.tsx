import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';

import {CustomText, Header} from '../../../components';
import styles from './styles';
import globalStyles from '../../../constants/styles';
import NavigationService from '../../../lib/NavigationService';

export default function ReceiptList() {
  const leftComponent = (
    <TouchableOpacity
      style={globalStyles.iconButton}
      onPress={() => NavigationService.toggleDrawer()}>
      <Icon name="ios-menu" type="ionicon" style={globalStyles.iconButtonLabel} />
    </TouchableOpacity>
  );
  const rightComponent = (
    <TouchableOpacity style={globalStyles.iconButton}>
      <Icon name="ios-search" type="ionicon" style={globalStyles.iconButtonLabel} />
    </TouchableOpacity>
  );

  const receipt = (name: string) => (
    <TouchableOpacity style={styles.receipt}>
      <View style={[globalStyles.row, styles.header]}>
        <Icon
          name="ios-archive"
          type="ionicon"
          style={[globalStyles.iconButtonLabel, globalStyles.primaryText, globalStyles.marginRight]}
        />
        <CustomText label={name} style={globalStyles.subHeadingText} />
      </View>
      <View>
        <CustomText
          label="On Aug 3 20020"
          style={[globalStyles.caption, globalStyles.alignEndHorizontal]}
        />
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header leftComponent={leftComponent} rightComponent={rightComponent} title="Receipts" />
      <View style={styles.content}>
        {receipt('Invoice - 1')}
        {receipt('Invoice - 2')}
        {receipt('Invoice - 3')}
      </View>
    </View>
  );
}
