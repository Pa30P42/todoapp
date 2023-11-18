import React from 'react';
import {Todo} from '../../../types';
import {FlatList, View} from 'react-native';
import Task from '../../Unknown/Task';

interface Props {
  todos: Todo[];
  testID?: string;
}

const TodoList: React.FC<Props> = ({todos, testID}) => {
  return (
    <View>
      <FlatList
        testID={testID}
        data={todos}
        renderItem={({item}) => <Task key={item.id} todo={item} />}
      />
    </View>
  );
};

export default TodoList;
