import React from 'react';
import {View, TouchableOpacity, SafeAreaView, Button} from 'react-native';
import Icon from 'react-native-easy-icon';

import {Header, CustomButton, Order} from '../../components';
import styles from './styles';
import globalStyles from '../../constants/styles';
import NavigationService from '../../lib/NavigationService';

export default function OrderConfimation() {
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
        <Order withRadioButton />

        <View style={styles.action}>
          <CustomButton label="Calculate Price" ghost />
        </View>
      </View>
      <View style={[globalStyles.bottomActions, globalStyles.center]}>
        <CustomButton label="Finish" onPress={() => NavigationService.navigate('Home')} />
      </View>
    </View>
  );
}
