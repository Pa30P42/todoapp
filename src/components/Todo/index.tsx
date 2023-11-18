import React from 'react';
import {View} from 'react-native';
import {H1} from '../Unknown/DesignSystem';
import TodoFilterPanel from './TodoFilterPanel';
import TodoTabs from './TodoTabs';

const Todo = () => {
  return (
    <View className="flex-1 pb-6">
      <View className="h-[100] bg-violet items-center -mx-4">
        <H1 color="white">My Todo List</H1>
      </View>
      <TodoFilterPanel />
      <TodoTabs />
    </View>
  );
};

export default Todo;
