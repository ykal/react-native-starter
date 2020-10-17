import React, {useState} from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-easy-icon';

import styles from './styles';
import globalStyles from '../../constants/styles';
import {ActiveOrder, CustomText, CompletedOrders} from '../../components';
import NavigationService from '../../lib/NavigationService';

export default function Home() {
  const [isCompletedOrderVisible, setIsCompletedOrderVisible] = useState(false);

  const renderNoOrder = () => (
    <View style={styles.center}>
      <CustomText label="You have no active orders" style={globalStyles.headlineText} />
      <CustomText label="Tap the plus button to add one" style={globalStyles.caption} />
    </View>
  );

  const renderCompletedOrders = () => {
    return isCompletedOrderVisible ? (
      <CompletedOrders onClose={() => setIsCompletedOrderVisible(false)} />
    ) : null;
  };

  const renderActiveOrders = () => {
    return !isCompletedOrderVisible ? (
      <>
        <View style={styles.content}>
          <ActiveOrder />
          <TouchableOpacity
            style={[globalStyles.iconButton, globalStyles.floatingButton]}
            onPress={() => NavigationService.navigate('NewOrder')}>
            <Icon
              name="ios-add"
              type="ionicon"
              style={[globalStyles.iconButtonLabel, globalStyles.floatingButtonLabel]}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[globalStyles.row, styles.bottomButton]}
          onPress={() => setIsCompletedOrderVisible(true)}>
          <Icon name="ios-arrow-dropup" type="ionicon" style={globalStyles.subHeadingIcon} />
          <CustomText label="Compoleted Orders" style={globalStyles.headlineText} />
        </TouchableOpacity>
      </>
    ) : null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity style={globalStyles.iconButton}>
            <Icon name="ios-menu" type="ionicon" style={globalStyles.iconButtonLabel} />
          </TouchableOpacity>
          <TouchableOpacity style={globalStyles.iconButton}>
            <Icon name="ios-notifications" type="ionicon" style={globalStyles.iconButtonLabel} />
          </TouchableOpacity>
        </SafeAreaView>
        <CustomText label="Good Morning, Alebel" style={styles.secondaryText} />
        <CustomText label="Your Orders" style={styles.title} />
      </View>
      {renderCompletedOrders()}

      {renderActiveOrders()}
    </View>
  );
}
