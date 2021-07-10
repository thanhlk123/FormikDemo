import React from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import DashBoard from './src/DashBoard';
import Usage from './src/component';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="DashBoard"
          component={DashBoard}
          options={{headerShown: true}}
        />
        <RootStack.Screen
          name="BasicForm"
          component={Usage.BasicForm}
          options={{headerShown: true}}
        />
        <RootStack.Screen
          name="FormValidateByYup"
          component={Usage.FormValidateByYup}
          options={{headerShown: true}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
