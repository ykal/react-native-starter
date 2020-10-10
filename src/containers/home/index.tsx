import React from 'react';
import {View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from 'react-native-easy-icon';

import styles from './styles';
import globalStyles from '../../constants/styles';
import {CustomText} from '../../components';

export default function Home() {
  const renderNoOrder = () => (
    <View style={styles.center}>
      <CustomText label="You have no active orders" style={globalStyles.headlineText} />
      <CustomText label="Tap the plus button to add one" style={globalStyles.caption} />
    </View>
  );

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
      <View style={styles.content}>
        {renderNoOrder()}
        <TouchableOpacity style={[globalStyles.iconButton, globalStyles.floatingButton]}>
          <Icon
            name="ios-add"
            type="ionicon"
            style={[globalStyles.iconButtonLabel, globalStyles.floatingButtonLabel]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
