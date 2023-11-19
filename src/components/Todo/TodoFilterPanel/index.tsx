import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import StyledTextInput from '../../Unknown/StyledTextInput';
import Categories from '../../Categories';
import {useAppDispatch} from '../../../hooks/reduxHooks';
import {toggleCategory, updateSearchValue} from '../../../store/todoSlice';
import {TodoCategory} from '../../../types/todo';

const TodoFilterPanel = () => {
  const [searchValue, setSearchValue] = useState('');

  const dispatch = useAppDispatch();

  const handleSearchChange = (text: string) => {
    setSearchValue(text);
  };

  const selectFilterCategory = (category: TodoCategory) => {
    dispatch(toggleCategory(category));
  };

  useEffect(() => {
    dispatch(updateSearchValue(searchValue));
  }, [searchValue, dispatch]);

  return (
    <View className="w-full">
      <StyledTextInput
        inputClassName="mb-4"
        onTextChange={handleSearchChange}
        value={searchValue}
        placeholder="Search Tasks"
      />
      <Categories onCategoryPress={selectFilterCategory} />
    </View>
  );
};

export default TodoFilterPanel;
