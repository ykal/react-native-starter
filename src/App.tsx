import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './containers/login';

export type AppTabParamList = {
  Home: undefined;
  Settings: {userID?: string};
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default App;
