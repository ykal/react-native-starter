import React, {useState} from 'react';
import {ScrollView, View, TouchableOpacity} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import Icon from 'react-native-easy-icon';

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

export default function NewOrder() {
  const [activeForm, setActiveForm] = useState(0);

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
      return <CustomButton label="Done" />;
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

  return (
    <View style={styles.container}>
      <FormStepHeader activeForm={FORMS[activeForm]} />
      <ScrollView>
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
