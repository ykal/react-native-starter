import React, {ReactNodeArray} from 'react';
import {View, Image} from 'react-native';

import Images from '../../constants/images';
import styles from './styles';

interface AuthScreenWrapperProps {
  children: ReactNodeArray;
}

export default function AuthScreenWrapper(props: AuthScreenWrapperProps) {
  const {children} = props;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={Images.background} style={styles.logoBackground} />
        <Image source={Images.logo} style={styles.logo} />
      </View>
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
}
