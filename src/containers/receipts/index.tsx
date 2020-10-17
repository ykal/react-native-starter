import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ReceiptList from './receipt-list';

const Stack = createStackNavigator();

const ReceiptNavigation = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ReceiptList" component={ReceiptList} />
  </Stack.Navigator>
);

export default ReceiptNavigation;
