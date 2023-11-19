import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {BodySB, BodySmall} from './DesignSystem';
import {CheckedIcon, EventIcon, GoalIcon, TaskIcon} from '../icons';
import {Todo} from '../../types';
import {useAppDispatch} from '../../hooks/reduxHooks';
import {toggleTodo} from '../../store/todoSlice';

interface Props {
  todo: Todo;
}

const Task: React.FC<Props> = ({todo}) => {
  const {title, category, completed, time, id} = todo;
  const dispatch = useAppDispatch();

  const onCompletePress = () => {
    dispatch(toggleTodo(id));
  };

  const renderIcon = () => {
    switch (category) {
      case 'event':
        return <EventIcon />;
      case 'task':
        return <TaskIcon />;
      case 'goal':
        return <GoalIcon />;
      default:
        return null;
    }
  };

  return (
    <View className="flex-row w-full justify-between items-center p-4 border-b border-lightGray">
      <View className={`flex-row items-center ${completed && 'opacity-40'}`}>
        <View className="mr-3">{renderIcon()}</View>
        <View>
          <BodySB crossed={completed}>{title}</BodySB>
          <BodySmall crossed={completed} light={true}>
            {time}
          </BodySmall>
        </View>
      </View>
      <TouchableOpacity
        onPress={onCompletePress}
        className={`border border-violet w-6 h-6 rounded ${
          completed && 'bg-violet'
        }`}>
        <CheckedIcon color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
