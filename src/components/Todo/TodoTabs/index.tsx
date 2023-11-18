import React, {useState, useCallback} from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
// import ToDoUncompleted from './ToDoUncompleted';
// import ToDoCompleted from './ToDoCompleted';
import {View} from 'react-native';
import TodoList from '../TodoList';
import {H3} from '../../Unknown/DesignSystem';

const mockData = [
  {
    id: 1,
    title: 'Tas k1 ',
    completed: false,
    category: 'task',
    time: '4:00 P.M',
  },
  {
    id: 2,
    title: 'Tas k1 ',
    completed: false,
    category: 'task',
    time: '4:00 P.M',
  },
  {
    id: 3,
    title: 'Tas k2 ',
    completed: false,
    category: 'task',
    time: '4:00 P.M',
  },
];

const completedTodos = [
  {
    id: 4,
    title: 'Tas k4 ',
    completed: true,
    category: 'event',
    time: '4:00 P.M',
  },
  {
    id: 5,
    title: 'Tas k234 ',
    completed: true,
    category: 'goal',
    time: '4:00 P.M',
  },
  {
    id: 6,
    title: 'Tas k234 ',
    completed: true,
    category: 'goal',
    time: '4:00 P.M',
  },
  {
    id: 7,
    title: 'Tas k234 ',
    completed: true,
    category: 'goal',
    time: '4:00 P.M',
  },
];

const UncompletedToDos = () => (
  <View className="flex-1 items-center rounded-2xl bg-primaryWhite">
    <H3 className="py-2">Current Tasks</H3>
    <TodoList todos={mockData} />
  </View>
);
const CompletedToDos = () => (
  <View className="w-full items-center rounded-2xl bg-primaryWhite">
    <H3 className="py-2">Completed Tasks</H3>
    <TodoList todos={completedTodos} />
  </View>
);

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
    <View className="w-full h-full" style={{flex: 1}}>
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
