import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

interface CustomTextProps {
  label: string;
}

export default function CustomText(props: CustomTextProps) {
  const {label, ...otherProps} = props;
  return (
    <Text style={styles.label} {...otherProps}>
      {label}
    </Text>
  );
}
