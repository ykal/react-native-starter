import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReceiptList from './receipt-list';
import ReceiptDetail from './receipt-detail';

const Stack = createStackNavigator();

const ReceiptNavigation = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ReceiptList" component={ReceiptList} />
    <Stack.Screen name="ReceiptDetail" component={ReceiptDetail} />
  </Stack.Navigator>
);

export default ReceiptNavigation;
