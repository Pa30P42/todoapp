import React from 'react';
import {View} from 'react-native';
import {BodySmallSB} from './Unknown/DesignSystem';
import {TodoCategory} from '../types/todo';
import Category from './Category';

interface ICategories {
  containerClassName?: string;
  onCategoryPress: (category: TodoCategory) => void;
}

const Categories: React.FC<ICategories> = ({
  containerClassName,
  onCategoryPress,
}) => {
  return (
    <View className={`flex-row items-center ${containerClassName}`}>
      <BodySmallSB className="mr-6">Category</BodySmallSB>
      <View className="items-center py-3">
        <View className="flex-row justify-between">
          <Category onPress={onCategoryPress} type="task" />
          <Category onPress={onCategoryPress} type="event" />
          <Category onPress={onCategoryPress} type="goal" />
        </View>
      </View>
    </View>
  );
};

export default Categories;
