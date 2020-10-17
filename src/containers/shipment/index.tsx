import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';
import {CustomText, Header} from '../../components';
import NavigationService from '../../lib/NavigationService';
import styles from './styles';
import globalStyles from '../../constants/styles';

export default function Shipment() {
  const metadata = (title: string, value: string) => (
    <View style={[globalStyles.row, globalStyles.center]}>
      <Icon
        name="ios-checkmark-circle"
        type="ionicon"
        style={[globalStyles.subHeadingIcon, globalStyles.green, globalStyles.marginRight]}
      />
      <CustomText label={`${title} : ${value}`} style={globalStyles.caption} />
    </View>
  );

  const leftComponent = (
    <TouchableOpacity style={globalStyles.iconButton} onPress={() => NavigationService.goback()}>
      <Icon name="ios-arrow-back" type="ionicon" style={globalStyles.iconButtonLabel} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Header leftComponent={leftComponent} title="OR-1234" />
      <View>
        <View style={styles.shipment}>
          <View style={[globalStyles.row]}>
            <View style={[globalStyles.row]}>
              <Icon
                name="motorcycle"
                type="font-awesome"
                style={[styles.mainIcon, globalStyles.marginRight]}
              />
              <CustomText label="Shipment 1" style={{...globalStyles.subHeadingText}} />
              <CustomText
                label="(Agent: Abel Belete)"
                style={{...globalStyles.subHeadingText, ...globalStyles.primaryText}}
              />
            </View>
          </View>
          <View />

          <View
            style={[globalStyles.row, globalStyles.horizontalSpaceBetween, globalStyles.marginTop]}>
            {metadata('ID', 'SH-5344')}
            {metadata('Agent will arive', '40 min')}
          </View>
          <View style={[globalStyles.row, globalStyles.alignEndHorizontal, globalStyles.marginTop]}>
            <View style={[globalStyles.row, globalStyles.center]}>
              <TouchableOpacity
                style={[globalStyles.iconButton, globalStyles.marginRight, styles.metadataButton]}
                onPress={() => NavigationService.navigate('VerifyReceiver')}>
                <Icon
                  name="retweet"
                  type="font-awesome"
                  style={[globalStyles.iconButtonLabel, styles.metadataIcon]}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={[globalStyles.iconButton, styles.metadataButton]}>
              <Icon
                name="ios-call"
                type="ionicon"
                style={[globalStyles.iconButtonLabel, styles.metadataIcon]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.items}>
          <CustomText label="Items" style={[globalStyles.subHeadingIcon, styles.itemsTitle]} />
          <View style={styles.item}>
            <View style={[globalStyles.row]}>
              <Icon
                name="circle"
                type="font-awesome"
                style={[styles.metadataIcon, globalStyles.marginRight, globalStyles.primaryText]}
              />
              <View style={[globalStyles.row, globalStyles.center]}>
                <CustomText label="Item1" style={[globalStyles.subHeadingText]} />
                <CustomText
                  label="(Parcel)"
                  style={[globalStyles.subHeadingText, globalStyles.primaryText]}
                />
              </View>
            </View>
            <View style={globalStyles.marginTop} />
            {metadata('Status', 'In Progress')}
          </View>
        </View>
      </View>
    </View>
  );
}
