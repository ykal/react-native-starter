import React, {useState} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-easy-icon';

import {Header, CustomButton, Order, Modal, CustomText} from '../../components';
import styles from './styles';
import globalStyles from '../../constants/styles';
import NavigationService from '../../lib/NavigationService';

export default function OrderConfimation() {
  const [isPriceVisible, setIsPriceVisible] = useState(false);

  const rightComponent = (
    <TouchableOpacity
      style={globalStyles.iconButton}
      onPress={() => NavigationService.navigate('Home')}>
      <Icon name="ios-save" type="ionicon" style={globalStyles.iconButtonLabel} />
    </TouchableOpacity>
  );
  const leftComponent = (
    <TouchableOpacity style={globalStyles.iconButton} onPress={() => NavigationService.goback()}>
      <Icon name="ios-arrow-back" type="ionicon" style={globalStyles.iconButtonLabel} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header
          title="Order Confirmation"
          leftComponent={leftComponent}
          rightComponent={rightComponent}
        />
      </SafeAreaView>
      <View style={styles.content}>
        <Order withRadioButton hideDetail />

        <View style={styles.action}>
          <CustomButton label="Calculate Price" ghost onPress={() => setIsPriceVisible(true)} />
        </View>
      </View>
      <View style={[globalStyles.bottomActions, globalStyles.center]}>
        <CustomButton label="Finish" onPress={() => NavigationService.navigate('Home')} />
      </View>
      <Modal isVisible={isPriceVisible} onClose={() => setIsPriceVisible(false)}>
        <View style={styles.price}>
          <View style={styles.priceListItem}>
            <View style={styles.row}>
              <Icon name="ios-archive" type="ionicon" style={styles.icon} />
              <View style={styles.row}>
                <CustomText label="Item 1" style={{...styles.itemName}} />
                <CustomText
                  label="(Parcel)"
                  style={{...globalStyles.headlineText, ...styles.itemName}}
                />
              </View>
            </View>
            <CustomText label="90 ETB" style={{...globalStyles.headlineText}} />
          </View>
        </View>
        <View>
          <View style={styles.row}>
            <Icon name="ios-checkmark-circle" type="ionicon" style={styles.icon} />
            <CustomText label="No. Vehicles : " />
            <CustomText label="2" />
          </View>
          <View style={styles.row}>
            <Icon name="ios-checkmark-circle" type="ionicon" style={styles.icon} />
            <CustomText label="No. Routes : " />
            <CustomText label="2" />
          </View>
        </View>
      </Modal>
    </View>
  );
}
