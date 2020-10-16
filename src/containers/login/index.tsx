import React from 'react';
import {View, Image, TextInput} from 'react-native';
import Images from '../../constants/images';

import {AuthScreenWrapper, CustomButton, CustomText} from '../../components';
import styles from './styles';
import NavigationService from '../../lib/NavigationService';

export default function Login() {
  return (
    <AuthScreenWrapper>
      <CustomText label="Login using your phone number" style={styles.captionText} />
      <CustomText label="Let's Start" style={styles.title} />
      <View style={styles.loginInput}>
        <Image source={Images.flagEth} style={styles.flagIcon} />
        <TextInput style={styles.input} placeholder="Phone Number" />
      </View>
      <CustomText label={`By Pressing "submit" you agree to our`} style={styles.captionText} />
      <CustomText label="terms & conditions" style={[styles.captionText, styles.linkText]} />
      <CustomButton
        label="Submit"
        containerStyle={styles.loginButton}
        onPress={() => NavigationService.navigate('Verification')}
      />
    </AuthScreenWrapper>
  );
}
