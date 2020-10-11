import React from 'react';
import {View} from 'react-native';

import {Input, SelectInput} from '../../components';
import globalStyles from '../../constants/styles';

export default function PickupInformationForm() {
  return (
    <View style={globalStyles.formCard}>
      <Input label="Contact Number" />
      <Input label="Contact Name" />
      <Input label="Plus Code" />
      <Input label="Location Name" />
      <Input label="Location Description" />
      <Input label="Pickup Time Window" />
    </View>
  );
}
