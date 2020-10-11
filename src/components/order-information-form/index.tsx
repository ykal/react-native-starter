import React from 'react';
import {View} from 'react-native';

import {Input, SelectInput} from '../../components';
import globalStyles from '../../constants/styles';

export default function OrderInformationForm() {
  const deliveryTypeOptions = [
    {label: 'Pickup center', value: 'Pickup center'},
    {label: 'At recipients address', value: 'At recipients address'},
  ];

  const orderTypeOptions = [
    {label: 'Rush', value: 'Rush'},
    {label: 'Same Day', value: 'Same Day'},
    {label: 'Next Day', value: 'Next Day'},
  ];

  const itemSizeOptions = [
    {label: 'Small', value: 'Small'},
    {label: 'Medium', value: 'Medium'},
    {label: 'Large', value: 'Large'},
  ];

  const podOptions = [
    {label: 'Yes', value: 'Yes'},
    {label: 'No', value: 'No'},
  ];

  return (
    <View style={globalStyles.formCard}>
      <SelectInput label="Delivery Type" items={deliveryTypeOptions} />
      <SelectInput label="Order Type" items={orderTypeOptions} />
      <SelectInput label="Item Size" items={itemSizeOptions} />
      <SelectInput label="POD" items={podOptions} />
      <SelectInput label="Pay Point" items={deliveryTypeOptions} />
      <Input label="COD (ETB)" />
    </View>
  );
}
