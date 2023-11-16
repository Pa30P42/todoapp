import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CreateTask from '../screens/CreateTask';

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="Home" component={Home} />
      <RootStack.Screen name="CreateTask" component={CreateTask} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
