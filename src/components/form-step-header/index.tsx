import React from 'react';
import {View, SafeAreaView} from 'react-native';
import CustomText from '../custom-text';
import ProgressCircle from 'react-native-progress-circle';

import styles from './styles';
import globalStyles from '../../constants/styles';
import Colors from '../../constants/colors';

interface FormStepHeaderProps {
  activeForm: {name: string; next: string; percent: number; key: number};
}

export default function FormStepHeader(props: FormStepHeaderProps) {
  const {activeForm} = props;
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.contentContainer}>
        <ProgressCircle
          percent={activeForm.percent}
          radius={40}
          borderWidth={5}
          color={Colors.SECONDARY_COLOR}
          shadowColor={Colors.GREY}
          bgColor="#fff">
          <CustomText label={`${activeForm.key} / 4`} style={globalStyles.headlineText} />
        </ProgressCircle>
        <View style={styles.title}>
          <CustomText
            label={activeForm.name}
            style={[globalStyles.headlineText, globalStyles.zeroPaddign]}
          />
          <CustomText label={`${activeForm.next}`} style={globalStyles.caption} />
        </View>
      </SafeAreaView>
    </View>
  );
}
