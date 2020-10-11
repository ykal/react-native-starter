import React from 'react';
import {View} from 'react-native';

import {Input, SelectInput} from '..';
import globalStyles from '../../constants/styles';

export default function DeliveryInformationForm() {
  return (
    <View style={globalStyles.formCard}>
      <Input label="Contact Number" />
      <Input label="Organization Name (Optional)" />
      <Input label="Recipient Name" />
      <Input label="Plus Code" />
      <Input label="Location Name" />
      <Input label="Location Description" />
      <Input label="Delivery Time Window" />
    </View>
  );
}
