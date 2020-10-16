import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-easy-icon';

import {CustomText, Item, Modal} from '../../components';
import styles from './styles';
import globalStyles from '../../constants/styles';
import ItemDetail from '../item-detail';
import NavigationService from '../../lib/NavigationService';

interface OrderProps {
  withRadioButton: boolean;
}

export default function Order(props: OrderProps) {
  const {withRadioButton} = props;

  const [isItemDetailVisible, setIsItemDetailVisible] = useState(false);

  const handleEditItem = () => {
    setIsItemDetailVisible(false);
    NavigationService.navigate('NewOrder');
  };

  const handleDeleteItem = () => {
    setIsItemDetailVisible(false);
    NavigationService.navigate('OrderItems');
  };

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
        <Item withRadioButton onPress={() => setIsItemDetailVisible(true)} />
      </View>
      <Modal isVisible={isItemDetailVisible} onClose={() => setIsItemDetailVisible(false)}>
        <ItemDetail onEdit={handleEditItem} onDelete={handleDeleteItem} />
      </Modal>
    </View>
  );
}
