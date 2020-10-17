import React, {useState} from 'react';
import {View, ScrollView, TextInput, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-easy-icon';

import {CustomButton, CustomText, Header} from '../../components';
import NavigationService from '../../lib/NavigationService';
import styles from './styles';
import globalStyles from '../../constants/styles';
import Images from '../../constants/images';

export default function VerifyReceiver() {
  const [isVerified, setIsVerified] = useState(false);

  const leftComponent = (
    <TouchableOpacity style={globalStyles.iconButton} onPress={() => NavigationService.goback()}>
      <Icon name="ios-arrow-back" type="ionicon" style={globalStyles.iconButtonLabel} />
    </TouchableOpacity>
  );

  const renderMetadata = (title: string, value: string) => (
    <View style={globalStyles.row}>
      <Icon
        name="ios-checkmark-circle"
        type="ionicon"
        style={[globalStyles.green, globalStyles.marginRight]}
      />
      <CustomText label={`${title} : `} style={globalStyles.caption} />
      <CustomText label={`${value}`} style={(globalStyles.caption, globalStyles.primaryText)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header leftComponent={leftComponent} title="Verify Receiver" />
      <ScrollView>
        <View style={styles.content}>
          <View style={[styles.card]}>
            <View style={[globalStyles.row]}>
              <Icon
                name="circle"
                type="font-awesome"
                style={[globalStyles.captionIcon, globalStyles.marginRight]}
              />
              <CustomText label="Use barcode reader" style={[globalStyles.subHeadingText]} />
            </View>
            <CustomButton
              label="Scan"
              ghost
              containerStyle={styles.button}
              onPress={() => setIsVerified(true)}
            />
          </View>
          <CustomText label="OR" style={[globalStyles.caption, styles.orText]} />
          <View style={[styles.card]}>
            <View style={[globalStyles.row]}>
              <Icon
                name="circle"
                type="font-awesome"
                style={[globalStyles.captionIcon, globalStyles.marginRight]}
              />
              <CustomText label="Use pin number" style={[globalStyles.subHeadingText]} />
            </View>
            <TextInput placeholder="Place pin number here" style={styles.textInput} />
            <CustomButton
              label="Verify"
              ghost
              containerStyle={styles.button}
              onPress={() => setIsVerified(true)}
            />
          </View>
        </View>
        {isVerified ? (
          <View>
            <View
              style={[
                globalStyles.row,
                globalStyles.horizontalSpaceBetween,
                styles.card,
                styles.content,
              ]}>
              <View style={styles.driverInfo}>
                <View style={[globalStyles.row]}>
                  <Icon
                    name="ios-person"
                    type="ionicon"
                    style={[
                      globalStyles.iconButtonLabel,
                      globalStyles.primaryText,
                      globalStyles.marginRight,
                    ]}
                  />
                  <View>
                    <CustomText
                      label="Receiver"
                      style={(globalStyles.caption, globalStyles.primaryText)}
                    />
                    <CustomText label="Abel Belete" style={globalStyles.subHeadingText} />
                  </View>
                </View>
                <View style={globalStyles.marginTop}>
                  {renderMetadata('Number Of Items', '2')}
                  {renderMetadata('COD', '85 ETB')}
                </View>
              </View>
              <Image source={Images.avatar} style={styles.image} />
            </View>
            <View style={[styles.bottomAction, globalStyles.center]}>
              <CustomButton label="Finish" />
            </View>
          </View>
        ) : null}
      </ScrollView>
    </View>
  );
}
