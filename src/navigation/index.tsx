import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CreateTask from '../screens/CreateTask';
import Header from '../components/Unknown/Header';

export type RootStackParams = {
  Home: undefined;
  CreateTask: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParams>();

const RootNavigator: React.FC<NativeStackScreenProps<RootStackParams>> = () => {
  return (
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen
        options={{
          header: () => <Header title="Home" />,
        }}
        name="Home"
        component={Home}
      />
      <RootStack.Screen name="CreateTask" component={CreateTask} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
