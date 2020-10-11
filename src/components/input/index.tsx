import React from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import CustomText from '../custom-text';

import styles from './styles';

interface InputProps {
  label: string;
}

export default function Input(props: InputProps) {
  const {label} = props;
  return (
    <View style={styles.container}>
      <CustomText label={label} style={styles.label} />
      <TextInput style={styles.textInput} />
    </View>
  );
}
