import React from 'react';
import {View} from 'react-native';
import {BodySmallSB} from './Unknown/DesignSystem';
import {TodoCategory} from '../types/todo';
import Category from './Category';

interface ICategories {
  containerClassName?: string;
  onCategoryPress: (category: TodoCategory) => void;
  selectedCategories: TodoCategory[];
}

const Categories: React.FC<ICategories> = ({
  containerClassName,
  onCategoryPress,
  selectedCategories,
}) => {
  return (
    <View className={`flex-row items-center ${containerClassName}`}>
      <BodySmallSB className="mr-6">Category</BodySmallSB>
      <View className="items-center py-3">
        <View className="flex-row justify-between">
          <Category
            selectedCategories={selectedCategories}
            onPress={onCategoryPress}
            type="task"
          />
          <Category
            selectedCategories={selectedCategories}
            onPress={onCategoryPress}
            type="event"
          />
          <Category
            selectedCategories={selectedCategories}
            onPress={onCategoryPress}
            type="goal"
          />
        </View>
      </View>
    </View>
  );
};

export default Categories;
