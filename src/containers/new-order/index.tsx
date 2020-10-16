import React, {useState} from 'react';
import {ScrollView, View, TouchableOpacity, Image} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Icon from 'react-native-easy-icon';
import ImagePicker from 'react-native-image-picker';

import {
  DeliveryInformationForm,
  FormStepHeader,
  ItemInformationForm,
  OrderInformationForm,
  PickupInformationForm,
  CustomButton,
} from '../../components';
import styles from './styles';
import globalStyles from '../../constants/styles';
import NavigationService from '../../lib/NavigationService';

const FORMS = [
  {
    name: 'Item Information',
    next: 'Pickup Information',
    percent: 25,
    key: 1,
  },
  {
    name: 'Pickup Information',
    next: 'Destination Information',
    percent: 50,
    key: 2,
  },
  {
    name: 'Destination Information',
    next: 'Order Information',
    percent: 75,
    key: 3,
  },
  {
    name: 'Order Information',
    next: 'Item Information',
    percent: 100,
    key: 4,
  },
];

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const ImagePickerOptions = {
  title: 'Select Image',
};

export default function NewOrder() {
  const [activeForm, setActiveForm] = useState(0);
  const [itemImage, setItemImage] = useState<any>(null);

  const handleSwipeLeft = () => {
    if (FORMS[activeForm].key !== 4) {
      setActiveForm(activeForm + 1);
    }
  };
  const handleSwipeRight = () => {
    if (FORMS[activeForm].key !== 1) {
      setActiveForm(activeForm - 1);
    }
  };

  const renderSwipeLeftButton = () => {
    if (FORMS[activeForm].key !== 4) {
      return (
        <TouchableOpacity style={[globalStyles.iconButton, styles.swipeLeftButton]}>
          <Icon name="ios-arrow-forward" type="ionicon" style={globalStyles.iconButtonLabel} />
        </TouchableOpacity>
      );
    }
  };
  const renderSwipeRightButton = () => {
    if (FORMS[activeForm].key !== 1) {
      return (
        <TouchableOpacity style={[globalStyles.iconButton, styles.swipeRightButton]}>
          <Icon name="ios-arrow-back" type="ionicon" style={globalStyles.iconButtonLabel} />
        </TouchableOpacity>
      );
    }
  };

  const renderDoneButton = () => {
    if (FORMS[activeForm].key === 4) {
      return <CustomButton label="Done" onPress={() => NavigationService.navigate('OrderItems')} />;
    }
  };

  const renderForm = () => {
    if (FORMS[activeForm].key === 1) {
      return <ItemInformationForm />;
    } else if (FORMS[activeForm].key === 2) {
      return <PickupInformationForm />;
    } else if (FORMS[activeForm].key === 3) {
      return <DeliveryInformationForm />;
    } else if (FORMS[activeForm].key === 4) {
      return <OrderInformationForm />;
    }
  };

  const chooseImage = () => {
    ImagePicker.showImagePicker(ImagePickerOptions, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setItemImage(response);
      }
    });
  };

  return (
    <View style={styles.container}>
      <FormStepHeader activeForm={FORMS[activeForm]} />
      <ScrollView>
        <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.itemImage} onPress={chooseImage}>
            {itemImage ? (
              <Image
                source={{
                  uri: itemImage.uri,
                }}
                style={styles.image}
                resizeMethod="scale"
                resizeMode="center"
              />
            ) : (
              <Icon name="ios-camera" type="ionicon" style={styles.icon} />
            )}
          </TouchableOpacity>
        </View>
        <GestureRecognizer
          config={config}
          style={styles.content}
          onSwipeLeft={handleSwipeLeft}
          onSwipeRight={handleSwipeRight}>
          {renderForm()}
          {renderSwipeLeftButton()}
          {renderSwipeRightButton()}
        </GestureRecognizer>
        <View style={styles.bottomAction}>{renderDoneButton()}</View>
      </ScrollView>
    </View>
  );
}
