import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './containers/login';
import Verification from './containers/verification';
import Home from './containers/home';
import NewOrder from './containers/new-order';
import OrderItems from './containers/order-items';
import OrderConfirmation from './containers/order-confirmation';
import Shipment from './containers/shipment';
import VerifyReceiver from './containers/verify-receiver';

import RecieptNavigation from './containers/receipts';

export type AppTabParamList = {
  Home: undefined;
  Settings: {userID?: string};
};

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const App = () => {
  const HomeStack = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewOrder" component={NewOrder} />
      <Stack.Screen name="Shipment" component={Shipment} />
      <Stack.Screen name="OrderItems" component={OrderItems} />
      <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} />
      <Stack.Screen name="VerifyReceiver" component={VerifyReceiver} />
    </Stack.Navigator>
  );

  const AuthorizedScreens = () => (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="Reciepts" component={RecieptNavigation} />
    </Drawer.Navigator>
  );

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="AuthorizedScreens" component={AuthorizedScreens} />
    </Stack.Navigator>
  );
};

export default App;
