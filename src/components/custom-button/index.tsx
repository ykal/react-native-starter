import React from 'react';
import {ViewStyle, TouchableOpacity} from 'react-native';
import CustomText from '../custom-text';
import styles from './styles';

interface CustomButtonProps {
  label: string;
  ghost?: boolean;
  containerStyle?: ViewStyle;
}

export default function CustomButton(props: CustomButtonProps) {
  const {label, ghost, containerStyle} = props;
  return (
    <TouchableOpacity
      style={[styles.container, ghost ? styles.ghost : styles.solid, {...containerStyle}]}>
      <CustomText
        label={label}
        style={[styles.label, ghost ? styles.ghostLabel : styles.solidLabel]}
      />
    </TouchableOpacity>
  );
}
