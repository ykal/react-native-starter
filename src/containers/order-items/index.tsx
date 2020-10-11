import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-easy-icon';

import {CustomButton, Header, Order} from '../../components';
import styles from './styles';
import globalStyles from '../../constants/styles';

export default function OrderItems() {
  const rightComponent = (
    <TouchableOpacity style={globalStyles.iconButton}>
      <Icon name="ios-save" type="ionicon" style={globalStyles.iconButtonLabel} />
    </TouchableOpacity>
  );
  const leftComponent = (
    <TouchableOpacity style={globalStyles.iconButton}>
      <Icon name="ios-arrow-back" type="ionicon" style={globalStyles.iconButtonLabel} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Header leftComponent={leftComponent} rightComponent={rightComponent} title="Order Items" />
      </SafeAreaView>
      <View style={styles.content}>
        <Order />
      </View>
      <View style={globalStyles.bottomActions}>
        <View>
          <CustomButton label="Add Item" containerStyle={styles.button} ghost />
        </View>
        <View>
          <CustomButton label="Submit" containerStyle={styles.button} />
        </View>
      </View>
    </View>
  );
}
