import React, {useEffect, useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from 'react-native';
import StyledTextInput from '../../Unknown/StyledTextInput';
import Categories from '../../Categories';
import {useAppDispatch} from '../../../hooks/reduxHooks';
import {searchTodo} from '../../../store/todoSlice';

type Category = 'task' | 'event' | 'goal';

const TodoFilterPanel = () => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category[]>([]);

  const dispatch = useAppDispatch();

  const handleSearchChange = (text: string) => {
    setSearchValue(text);
  };

  useEffect(() => {
    console.log('searchValue', searchValue);
    dispatch(searchTodo(searchValue));
  }, [searchValue, dispatch]);

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
