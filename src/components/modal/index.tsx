import React, {ReactNode, ReactNodeArray} from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
import Icon from 'react-native-easy-icon';

import styles from './styles';
import globalStyles from '../../constants/styles';

interface CustomModal {
  isVisible: boolean;
  children: ReactNodeArray | ReactNode;
  onClose: any;
}

export default function CustomModal(props: CustomModal) {
  const {isVisible, children, onClose} = props;

  return (
    <Modal visible={isVisible} transparent>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <TouchableOpacity
              style={[globalStyles.iconButton, styles.colseButton]}
              onPress={onClose}>
              <Icon name="ios-close" type="ionicon" style={globalStyles.iconButtonLabel} />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}
