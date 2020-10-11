import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {
  DeliveryInformationForm,
  FormStepHeader,
  ItemInformationForm,
  OrderInformationForm,
  PickupInformationForm,
} from '../../components';

import styles from './styles';

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

export default function NewOrder() {
  const [activeForm, setActiveForm] = useState(FORMS[3]);

  const renderForm = () => {
    if (activeForm.key === 1) {
      return <ItemInformationForm />;
    } else if (activeForm.key === 2) {
      return <PickupInformationForm />;
    } else if (activeForm.key === 3) {
      return <DeliveryInformationForm />;
    } else if (activeForm.key === 4) {
      return <OrderInformationForm />;
    }
  };

  return (
    <View style={styles.container}>
      <FormStepHeader activeForm={activeForm} />
      <View style={styles.content}>{renderForm()}</View>
    </View>
  );
}
