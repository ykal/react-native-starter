import React from 'react';
import {View, Text, Image, ScrollView, Button} from 'react-native';
import Icon from 'react-native-easy-icon';
import Images from '../../constants/images';
import CustomText from '../custom-text';

import styles from './styles';
import globalStyles from '../../constants/styles';
import CustomButton from '../custom-button';

interface ItemDetailProps {
  onEdit: any;
  onDelete: any;
}

export default function ItemDetail(props: ItemDetailProps) {
  const {onEdit, onDelete} = props;

  const renderMetaData = (title: string, value: string) => (
    <View style={styles.metadataContainer}>
      <Icon name="ios-checkmark-circle" type="ionicon" style={styles.metadataIcon} />
      <CustomText label={`${title} : `} style={styles.metadataTitle} />
      <CustomText label={value} style={styles.metadataValue} />
    </View>
  );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.itemImageContainer}>
        <View style={styles.itemImage}>
          <Image source={Images.logo} style={styles.image} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.info}>
          <CustomText
            label="Item Info"
            style={{...globalStyles.subHeadingText, ...styles.infoTitle}}
          />
          {renderMetaData('Item Type', 'Parcel')}
          {renderMetaData('Item Size', 'Medium')}
          {renderMetaData('Package Type', 'Standard')}
        </View>
        <View style={styles.info}>
          <CustomText
            label="Address Info"
            style={{...globalStyles.subHeadingText, ...styles.infoTitle}}
          />
          {renderMetaData('Item Type', 'Parcel')}
          {renderMetaData('Item Size', 'Medium')}
          {renderMetaData('Package Type', 'Standard')}
        </View>
        <View style={styles.info}>
          <CustomText
            label="Order Info"
            style={{...globalStyles.subHeadingText, ...styles.infoTitle}}
          />
          {renderMetaData('Delivery Type', 'Secured')}
          {renderMetaData('Order Type', 'Rush')}
          {renderMetaData('COD', '50 ETB')}
          {renderMetaData('POD', 'Yes')}
          {renderMetaData('Pay Point', 'Receiver')}
        </View>
      </View>
      <View style={styles.actions}>
        <CustomButton label="Edit" ghost containerStyle={styles.button} onPress={onEdit} />
        <CustomButton label="Delete" containerStyle={styles.button} onPress={onDelete} />
      </View>
    </ScrollView>
  );
}
