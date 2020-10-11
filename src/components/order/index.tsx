import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-easy-icon';

import {CustomText, Item} from '../../components';
import styles from './styles';
import globalStyles from '../../constants/styles';

export default function Order() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Icon name="ios-archive" type="ionicon" style={globalStyles.subHeadingIcon} />
        <CustomText label="OR-1234" style={[globalStyles.subHeadingText, styles.label]} />
      </View>
      <View style={styles.metaData}>
        <Icon name="ios-information-circle" type="ionicon" style={globalStyles.captionIcon} />
        <CustomText label="Total Item: 2" style={[globalStyles.caption, styles.label]} />
      </View>
      <View style={styles.items}>
        <CustomText label="Items" style={globalStyles.headlineText} />
        <Item />
      </View>
    </View>
  );
}
