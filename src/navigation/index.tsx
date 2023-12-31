import React from 'react';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Header from '../components/Unknown/Header';
import CloseButton from '../components/Unknown/CloseButton';
import CreateTodo from '../screens/CreateTodo';

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
      <RootStack.Screen
        options={{
          header: () => (
            <Header headerLeft={<CloseButton />} title="Add New Task" />
          ),
        }}
        name="CreateTask"
        component={CreateTodo}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
