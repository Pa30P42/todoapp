import React, {useState, useCallback} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {View} from 'react-native';
import TodoList from '../TodoList';
import {H3} from '../../Unknown/DesignSystem';
import {useAppSelector} from '../../../hooks/reduxHooks';
import {RootState} from '../../../store';

const UncompletedToDos = () => {
  const todos = useAppSelector((state: RootState) =>
    state.todos.filter(todo => !todo.completed),
  );
  return (
    <View className="flex-1 items-center rounded-2xl bg-primaryWhite">
      <H3 className="py-2">Current Tasks</H3>
      <TodoList todos={todos} />
    </View>
  );
};
const CompletedToDos = () => {
  const todos = useAppSelector((state: RootState) =>
    state.todos.filter(todo => todo.completed),
  );
  return (
    <View className="w-full items-center rounded-2xl bg-primaryWhite">
      <H3 className="py-2">Completed Tasks</H3>
      <TodoList todos={todos} />
    </View>
  );
};

const renderTabBar = (props: any) => {
  return (
    <TabBar
      testID="tabbar"
      {...props}
      indicatorStyle={{backgroundColor: '#464033'}}
      style={{backgroundColor: '#B1B1B1', height: 2}}
    />
  );
};

const TodoTabs = () => {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {key: 'uncompleted', name: 'UncompletedToDos'},
    {key: 'completed', name: 'CompletedToDos'},
  ]);

  const renderScene = SceneMap({
    uncompleted: UncompletedToDos,
    completed: CompletedToDos,
  });

  const handleIndexChange = useCallback((newIndex: number) => {
    setIndex(newIndex);
  }, []);

  return (
    <View className="flex-1 w-full h-full">
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={handleIndexChange}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default TodoTabs;
