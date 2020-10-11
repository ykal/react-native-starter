import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import CustomText from '../custom-text';
import styles from './styles';
import globalStyles from '../../constants/styles';

interface HeaderProps {
  leftComponent?: any;
  rightComponent?: any;
  title: string;
}

export default function Header(props: HeaderProps) {
  const {leftComponent, rightComponent, title} = props;
  return (
    <View style={styles.container}>
      <View style={[styles.contentContainer, globalStyles.defaultShadow]}>
        <View>{leftComponent}</View>
        <CustomText label={title} style={globalStyles.headlineText} />
        <View>{rightComponent}</View>
      </View>
    </View>
  );
}
