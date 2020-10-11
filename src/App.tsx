import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './containers/login';
import Verification from './containers/verification';
import Home from './containers/home';
import NewOrder from './containers/new-order';

export type AppTabParamList = {
  Home: undefined;
  Settings: {userID?: string};
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewOrder" component={NewOrder} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default App;
