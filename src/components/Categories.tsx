import React from 'react';
import {View} from 'react-native';
import {EventIcon, GoalIcon, TaskIcon} from './icons';
import {BodySmallSB} from './Unknown/DesignSystem';

interface Props {
  containerClassName: string;
}

const Categories: React.FC<Props> = ({containerClassName}) => {
  return (
    <View className={`flex-row items-center ${containerClassName}`}>
      <BodySmallSB className="mr-6">Category</BodySmallSB>
      <View className="items-center py-3">
        <View className="flex-row  justify-between">
          <View className="rounded-full border-2 border-primaryWhite mr-4">
            <GoalIcon />
          </View>
          <View className="rounded-full border-2 border-primaryWhite mr-4">
            <TaskIcon />
          </View>
          <View className="rounded-full border-2 border-primaryWhite">
            <EventIcon />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Categories;
