import React, {useState} from 'react';
import {View, TouchableOpacity, Alert} from 'react-native';
import Icon from 'react-native-easy-icon';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import CheckBox from '@react-native-community/checkbox';

import CustomText from '../custom-text';
import styles from './styles';
import globalStyles from '../../constants/styles';
import Colors from '../../constants/colors';

interface ItemProps {
  withRadioButton: boolean;
  onPress: any;
}

const radioProps = [
  {label: 'Rush    ', value: 'rush'},
  {label: 'Same Day    ', value: 'same Day'},
  {label: 'Next Day    ', value: 'sext Day'},
];

export default function Item(props: ItemProps) {
  const {withRadioButton, onPress} = props;

  const [selectedRadioInput, setSelectedRadioInput] = useState(radioProps[0].label);

  const renderShare = () => {
    if (selectedRadioInput === radioProps[0].value) {
      return (
        <View style={styles.share}>
          <CheckBox
            disabled={false}
            boxType="square"
            tintColor={Colors.PRIMARY_COLOR}
            tintColors={{true: Colors.PRIMARY_COLOR, false: Colors.PRIMARY_COLOR}}
            onValueChange={console.log}
            onCheckColor={Colors.PRIMARY_COLOR}
            lineWidth={1}
          />
          <CustomText label="Share" style={styles.label} />
        </View>
      );
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[globalStyles.row, styles.itemHeader]}>
        <Icon name="ios-archive" type="ionicon" style={styles.itemIcon} />
        <CustomText label="Item 1" style={styles.label} />
      </View>
      <View style={[globalStyles.row]} />
      {withRadioButton ? (
        <View style={styles.otherForms}>
          <RadioForm
            formHorizontal
            radio_props={radioProps}
            buttonColor={Colors.PRIMARY_COLOR}
            selectedButtonColor={Colors.PRIMARY_COLOR}
            initial={selectedRadioInput}
            onPress={setSelectedRadioInput}
            buttonSize={10}
            buttonOuterSize={20}
          />
        </View>
      ) : null}
      {renderShare()}
    </TouchableOpacity>
  );
}
