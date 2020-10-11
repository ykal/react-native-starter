import React from 'react';
import {View} from 'react-native';

import {Input, SelectInput} from '../../components';
import globalStyles from '../../constants/styles';

export default function ItemInformationForm() {
  const packageTypeOptions = [
    {label: 'Standard', value: 'Standard'},
    {label: 'Secured', value: 'Secured'},
  ];

  const itemTypeOptions = [
    {label: 'Parcel', value: 'Parcel'},
    {label: 'Document', value: 'Document'},
  ];

  const itemSizeOptions = [
    {label: 'Small', value: 'Small'},
    {label: 'Medium', value: 'Medium'},
    {label: 'Large', value: 'Large'},
  ];

  return (
    <View style={globalStyles.formCard}>
      <Input label="Package Name (Optional)" />
      <SelectInput label="Packag Type" items={packageTypeOptions} />
      <SelectInput label="Item Type" items={itemTypeOptions} />
      <SelectInput label="Item Size" items={itemSizeOptions} />
    </View>
  );
}
