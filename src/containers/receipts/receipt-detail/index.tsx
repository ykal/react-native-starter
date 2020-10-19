import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';

import NavigationService from '../../../lib/NavigationService';
import {CustomButton, CustomText, Header} from '../../../components';
import styles from './styles';
import globalStyles from '../../../constants/styles';

export default function ReceiptDetail() {
  const leftComponent = (
    <TouchableOpacity style={globalStyles.iconButton} onPress={() => NavigationService.goback()}>
      <Icon name="ios-arrow-back" type="ionicon" style={globalStyles.iconButtonLabel} />
    </TouchableOpacity>
  );

  const metadata = (value1: string, value2: string) => (
    <View style={[globalStyles.row]}>
      <Icon
        name="circle"
        type="font-awesome"
        style={[globalStyles.marginRight, globalStyles.primaryText]}
      />
      <CustomText label={value1} style={globalStyles.marginRight} />
      {value2 ? <CustomText label={`(${value2})`} style={globalStyles.primaryText} /> : null}
    </View>
  );

  return (
    <View style={styles.container}>
      <Header leftComponent={leftComponent} title="Receipt Detail" />
      <View style={styles.content}>
        <View style={[globalStyles.row, globalStyles.horizontalSpaceBetween]}>
          <View style={[globalStyles.row]}>
            <Icon
              name="ios-archive"
              type="ionicon"
              style={[globalStyles.subHeadingIcon, globalStyles.marginRight]}
            />
            <CustomText label="Invoice - 1" style={globalStyles.subHeadingText} />
          </View>
          <View style={[globalStyles.row]}>
            <Icon
              name="circle"
              type="font-awesome"
              style={[globalStyles.subHeadingIcon, globalStyles.marginRight]}
            />
            <CustomText label="OrderId: OR-1234" />
          </View>
        </View>
        <CustomText
          label="Shipped Items"
          style={[globalStyles.marginTop, globalStyles.subHeadingText, globalStyles.primaryText]}
        />
        <View style={globalStyles.marginTop}>{metadata('Item1', 'Parcel')}</View>
        <CustomText
          label="Driver Info"
          style={[globalStyles.marginTop, globalStyles.subHeadingText, globalStyles.primaryText]}
        />
        <View style={globalStyles.marginTop}>{metadata('Abel Belete')}</View>
        <View style={styles.price}>
          <CustomText label="Total Payment" style={[globalStyles.primaryText]} />
          <CustomText
            label="150 ETB"
            style={[globalStyles.primaryText, globalStyles.headlineText]}
          />
          <CustomText label="On Aug 3 2020" style={[globalStyles.caption]} />
        </View>
        <View style={styles.bottomAction}>
          <CustomButton label="Print" />
        </View>
      </View>
    </View>
  );
}
