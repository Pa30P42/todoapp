import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from 'react-native';
import StyledTextInput from '../../Unknown/StyledTextInput';
import Categories from '../../Categories';

type Category = 'task' | 'event' | 'goal';

const TodoFilterPanel = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);
  const handleSearchChange = (
    text: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    console.log('text', text);
    // setSearchValue(text);
  };
  return (
    <View className="w-full">
      <StyledTextInput
        inputClassName="mb-4"
        onTextChange={handleSearchChange}
        value={searchValue}
        placeholder="Search Tasks"
      />
      <Categories />
    </View>
  );
};

export default TodoFilterPanel;
