import React from 'react';
import {View} from 'react-native';
import Layout from '../components/Unknown/Layout';
import StyledTextInput from '../components/Unknown/StyledTextInput';
import Categories from '../components/Categories';
import DatePicker from '../components/Unknown/DatePicker';
import StyledButton from '../components/Unknown/StyledButton';

const CreateTodo = () => {
  const handleCreateTodo = () => {};
  return (
    <Layout>
      <View className="flex-1 justify-between">
        <View className="px- py-6">
          <StyledTextInput label="Task Title" />
          <Categories containerClassName="mb-6" />
          <View className="flex-row mb-6">
            <DatePicker containerStyles="mr-4" />
            <DatePicker type="time" />
          </View>
          <StyledTextInput
            placeholder="Notes"
            label="Notes"
            multiline={true}
            inputClassName="h-[180]"
          />
        </View>
      </View>
      <StyledButton onPress={handleCreateTodo} title="Save" />
    </Layout>
  );
};

export default CreateTodo;
