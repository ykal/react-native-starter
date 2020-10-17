import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';

import NavigationService from '../../lib/NavigationService';
import {AuthScreenWrapper, CustomText, CustomButton} from '../../components';
import styles from './styles';

export default function Verification() {
  return (
    <AuthScreenWrapper>
      <CustomText
        label="Please enter the verification code we sent to your phone number"
        style={styles.captionText}
      />
      <CustomText label="Verification" style={styles.title} />
      <View style={styles.loginInput}>
        <TextInput style={styles.input} placeholder="Verification Code" />
      </View>
      <CustomText label={`Didn't get code ?`} style={styles.captionText} />
      <TouchableOpacity>
        <CustomText label="Resend" style={[styles.captionText, styles.linkText]} />
      </TouchableOpacity>
      <CustomButton
        label="Submit"
        containerStyle={styles.loginButton}
        onPress={() => NavigationService.navigate('AuthorizedScreens')}
      />
    </AuthScreenWrapper>
  );
}
